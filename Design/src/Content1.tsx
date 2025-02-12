import React from 'react'
import Location from './assets/map-pin.svg'
const Content1 = () => {
  return (
    <div className='flex flex-col p-6 ml-10'>
        <small className='text-gray-400 text-xs pb-1'>NAME</small>
        <div>
        <p className='text-2xl'>Hayes Valley Studio <span className='text-gray-400 text-xs'>Edit</span></p>
        </div>
        <small className='text-gray-400 text-xs pt-6'>LOCATION</small>
        <div className='pt-2'>
        {/* Location */}
        <div className='flex p-2 outline-2 outline-gray-200 rounded-xl bg-white'>
            <img
                src={Location}
                alt="Location"
                className='p-2 bg-pink-300 rounded-4xl mx-2'

            />
            <p className='pr-2 m-auto text-lg text-gray-700'>165 11th Street, San Francisco, CA...</p>
        </div>
        </div>
        <div className='pt-3'>
        <small className='text-gray-400 text-xs'>SUPPLY</small>
        <p className='text-lg text-gray-700'>What types of rental space do you offer?</p>
        <div className="flex">
        <div className="my-4 flex-col pr-10">
            <div className="flex items-center mb-2 pb-2">
            <input 
                id="open-desks" 
                type="checkbox" 
                className="w-6 h-6 accent-blue-500 bg-gray-100 border-gray-300 rounded-sm"
            />
            <label htmlFor="open-desks" className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                Open Desks
            </label>
            </div>

            <div className="flex items-center">
            <input 
                id="private-desks" 
                type="checkbox" 
                className="w-6 h-6 accent-blue-500 bg-gray-100 border-gray-300 rounded-sm"
            />
            <label htmlFor="private-desks" className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                Shared Offices
            </label>
            </div>
        </div>
        {/* Tickbox */}
        <div className="my-4 flex-col">
            <div className="flex items-center mb-2 pb-2">
            <input 
                id="shared-offices" 
                type="checkbox" 
                className="w-6 h-6 accent-blue-500 bg-gray-100 border-gray-300 rounded-sm"
            />
            <label htmlFor="shared-offices" className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                Private Desks
            </label>
            </div>

            <div className="flex items-center">
            <input 
                id="private-offices" 
                type="checkbox" 
                className="w-6 h-6 accent-blue-500 bg-gray-100 border-gray-300 rounded-sm"
            />
            <label htmlFor="private-offices" className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                Private Offices
            </label>
            </div>
        </div>
        </div>
        </div>
        {/* Option */}
        <div className='flex flex-col'>
            <small className='text-gray-400 text-xs py-3'>STATUS</small>
            <form className='pb-4 '>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer">
                <option>No Vacancies</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>
            </form>
            <button className='bg-blue-500 rounded-lg w-40 h-10 text-white hover:bg-blue-600'>Update Property</button>
        </div>

    </div>
  )
}

export default Content1