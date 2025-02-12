import React from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'

const Content = () => {
  return (
    
      <div className="flex bg-gray-100 p-4 justify-start h-full">
        {/* Main content */}
        <Content1/>
        <Content2/>
        <Content3/>
      </div>

  )
}

export default Content