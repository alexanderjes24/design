import React from 'react'
import Logo from './assets/Logo.svg'
import Home from './assets/Home.svg'
import Chat from './assets/Chat.svg'
import Map from './assets/Map.svg'
import Bar from './assets/Bar Chart.svg'
import Card from './assets/Credit Card.svg'
import Profile from './assets/Profile.svg'

const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-white outline-2 outline-gray-200 w-20 flex flex-col justify-between h-screen z-50">
        <nav>
          <ul className="space-y-2">
            <div className='outline-2 outline-gray-200'>
              <li className="flex items-center justify-center p-5 cursor-pointer">
                <img src={Logo} className="logo w-8" alt="logo" />
              </li>
            </div>
            <li className="flex items-center justify-center p-5 rounded cursor-pointer">
              <img src={Home} className="logo w-5" alt="home" />
            </li>
            <li className="flex items-center justify-center p-5 rounded cursor-pointer">
              <img src={Chat} className="logo w-5" alt="chat" />
            </li>
            <li className="flex items-center justify-center p-5 rounded cursor-pointer">
              <img src={Map} className="logo w-5" alt="map" />
            </li>
            <li className="flex items-center justify-center p-5 rounded cursor-pointer">
              <img src={Bar} className="logo w-5" alt="bar chart" />
            </li>
            <li className="flex items-center justify-center p-5 rounded cursor-pointer">
              <img src={Card} className="logo w-5" alt="credit card" />
            </li>
          </ul>
        </nav>
        <div className='relative inline-block'>
          <li className="flex items-center justify-center p-2">
            <img src={Profile} className="logo rounded-full" alt="profile" />
            <span className="absolute bottom-3 right-3.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </li>
        </div>
      </div>
    </div>
  )
}
export default Sidebar