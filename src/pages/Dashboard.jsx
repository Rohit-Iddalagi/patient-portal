import { useState } from 'react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('patients')

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Hospital Management System</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid gap-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm font-medium">Total Patients</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm font-medium">Appointments Today</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm font-medium">Available Doctors</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">45</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="flex border-b">
            {['patients', 'appointments', 'doctors'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium capitalize ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-6">
            {activeTab === 'patients' && <div>Patients content here</div>}
            {activeTab === 'appointments' && <div>Appointments content here</div>}
            {activeTab === 'doctors' && <div>Doctors content here</div>}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
