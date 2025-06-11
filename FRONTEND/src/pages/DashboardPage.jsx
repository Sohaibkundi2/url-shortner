import React from 'react'
import UrlForm from '../compunents/UrlForm'
import UserUrl from '../compunents/UserUrl'

const DashboardPage = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">URL Shortener</h1>
        <UrlForm/>
        <UserUrl/>
      </div>
    </div>
  )
}

export default DashboardPage