import React from "react"

export const LoanCategory = ({ title, subcategories, maxLoan, loanPeriod }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="mb-4">
        {subcategories.map((subcategory, index) => (
          <li key={index} className="text-gray-600">
            {subcategory}
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-500">
        Max Loan: {maxLoan === 0 ? "Based on requirement" : `PKR ${maxLoan.toLocaleString()}`}
      </p>
      <p className="text-sm text-gray-500">Loan Period: {loanPeriod} years</p>
    </div>
  )
}

