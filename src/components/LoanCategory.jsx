import React from "react"

export const LoanCategory = ({ title, subcategories, maxLoan, loanPeriod }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100 transform hover:scale-105 hover:translate-y-2">
      <h3 className="text-3xl font-extrabold text-green-800 mb-6 text-center">{title}</h3>
      <ul className="space-y-4 mb-6">
        {subcategories.map((subcategory, index) => (
          <li key={index} className="flex items-center text-lg text-gray-700 font-medium">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            {subcategory}
          </li>
        ))}
      </ul>
      <div className="flex flex-col space-y-3">
        <p className="text-lg font-semibold text-gray-800">
          Max Loan: 
          <span className="text-green-600">
            {maxLoan === 0 ? "Based on requirement" : `PKR ${maxLoan.toLocaleString()}`}
          </span>
        </p>
        <p className="text-lg font-semibold text-gray-800">
          Loan Period: 
          <span className="text-green-600">{loanPeriod} years</span>
        </p>
      </div>
    </div>
  )
}
