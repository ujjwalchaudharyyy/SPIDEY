import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children, roles }) {
  const { user, isAuthenticated, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />

  // Admin route clearance: allow role 'admin' OR authorized admin emails
  if (roles && roles.includes('admin')) {
    const isAdmin = user && (
      user.role === 'admin' ||
      user.email === 'admin@campus.edu' ||
      user.email === 'ujjwalchaudhary2007@gmail.com'
    )
    if (isAdmin) return children
  }

  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />

  return children
}
