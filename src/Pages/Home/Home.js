import React, { useState } from 'react'
import './Home.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

function Home() {
  const [issaved,setIssaved] = useState(false)
  const [selectedItem,setSelectedItem] = useState('Votes'); 
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
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
                      <div onClick={()=> setIssaved(!issaved)} className='save-div-u'><img className='save-image' src={require('../../Assets/Images/savewhite.png')} alt='save'/> 20</div>
                      : 
                      <div onClick={()=> setIssaved(!issaved)} className='save-div-s'><img className='save-image' src={require('../../Assets/Images/savecolored.png')} alt='save'/> 21</div>
                    }
                    <div className='bottom-right-image'>
                      <img className='bottom-right-image' src={require('../../Assets/Images/forwardarrow.png')} alt='forward' />
                      <img className='bottom-right-image' src={require('../../Assets/Images/messageicon.png')} alt='message' />
                    </div>
                  </div>
                </div>
           </div>
           <div className='home-center-separation' >
            <div className='answer-counts'>
              <span className='number'>20</span>
              <span className='answer-name'>Answers</span>
            </div>
         <div className='separation-right-side'>
        <span
          className={`home-center-separation-item ${selectedItem === 'Votes' ? 'active' : ''}`}
          onClick={() => handleItemClick('Votes')}
        >
          Votes
        </span>
        <span
          className={`home-center-separation-item ${selectedItem === 'Oldest' ? 'active' : ''}`}
          onClick={() => handleItemClick('Oldest')}
        >
          Oldest
        </span>
        <span
          className={`home-center-separation-item ${selectedItem === 'Active' ? 'active' : ''}`}
          onClick={() => handleItemClick('Active')}
        >
          Active
        </span>
    </div>
  </div>
  <div className='home-center-answer'>
    <div className='answer-header-section'>
      <div className='upper-header'>
        <span className='answer-title'>
          <span className='answer-profile'>Author:<span className='link'>javed (308)</span></span>
            <span className='answer-timestamp'>Answered: Dec 9 '19 at 8:20</span>
        </span>
        <div className='change-answer-container'>
          <span className='negative-sign2'>-</span>
          <span className='count2'>25</span>
          <span className='posetive-sign2'>+</span>
        </div>
    </div>
    </div>
    <div className='answer-body'>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    </div>
  </div>
</div>
<RightSidebar />
</div>
  )
}

export default Home