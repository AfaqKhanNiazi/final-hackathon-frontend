
// import Banner from "./Components/Banner";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Home from "./Pages/Home";
// import Signup from "./Pages/Signup";
// import ApiProduct from "./Pages/ApiProduct";
// import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
// import ProductDetail from "./Pages/ProductDetail";
// import { useEffect } from "react";
// import ProductAdd from "./Pages/ProductAdd";

// export default function App() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return (
//     <>
//       <Banner />
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/api-product" element={<ApiProduct />} />
//         <Route path="/product/:id" element={<ProductDetail/>} />
//         <Route path="/product/add" element={<ProductAdd/>} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }


// import React from 'react'
// import "./App.css";

// export default function App() {
//   return (
//     <div>
//       <h1 className='text-blue-600 text-center'>hello w</h1>
//     </div>
//   )
// }

// import React from "react";
// import LandingPage from "./Components/LandingPage";
// import LoanCalculator from "./Components/LoanCalculator";
// import RegisterForm from "./Components/RegisterForm";
// import "./index.css"


// function App() {
//   return (
//     <div className="App">
//       <LandingPage />
//       <LoanCalculator />
//       <RegisterForm />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react"
//import { LandingPage } from "./components/LandingPage"
import { UserRegistration } from "./components/UserRegistration"
import { LoanApplication } from "./components/LoanApplication"
import { UserDashboard } from "./components/UserDashboard"
import { LandingPage } from "./Components/LandingPage"
import "./App.css"

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
      <nav className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Saylani Microfinance App</h1>
          <div className="space-x-4">
            <button onClick={() => setCurrentPage("landing")} className="hover:underline">
              Home
            </button>
            <button onClick={() => setCurrentPage("register")} className="hover:underline">
              Register
            </button>
            <button onClick={() => setCurrentPage("apply")} className="hover:underline">
              Apply for Loan
            </button>
            <button onClick={() => setCurrentPage("dashboard")} className="hover:underline">
              Dashboard
            </button>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">{renderPage()}</main>
    </div>
  )
}

