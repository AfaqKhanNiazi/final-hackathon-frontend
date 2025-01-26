import React, { useState } from "react"

export const LoanCalculator = ({ loanCategories }) => {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState("")
  const [initialDeposit, setInitialDeposit] = useState("")
  const [loanPeriod, setLoanPeriod] = useState("")
  const [loanAmount, setLoanAmount] = useState("")
  const [calculatedLoan, setCalculatedLoan] = useState(null)

  const handleCalculate = () => {
    const deposit = Number.parseFloat(initialDeposit)
    const period = Number.parseFloat(loanPeriod)
    const amount = Number.parseFloat(loanAmount)

    if (isNaN(deposit) || isNaN(period) || isNaN(amount)) {
      alert("Please enter valid numbers for all fields.")
      return
    }

    const totalLoan = amount - deposit
    const monthlyPayment = totalLoan / (period * 12)
    setCalculatedLoan(monthlyPayment)
  }

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 max-w-3xl mx-auto mt-8 mb-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Loan Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Loan Category</label>
          <select
            className={inputClass}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            {loanCategories.map((category, index) => (
              <option key={index} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
          <select
            className={inputClass}
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
          >
            <option value="">Select a subcategory</option>
            {loanCategories
              .find((cat) => cat.title === selectedCategory)
              ?.subcategories.map((sub, index) => (
                <option key={index} value={sub}>
                  {sub}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Initial Deposit (PKR)</label>
          <input
            type="number"
            className={inputClass}
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Loan Period (Years)</label>
          <input
            type="number"
            className={inputClass}
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (PKR)</label>
          <input
            type="number"
            className={inputClass}
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
      </div>

      <button
        className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-4 rounded-md shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 font-semibold text-lg"
        onClick={handleCalculate}
      >
        Calculate Loan
      </button>

      {calculatedLoan !== null && (
        <div className="mt-6 p-6 bg-gray-50 rounded-md shadow-inner border border-gray-300">
          <h4 className="text-xl font-semibold mb-4 text-gray-700">Estimated Loan Breakdown</h4>
          <p className="text-lg mb-2">
            Monthly Payment:{" "}
            <span className="font-bold text-green-600">PKR {calculatedLoan.toFixed(2)}</span>
          </p>
          <p className="text-lg">
            Total Loan Amount:{" "}
            <span className="font-bold text-green-600">
              PKR {(calculatedLoan * Number.parseFloat(loanPeriod) * 12).toFixed(2)}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}
