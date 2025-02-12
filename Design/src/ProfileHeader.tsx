import { useState } from "react"
import Profile from './assets/Profile.svg'
import Dot from './assets/Group 3.svg'

export default function ProfileHeader() {
  const [activeTab, setActiveTab] = useState("Properties")

  const tabs = ["Properties", "Sub-tenants", "Settings"]

  return (
    <div className="px-11 pt-11 outline-2 outline-gray-200 z-10">
    {/* Profile Info */}
    <div className="flex items-center justify-between pb-5">
      <div className="flex items-center space-x-4">
        <div>
        <img
          src={Profile}
          alt="Profile"
          className="w-21 rounded-full object-cover"
        />
        <span className="absolute top-27 left-48 w-3 h-3 bg-purple-500 border-2 border-white rounded-full"></span>
        </div>
        <div>
          <h2 className="text-2xl p-1">June and Sarvis</h2>
          <p className="text-gray-500 p-1 text-xs">
            <span className="text-black">8</span> PROPERTIES
            <span className="text-black pl-7">37</span> SUB-TENANTS
          </p>
        </div>
      </div>
      {/* Edit button */}
      <div className="flex space-x-4">
        <img src={Dot} className="bg-gray-400 px-1 rounded"/>
        <button className="px-6 py-2 text-sm outline-1 outline-gray-500 text-black rounded-xl hover:bg-blue-600 hover:text-white">
          Edit Profile
        </button>
      </div>
    </div>
    {/* Tab/Navbar */}
      <div className="flex space-x-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm py-3.5 cursor-pointer ${
              activeTab === tab
                ? "text-black border-b-4 border-blue-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
  </div>
    
  )
}
