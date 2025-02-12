import React from 'react'
import Dot from './assets/Group 3.svg'
import Bell from './assets/Bell.svg'
import Management from './assets/Mask Group.svg'
import Success from './assets/Success.svg'
const Content2 = () => {
  return (
    <div className='ml-20'>
        {/* Card */}
        <div className='bg-white p-7 mt-5 rounded-2xl shadow-xs'>
            <div className='flex justify-around'>
                <p className='pr-30'>Sublease Terms</p>
                <img src={Dot}></img>
            </div>
            <p className='text-4xl pt-5 pb-2'>$425<span className='text-base text-blue-500'> per desk</span></p>
            <p className='text-gray-400 text-base'>Minimum of 6 months</p>
            <div className='flex justify-between pt-10'>
                <img src={Bell}/>
                <p>Monday, June 1</p>
            </div>
        </div>
        <div className='bg-white p-7 mt-5 rounded-2xl shadow-xs'>
            <div className='flex justify-around'>
                <p className='pr-30'>Management</p>
                <img src={Dot}></img>
            </div>
            <div className='flex pt-5 '>
            <img src={Management} className="w-12 h-12" alt="Management" />
                <div className='px-2'>
                    <p className="text-xl">Silvia Guerro</p>
                    <p className="text-gray-500 text-xs">(415)- 888 - 2332</p>
                </div>
            </div>
            <div className="-mx-7 border-t border-gray-300 mt-11"></div>
            <div className='flex pt-5'>
                <img src={Success}></img>
                <p className='pl-4 text-blue-900'>Contract Signed</p>
            </div>
        </div>
    </div>
  )
}

export default Content2