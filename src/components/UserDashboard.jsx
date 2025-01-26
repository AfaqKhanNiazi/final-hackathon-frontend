import React from "react"

const mockApplications = [
  { id: "1", category: "Wedding Loans", subcategory: "Valima", amount: 300000, status: "Pending" },
  { id: "2", category: "Education Loans", subcategory: "University Fees", amount: 500000, status: "Approved" },
  { id: "3", category: "Business Startup Loans", subcategory: "Shop Assets", amount: 750000, status: "Under Review" },
]

export const UserDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-r from-green-50 via-green-100 to-green-200 rounded-xl shadow-2xl p-12 border border-gray-300">
      <h2 className="text-4xl font-extrabold mb-12 text-green-600 tracking-wide text-center">User Dashboard</h2>
      
      {/* Loan Applications Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">Your Loan Applications</h3>
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full table-auto">
            <thead className="bg-gradient-to-r from-green-500 to-green-700 text-white">
              <tr>
                <th className="py-3 px-6 text-left font-semibold text-sm">ID</th>
                <th className="py-3 px-6 text-left font-semibold text-sm">Category</th>
                <th className="py-3 px-6 text-left font-semibold text-sm">Subcategory</th>
                <th className="py-3 px-6 text-left font-semibold text-sm">Amount (PKR)</th>
                <th className="py-3 px-6 text-left font-semibold text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockApplications.map((application) => (
                <tr key={application.id} className="border-b hover:bg-gray-50 transition-all duration-300 ease-in-out">
                  <td className="py-4 px-6 text-sm text-gray-700">{application.id}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{application.category}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{application.subcategory}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{application.amount.toLocaleString()}</td>
                  <td className="py-4 px-6 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        application.status === "Approved"
                          ? "bg-green-200 text-green-800"
                          : application.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-blue-200 text-blue-800"
                      }`}
                    >
                      {application.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-4 px-6 rounded-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-green-800 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl">
            Apply for New Loan
          </button>
          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-6 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl">
            View Loan Details
          </button>
        </div>
      </div>
    </div>
  )
}
