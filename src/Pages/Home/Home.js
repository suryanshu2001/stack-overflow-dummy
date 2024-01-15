import React, { useState } from 'react'
import './Home.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

function Home() {
  const [issaved,setIssaved] = useState(false)
  return (
    <div className='home-container'>
        <LeftSidebar />
        <div className='home-center'>
           <div className='home-center-question'>
               <div className='question-header-section'>
                   <div className='upper-header'>
                      <span className='title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                      <img className='question-mark' src={require('../../Assets/Images/question-signF.png')} alt='question mark' />
                        <div className='change-question-container'>
                            <span className='negative-sign'>-</span>
                            <span className='count'>103</span>
                            <span className='posetive-sign'>+</span>
                        </div>
                    </div>
                    <div className='white-bar' />
                    <div className='profile-section'>
                        <img className='profile-pic' src='https://media.licdn.com/dms/image/D4D35AQEiysjbSeBGrw/profile-framedphoto-shrink_100_100/0/1689277563645?e=1705856400&v=beta&t=AolGRF_vbU_iJJ-wVsj6uEEkkuLeyN3uDIbCgvNZaAk' alt='profilepic' />
                        <span className='small-header-content-text'>Suryanshu Bedi</span>
                        <span className='small-header-content-text-count'>9,038
                        </span>
                        <span className='small-header-content-text'>Asked 2 years, 1 month ago</span>
                        <span className='small-header-content-bar'>|</span>
                        <span className='small-header-content-text'>Active 21 days ago</span>
                        <span className='small-header-content-bar'>|</span>
                        <span className='small-header-content-text'>Viewed 123k times</span>
                    </div>
                </div>
                <div className='question-body-section'>
                  <span className='question-body-section1'>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters:
                  </span>
                  <div className='question-body-section2'>
                  E/SQLiteDatabase: Error inserting description=dog image_link=null category=
                  android.database.sqlite.SQLiteConstraintException: NOT NULL constraint failed: favourites.image_link (code 1299 SQLITE_CONSTRAINT_NOTNULL).
                  </div>
                  <span className='question-body-section3'>
                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                  </span>
                  <div className='question-body-section4'>
                    { !issaved ?
                      <div className='save-div'><img className='save-image' src={require('../../Assets/Images/savewhite.png')} alt='save'/> 20</div>
                      : 
                      <div className='save-div'><img className='save-image' src={require('../../Assets/Images/savecolored.png')} alt='save'/> 20</div>
                    }
                    <div className='bottom-right-image'>
                      <img className='bottom-right-image' src={require('../../Assets/Images/forwardarrow.png')} alt='forward' />
                      <img className='bottom-right-image' src={require('../../Assets/Images/messageicon.png')} alt='message' />
                    </div>
                  </div>
                </div>
           </div>
        </div>
        <RightSidebar />
    </div>
  )
}

export default Home