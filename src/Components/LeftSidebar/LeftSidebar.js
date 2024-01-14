import React, { useState } from 'react'
import './LeftSidebar.css'

function LeftSidebar() {
    const [expand,setExpand] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemAuth, setSelectedItemAuth] = useState(null);

  const handleClickAuth = (item) => {
    setSelectedItemAuth(item);
  };

    const handleItemClick = (item) => {
        setSelectedItem(item);
      };

  return (
    <div className='left-sidebar-container'>
        <div className='content-container-left'>
        <span className='home-image-container'>
            <img className='home-image' src={require('../../Assets/Images/homeicon.png')} alt='Home' />
            <span>Home</span>
        </span>
        <span className='home-image-container'>
            <img className='home-image' src={require('../../Assets/Images/public.png')} alt='Home' />
            <span>Public</span>
            { expand ? (
                <img className='arrow-image' src={require('../../Assets/Images/downarrow.png')} alt='expand' onClick={()=> setExpand(!expand)} />
            ) :(
                <img className='arrow-image' src={require('../../Assets/Images/uparrow.png')} alt='collapse' onClick={()=> setExpand(!expand)} />
            )

            }
        </span>
        {!expand && 
        <div className='dropdown-list-container'>
            <span
              className={`dropdown-list-item ${selectedItem === 'Questions' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Questions')}
            >
              Questions
            </span>
            <span
              className={`dropdown-list-item ${selectedItem === 'Tags' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Tags')}
            >
              Tags
            </span>
            <span
              className={`dropdown-list-item ${selectedItem === 'Users' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Users')}
            >
              Users
            </span>
        </div>
        }
        <span className='home-image-container'>
            <img className='home-image' src={require('../../Assets/Images/collectives.png')} alt='Home' />
            <span>Collectives</span>
        </span>
        <span className='home-image-container'>
            <img className='home-image' src={require('../../Assets/Images/jobs.png')} alt='Home' />
            <span>Jobs</span>
        </span>
        </div>
        <div className='auth-block-container'>
        <span
        className={`auth-block-item ${selectedItemAuth === 'Login' ? 'selected' : ''}`}
        onClick={() => handleClickAuth('Login')}
      >
        Login
      </span>
      <span
        className={`auth-block-item ${selectedItemAuth === 'SignUp' ? 'selected' : ''}`}
        onClick={() => handleClickAuth('SignUp')}
      >
        Sign up
      </span>
        </div>
    </div>
    
  )
}

export default LeftSidebar