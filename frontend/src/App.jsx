import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Login from './pages/Login'
import Register from './pages/Register'
import StudentFeed from './pages/StudentFeed'
import OrganizerDashboard from './pages/OrganizerDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Placement from './pages/Placement'
import ProtectedRoute from './components/ProtectedRoute'
import IntroVideoModal from './components/IntroVideoModal'

function HomeRedirect() {
  const { user, isAuthenticated, loading } = useAuth()
  if (loading) {
    return (
      <div className="min-h-screen bg-[#070913] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (user.role === 'admin') return <Navigate to="/admin" replace />
  if (user.role === 'organizer') return <Navigate to="/organizer" replace />
  return <Navigate to="/feed" replace />
}

export default function App() {
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  // Show intro video immediately — check sessionStorage synchronously (no delay)
  const [showIntroVideo, setShowIntroVideo] = useState(() => {
    try {
      return !sessionStorage.getItem('spider_intro_seen')
    } catch {
      return true
    }
  })

  const handleVideoComplete = () => {
    try { sessionStorage.setItem('spider_intro_seen', 'true') } catch {}
    setShowIntroVideo(false)
  }

  // Show intro video IMMEDIATELY on first visit — before any auth check / spinner
  // Only on public entry routes (/ /login /register)
  const isPublicRoute = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register'

  if (showIntroVideo && !isAuthenticated && isPublicRoute) {
    return <IntroVideoModal onComplete={handleVideoComplete} />
  }

  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/feed" element={
        <ProtectedRoute roles={['student']}>
          <StudentFeed />
        </ProtectedRoute>
      } />
      <Route path="/my-rsvps" element={
        <ProtectedRoute roles={['student']}>
          <StudentFeed initialTab="rsvps" />
        </ProtectedRoute>
      } />
      <Route path="/organizer" element={
        <ProtectedRoute roles={['organizer']}>
          <OrganizerDashboard />
        </ProtectedRoute>
      } />
      <Route path="/admin" element={
        <ProtectedRoute roles={['admin']}>
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="/placements" element={<Placement />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
