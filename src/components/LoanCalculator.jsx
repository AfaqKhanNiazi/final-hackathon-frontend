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

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Category</label>
          <select
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Subcategory</label>
          <select
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Initial Deposit (PKR)</label>
          <input
            type="number"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Period (Years)</label>
          <input
            type="number"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (PKR)</label>
          <input
            type="number"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
      </div>
      <button
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        onClick={handleCalculate}
      >
        Calculate Loan
      </button>
      {calculatedLoan !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h4 className="text-lg font-semibold mb-2">Estimated Loan Breakdown</h4>
          <p>Monthly Payment: PKR {calculatedLoan.toFixed(2)}</p>
          <p>Total Loan Amount: PKR {(calculatedLoan * Number.parseFloat(loanPeriod) * 12).toFixed(2)}</p>
        </div>
      )}
    </div>
  )
}

