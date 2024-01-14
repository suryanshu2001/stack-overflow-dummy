import React from 'react'
import './Home.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

function Home() {
  return (
    <div className='home-container'>
        <LeftSidebar />
        <div className='home-center'>
           <div className='home-center-question'>
               <div className='question-header-section'>
                   <div className='upper-header'>
                      <span className='title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        <div className='change-question-container'>
                            <span className='negative-sign'>-</span>
                            <span className='count'>103</span>
                            <span className='posetive-sign'>+</span>
                        </div>
                    </div>
                    <span className='white-bar' />
                    <div className='profile-section'>
                        <img className='profile-pic' src='https://media.licdn.com/dms/image/D4D35AQEiysjbSeBGrw/profile-framedphoto-shrink_100_100/0/1689277563645?e=1705856400&v=beta&t=AolGRF_vbU_iJJ-wVsj6uEEkkuLeyN3uDIbCgvNZaAk' alt='profilepic' />
                        <span className='small-header-content-text'>Suryanshu Bedi</span>
                        <span className='small-header-content-text'>9,038</span>
                        <span className='small-header-content-text'>Asked 2 years, 1 month ago</span>
                        <span className='small-header-content-bar'>|</span>
                        <span className='small-header-content-text'>Active 21 days ago</span>
                        <span className='small-header-content-bar'>|</span>
                        <span className='small-header-content-text'>Viewed 123k times</span>
                    </div>
                </div>
           </div>
        </div>
        <RightSidebar />
    </div>
  )
}

export default Home