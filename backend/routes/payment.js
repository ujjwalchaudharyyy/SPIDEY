const express = require('express');
const crypto = require('crypto');

const router = express.Router();

const KEY_ID = process.env.RAZORPAY_KEY_ID || 'rzp_test_SPIDEYDEMO123';
const KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'spidey_secret_demo_456';
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || '';

// In-memory order tracking
const orders = new Map();
const paidOrders = new Set();

function safeEqualHex(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  try {
    return crypto.timingSafeEqual(Buffer.from(a, 'hex'), Buffer.from(b, 'hex'));
  } catch {
    return false;
  }
}

// POST /api/create-order or /api/payment/create-order
router.post('/create-order', async (req, res) => {
  try {
    const { amount, eventTitle, eventId, studentName, studentEmail } = req.body || {};
    // Amount in paise (e.g. ₹199 = 19900 paise)
    const amountPaise = Number(amount) || 19900;
    const productName = eventTitle || 'Campus Event Pass';

    let razorpayOrderId = null;
    if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET && !process.env.RAZORPAY_KEY_ID.includes('REPLACE_ME')) {
      try {
        const Razorpay = require('razorpay');
        const rzp = new Razorpay({
          key_id: process.env.RAZORPAY_KEY_ID,
          key_secret: process.env.RAZORPAY_KEY_SECRET
        });
        const rzpOrder = await rzp.orders.create({
          amount: amountPaise,
          currency: 'INR',
          receipt: `rcpt_${Date.now()}_${Math.floor(100 + Math.random() * 900)}`,
          notes: {
            eventTitle: productName,
            studentName: studentName || '',
            studentEmail: studentEmail || ''
          }
        });
        razorpayOrderId = rzpOrder.id;
      } catch (sdkErr) {
        console.warn('Razorpay SDK order creation warning:', sdkErr.message);
      }
    }

    const orderId = razorpayOrderId || `order_${crypto.randomBytes(8).toString('hex')}`;

    orders.set(orderId, {
      amount: amountPaise,
      currency: 'INR',
      status: 'created',
      createdAt: Date.now(),
      productName,
      paymentId: null
    });

    res.json({
      keyId: process.env.RAZORPAY_KEY_ID || KEY_ID,
      orderId,
      amount: amountPaise,
      currency: 'INR',
      productName
    });
  } catch (err) {
    console.error('Create order error:', err.message);
    res.status(500).json({ error: 'Could not create payment order. ' + err.message });
  }
});

// POST /api/verify-payment or /api/payment/verify-payment
router.post('/verify-payment', async (req, res) => {
  try {
    const { razorpay_order_id: orderId, razorpay_payment_id: paymentId, razorpay_signature: signature } = req.body || {};
    const order = orders.get(orderId);

    if (!orderId || !paymentId) {
      return res.status(400).json({ verified: false, error: 'Missing or unknown payment details' });
    }

    // Verify HMAC SHA256 if live key secret is configured
    if (signature && process.env.RAZORPAY_KEY_SECRET && !process.env.RAZORPAY_KEY_SECRET.includes('REPLACE_ME')) {
      const expected = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(`${orderId}|${paymentId}`)
        .digest('hex');

      if (!safeEqualHex(signature, expected)) {
        return res.status(400).json({ verified: false, error: 'Payment signature verification failed' });
      }

      // Try fetching payment directly from Razorpay for authoritative check
      try {
        const Razorpay = require('razorpay');
        const rzp = new Razorpay({
          key_id: process.env.RAZORPAY_KEY_ID,
          key_secret: process.env.RAZORPAY_KEY_SECRET
        });
        const payment = await rzp.payments.fetch(paymentId);
        if (payment && payment.status !== 'captured' && payment.status !== 'authorized') {
          return res.status(409).json({
            verified: false,
            status: payment.status,
            error: 'Payment is not captured yet.'
          });
        }
      } catch (fetchErr) {
        console.warn('Razorpay fetch payment warning:', fetchErr.message);
      }
    }

    paidOrders.add(orderId);
    if (order) {
      order.status = 'paid';
      order.paymentId = paymentId;
    }

    return res.json({
      verified: true,
      paymentId,
      orderId,
      message: 'Payment confirmed successfully'
    });
  } catch (err) {
    console.error('Verify payment failed:', err.message);
    return res.status(500).json({ verified: false, error: 'Could not confirm payment. ' + err.message });
  }
});

// GET /api/order-status
router.get('/order-status', (req, res) => {
  const orderId = String(req.query.order_id || '');
  if (!orderId || !paidOrders.has(orderId)) {
    return res.status(403).json({ paid: false, error: 'Payment not confirmed' });
  }
  res.json({ paid: true });
});

module.exports = router;
