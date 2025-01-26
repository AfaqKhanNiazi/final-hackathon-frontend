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
    console.log("Submitting application:", { loanDetails, guarantor1, guarantor2, personalInfo })
    alert("Loan application submitted successfully!")
  }

  const inputClass =
    "w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 transition-all duration-300 py-3 px-4 text-lg"

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-xl shadow-xl p-10 border border-gray-200">
      <h2 className="text-4xl font-extrabold text-white text-center mb-10">Loan Application</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Loan Details Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Loan Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Loan Category"
              className={inputClass}
              value={loanDetails.category}
              onChange={(e) => setLoanDetails({ ...loanDetails, category: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Subcategory"
              className={inputClass}
              value={loanDetails.subcategory}
              onChange={(e) => setLoanDetails({ ...loanDetails, subcategory: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Loan Amount (PKR)"
              className={inputClass}
              value={loanDetails.amount}
              onChange={(e) => setLoanDetails({ ...loanDetails, amount: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Loan Period (Years)"
              className={inputClass}
              value={loanDetails.period}
              onChange={(e) => setLoanDetails({ ...loanDetails, period: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Guarantor 1 Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Guarantor 1</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className={inputClass}
              value={guarantor1.name}
              onChange={(e) => setGuarantor1({ ...guarantor1, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className={inputClass}
              value={guarantor1.email}
              onChange={(e) => setGuarantor1({ ...guarantor1, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Location"
              className={inputClass}
              value={guarantor1.location}
              onChange={(e) => setGuarantor1({ ...guarantor1, location: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="CNIC"
              className={inputClass}
              value={guarantor1.cnic}
              onChange={(e) => setGuarantor1({ ...guarantor1, cnic: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Guarantor 2 Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Guarantor 2</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className={inputClass}
              value={guarantor2.name}
              onChange={(e) => setGuarantor2({ ...guarantor2, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className={inputClass}
              value={guarantor2.email}
              onChange={(e) => setGuarantor2({ ...guarantor2, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Location"
              className={inputClass}
              value={guarantor2.location}
              onChange={(e) => setGuarantor2({ ...guarantor2, location: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="CNIC"
              className={inputClass}
              value={guarantor2.cnic}
              onChange={(e) => setGuarantor2({ ...guarantor2, cnic: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Personal Information Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Address"
              className={inputClass}
              value={personalInfo.address}
              onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className={inputClass}
              value={personalInfo.phoneNumber}
              onChange={(e) => setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 px-6 rounded-md hover:bg-green-800 transition-all duration-300 font-semibold text-lg shadow-md transform hover:scale-105"
        >
          Submit Application
        </button>
      </form>
    </div>
  )
}
