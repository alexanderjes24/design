import React from 'react'
import Furniture from './assets/Furniture.svg'
import Bar1 from './assets/Group 6.svg'
import Bar2 from './assets/Group 6.1.svg'
const Content3 = () => {
  return (
    <div className='ml-15'>
        {/* Image Card */}
        <div className='bg-white  mt-5 rounded-2xl shadow-xs'>
            <div className="relative">
                <img src={Furniture} className='w-85'></img>
                <div className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-xl">
                1 of 12
                </div>
            </div>
            <div className='flex justify-between py-5 px-8 text-sm'>
                <p className='text-gray-400'>Size</p>
                <p className=''>1,350sqft</p>
            </div>
            <div className="border-t border-gray-300"></div>
            <div className="px-5.5 pt-7 grid grid-cols-2 gap-4">
                <div>
                <img src={Bar1}/>
                </div>
                <div>
                <img src={Bar2}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content3