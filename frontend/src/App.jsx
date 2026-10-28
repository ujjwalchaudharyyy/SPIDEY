import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Login from './pages/Login'
import Register from './pages/Register'
import StudentFeed from './pages/StudentFeed'
import OrganizerDashboard from './pages/OrganizerDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Placement from './pages/Placement'
import VerifyPass from './pages/VerifyPass'
import StudentDashboard from './pages/StudentDashboard'
import CertificateView from './pages/CertificateView'
import ProtectedRoute from './components/ProtectedRoute'
import IntroVideoModal from './components/IntroVideoModal'

function HomeRedirect() {
  return <Navigate to="/login" replace />
}

export default function App() {
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  // External verify & certificate routes are direct access
  const isVerifyRoute = location.pathname.startsWith('/verify') || location.pathname.startsWith('/certificate')

  // Always show intro video on initial page load / refresh
  const [showIntroVideo, setShowIntroVideo] = useState(!isVerifyRoute)

  // When refreshing the deployed link, always reset to the initial landing route
  useEffect(() => {
    if (!isVerifyRoute && location.pathname !== '/' && location.pathname !== '/login') {
      window.history.replaceState(null, '', '/')
    }
  }, [])

  const handleVideoComplete = () => {
    setShowIntroVideo(false)
  }

  // Show intro video on initial load / refresh
  if (showIntroVideo && !isVerifyRoute) {
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
      <Route path="/dashboard" element={
        <ProtectedRoute roles={['student', 'admin', 'organizer']}>
          <StudentDashboard />
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
      <Route path="/verify" element={<VerifyPass />} />
      <Route path="/verify/:code" element={<VerifyPass />} />
      <Route path="/certificate" element={<CertificateView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
