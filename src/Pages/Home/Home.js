import React from 'react'
import './Home.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

function Home() {
  return (
    <div className='home-container'>
        <LeftSidebar />
        <div className='home-center'>
            Home Center
        </div>
        <RightSidebar />
    </div>
  )
}

export default Home