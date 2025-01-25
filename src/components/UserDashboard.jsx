import React from "react"

const mockApplications = [
  { id: "1", category: "Wedding Loans", subcategory: "Valima", amount: 300000, status: "Pending" },
  { id: "2", category: "Education Loans", subcategory: "University Fees", amount: 500000, status: "Approved" },
  { id: "3", category: "Business Startup Loans", subcategory: "Shop Assets", amount: 750000, status: "Under Review" },
]

export const UserDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">User Dashboard</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Your Loan Applications</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Subcategory</th>
                <th className="py-2 px-4 text-left">Amount (PKR)</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockApplications.map((application) => (
                <tr key={application.id} className="border-b">
                  <td className="py-2 px-4">{application.id}</td>
                  <td className="py-2 px-4">{application.category}</td>
                  <td className="py-2 px-4">{application.subcategory}</td>
                  <td className="py-2 px-4">{application.amount.toLocaleString()}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
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
      <div>
        <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
            Apply for New Loan
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            View Loan Details
          </button>
        </div>
      </div>
    </div>
  )
}

