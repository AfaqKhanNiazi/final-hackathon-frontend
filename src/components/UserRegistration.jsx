import React, { useState } from "react"

export const UserRegistration = () => {
  const [cnic, setCnic] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log("Submitting:", { cnic, email, name })
    alert("Registration submitted. Please check your email for further instructions.")
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cnic" className="block text-sm font-medium text-gray-700 mb-1">
            CNIC
          </label>
          <input
            type="text"
            id="cnic"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  )
}

