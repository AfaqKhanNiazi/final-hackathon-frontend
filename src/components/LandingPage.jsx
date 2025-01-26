import React from "react"
import { LoanCategory } from "./LoanCategory"
import { LoanCalculator } from "./LoanCalculator"

const loanCategories = [
  {
    title: "Wedding Loans",
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxLoan: 500000,
    loanPeriod: 3,
  },
  {
    title: "Home Construction Loans",
    subcategories: ["Structure", "Finishing", "Loan"],
    maxLoan: 1000000,
    loanPeriod: 5,
  },
  {
    title: "Business Startup Loans",
    subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    maxLoan: 1000000,
    loanPeriod: 5,
  },
  {
    title: "Education Loans",
    subcategories: ["University Fees", "Child Fees Loan"],
    maxLoan: 0,
    loanPeriod: 4,
  },
]

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-green-500 to-green-700 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold hover:text-green-300 transition-colors duration-300">Saylani Microfinance App</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Loan Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanCategories.map((category, index) => (
              <LoanCategory 
                key={index} 
                {...category} 
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:-translate-y-1"
              />
            ))}
          </div>
        </section>
        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Loan Calculator</h2>
          <LoanCalculator loanCategories={loanCategories} />
        </section>
      </main>
    </div>
  )
}