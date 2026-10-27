import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

function decodeJWT(token) {
  try {
    const payload = token.split('.')[1]
    return JSON.parse(atob(payload))
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      const decoded = decodeJWT(savedToken)
      if (decoded && decoded.exp * 1000 > Date.now()) {
        setToken(savedToken)
        setUser(decoded)
      } else {
        localStorage.removeItem('token')
      }
    }
    setLoading(false)
  }, [])

  const login = (newToken) => {
    const decoded = decodeJWT(newToken)
    setToken(newToken)
    setUser(decoded)
    localStorage.setItem('token', newToken)
  }

  const logout = () => {
    setToken(null)
    setUser(null)
    localStorage.removeItem('token')
  }

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
