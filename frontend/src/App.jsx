import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Login from './pages/Login'
import Register from './pages/Register'
import StudentFeed from './pages/StudentFeed'
import OrganizerDashboard from './pages/OrganizerDashboard'
import AdminDashboard from './pages/AdminDashboard'
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
  const [showIntroVideo, setShowIntroVideo] = useState(() => {
    // Only show intro video if user has not already watched it in this session
    // and user is not already logged in
    const seen = sessionStorage.getItem('spider_intro_seen')
    return !seen
  })

  const handleVideoComplete = () => {
    sessionStorage.setItem('spider_intro_seen', 'true')
    setShowIntroVideo(false)
  }

  // If intro video needs to be played on first visit to public route
  if (showIntroVideo && !isAuthenticated && (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register')) {
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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
