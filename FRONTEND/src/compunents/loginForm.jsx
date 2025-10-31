import React, { useState } from 'react'
import { login } from '../api/user.api'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from '@tanstack/react-router'
import { login as loginAction } from '../store/slices/authSlice'
import { motion } from 'framer-motion'
import { toast } from "react-hot-toast";

const LoginForm = ({ state }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }

    setLoading(true)
    setError('')

    try {
      const data = await login(email, password)
      dispatch(loginAction(data.user))
      navigate({ to: '/dashboard' })
      setEmail('')
      setPassword('')
      toast.success("Login successful!")
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.')
      toast.error(err.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-md "
    >
      <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-6">
        Login to Your Account
      </h2>

      {error && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-4 p-3 bg-red-100 text-red-700 rounded-md"
        >
          {error}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="transition-transform"
        >
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="transition-transform"
        >
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={loading}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </motion.button>
      </form>

      <div className="mt-4 text-center text-gray-600">
        <p>
          Don’t have an account?{' '}
          <span
            onClick={() => state(false)}
            className="cursor-pointer text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-colors duration-200"
          >
            Register
          </span>
        </p>
      </div>
    </motion.div>
  )
}

export default LoginForm
