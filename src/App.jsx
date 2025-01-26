import React, { useState } from "react"
import { UserRegistration } from "./components/UserRegistration"
import { LoanApplication } from "./components/LoanApplication"
import { UserDashboard } from "./components/UserDashboard"
import { LandingPage } from "./Components/LandingPage"
import "./App.css"
import { Footer } from "./components/footer"
// import { Footer } from "./Components/Footer"

export const App = () => {
  const [currentPage, setCurrentPage] = useState("landing")

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage />
      case "register":
        return <UserRegistration />
      case "apply":
        return <LoanApplication />
      case "dashboard":
        return <UserDashboard />
      default:
        return <LandingPage />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Saylani Microfinance App</h1>
          <div className="space-x-4">
            <button onClick={() => setCurrentPage("landing")} className="hover:underline font-bold ">
              Home
            </button>
            <button onClick={() => setCurrentPage("register")} className="hover:underline font-bold">
              Register
            </button>
            <button onClick={() => setCurrentPage("apply")} className="hover:underline font-bold">
              Apply for Loan
            </button>
            <button onClick={() => setCurrentPage("dashboard")} className="hover:underline font-bold">
              Dashboard
            </button>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">{renderPage()}</main>
      <Footer/>
    </div>
   )
}