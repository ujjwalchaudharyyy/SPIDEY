# 🎓 Campus Event Hub

A centralized platform where organizers submit events for admin approval, and students see a unified feed of everything happening on campus.

## 🚀 Quick Start

### 1. Start the Backend (Terminal 1)
```bash
cd backend
node server.js
```
The API runs at **http://localhost:5000**

### 2. Start the Frontend (Terminal 2)
```bash
cd frontend
npx vite
```
The app opens at **http://localhost:5173**

## 🔑 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@campus.edu | admin123 |
| Student | Register a new account | - |
| Organizer | Register a new account | - |

## 📋 Features

- **Event Submission** — Organizers submit events (title, time, venue, description, category)
- **Admin Approval Queue** — Admin reviews, approves or rejects events with reasons
- **Unified Student Feed** — All approved events, filterable by search, category, date
- **RSVP / Reminders** — Students mark interest with one-click RSVP toggle
- **Role-Based Access** — Student, Organizer, and Admin dashboards
- **Stats Dashboard** — Admin sees total events, RSVPs, users at a glance

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: SQLite (via sql.js — pure JS, no native compilation needed)
- **Auth**: JWT + bcryptjs
