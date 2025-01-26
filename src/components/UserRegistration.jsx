import React, { useState, useEffect } from "react"

export const UserRegistration = () => {
  const [cnic, setCnic] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  // Set the body background color on component mount
  useEffect(() => {
    document.body.classList.add('bg-gray-200')  // This adds the background color class to body
    return () => {
      document.body.classList.remove('bg-gray-200') // Clean up on unmount
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitting:", { cnic, email, name })
    alert("Registration submitted. Please check your email for further instructions.")
  }

  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-lg shadow-xl p-12 border border-gray-300">
      <h2 className="text-3xl font-extrabold text-white text-center mb-8">User Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* CNIC Field */}
        <div>
          <label htmlFor="cnic" className="block text-sm font-medium text-white mb-2">CNIC</label>
          <input
            type="text"
            id="cnic"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 py-3 px-4 text-lg"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            required
          />
        </div>
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 py-3 px-4 text-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 py-3 px-4 text-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-3 px-6 rounded-md hover:bg-gradient-to-r hover:from-green-700 hover:to-green-900 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105"
        >
          Register
        </button>
      </form>
    </div>
  )
}
