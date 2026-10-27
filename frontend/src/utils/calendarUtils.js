/**
 * Generates a direct Google Calendar Web Intent URL
 * Pre-fills title, dates, start/end time, venue, description, and registered Gmail address.
 */
export function createGoogleCalendarUrl(event, attendeeEmail = '') {
  if (!event) return 'https://calendar.google.com'

  const title = encodeURIComponent(`${event.title || 'Graphic Era University Event'} 🕷️ SPIDEY`)
  
  // Clean date YYYYMMDD
  const rawDate = event.event_date || '2026-10-27'
  const dateCompact = rawDate.replace(/-/g, '')
  
  let startTime = '100000'
  let endTime = '170000'

  if (event.event_time) {
    const parts = event.event_time.split(':')
    if (parts.length >= 2) {
      const h = parseInt(parts[0], 10) || 10
      const m = parseInt(parts[1], 10) || 0
      startTime = `${String(h).padStart(2, '0')}${String(m).padStart(2, '0')}00`
      const endH = Math.min(23, h + 3)
      endTime = `${String(endH).padStart(2, '0')}${String(m).padStart(2, '0')}00`
    }
  }

  const startUtc = `${dateCompact}T${startTime}`
  const endUtc = `${dateCompact}T${endTime}`
  const dates = `${startUtc}/${endUtc}`

  const details = encodeURIComponent(
    `🕷️ SPIDEY EVENT PASS & CALENDAR REMINDER\n\n` +
    `Event: ${event.title}\n` +
    `Campus: ${event.campus || 'Graphic Era University'}\n` +
    `Venue: ${event.venue || 'Campus Auditorium'}\n` +
    `Category: ${event.category || 'Event'}\n` +
    (attendeeEmail ? `Registered Student: ${attendeeEmail}\n` : '') +
    `\nDescription: ${event.description || ''}\n\n` +
    `⚡ Spider-Man Themed Campus Grid • Graphic Era University`
  )

  const location = encodeURIComponent(`${event.venue || 'Auditorium'}, ${event.campus || 'Graphic Era University'}`)

  let calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`
  if (attendeeEmail && attendeeEmail.includes('@')) {
    calUrl += `&add=${encodeURIComponent(attendeeEmail)}`
  }

  return calUrl
}
