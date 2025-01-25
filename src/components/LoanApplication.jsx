import React, { useState } from "react"

export const LoanApplication = () => {
  const [loanDetails, setLoanDetails] = useState({
    category: "",
    subcategory: "",
    amount: "",
    period: "",
  })

  const [guarantor1, setGuarantor1] = useState({
    name: "",
    email: "",
    location: "",
    cnic: "",
  })

  const [guarantor2, setGuarantor2] = useState({
    name: "",
    email: "",
    location: "",
    cnic: "",
  })

  const [personalInfo, setPersonalInfo] = useState({
    address: "",
    phoneNumber: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log("Submitting application:", { loanDetails, guarantor1, guarantor2, personalInfo })
    alert("Loan application submitted successfully!")
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Loan Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Loan Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Loan Category"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={loanDetails.category}
              onChange={(e) => setLoanDetails({ ...loanDetails, category: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Subcategory"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={loanDetails.subcategory}
              onChange={(e) => setLoanDetails({ ...loanDetails, subcategory: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Loan Amount (PKR)"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={loanDetails.amount}
              onChange={(e) => setLoanDetails({ ...loanDetails, amount: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Loan Period (Years)"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={loanDetails.period}
              onChange={(e) => setLoanDetails({ ...loanDetails, period: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Guarantor 1</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={guarantor1.name}
              onChange={(e) => setGuarantor1({ ...guarantor1, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={guarantor1.email}
              onChange={(e) => setGuarantor1({ ...guarantor1, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={guarantor1.location}
              onChange={(e) => setGuarantor1({ ...guarantor1, location: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="CNIC"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={guarantor1.cnic}
              onChange={(e) => setGuarantor1({ ...guarantor1, cnic: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Guarantor 2</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={guarantor2.name}
              onChange={(e) => setGuarantor2({ ...guarantor2, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={guarantor2.email}
              onChange={(e) => setGuarantor2({ ...guarantor2, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={guarantor2.location}
              onChange={(e) => setGuarantor2({ ...guarantor2, location: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="CNIC"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={guarantor2.cnic}
              onChange={(e) => setGuarantor2({ ...guarantor2, cnic: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Address"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={personalInfo.address}
              onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              value={personalInfo.phoneNumber}
              onChange={(e) => setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Submit Application
        </button>
      </form>
    </div>
  )
}

