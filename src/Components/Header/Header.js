import React, { useState } from 'react'
import '../Header/Header.css';
import { Link } from "react-router-dom";
import { getAllQuestionToSearchHandler } from '../../Utils/APIhandlers';

function Header(props) {
	const {setQuestions,setQuestioncount} = props;
	const [search,setSearch] = useState();
	const handleKeyPress = async (event) => {
		if (event.key === 'Enter') {
		  console.log('Enter key pressed. Perform search:', search);
			const response = await getAllQuestionToSearchHandler(search);
			setQuestions(response);
			setQuestioncount(1)
		    setSearch('')
		}
	  };
  return (
   <>
   <nav className="navbar navbar-expand-lg  navbar-expand-md navbar-light p-4">
				
					<div className="logo-container col-2">
						<Link to="/">
							
								<img className='logo' src='https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg' alt='LOGO' />
							
						</Link>
					</div>
					<div className="content-container col-9">
						<div className='input-div'>
                            <img className='search-icon' src={require('../../Assets/Images/searchicon.png') } alert='search button' />
							<input type='text' className='search-bar' placeholder='Search' value={search} onChange={(e)=> setSearch(e.target.value)} onKeyDown={handleKeyPress}/>		
						</div>
						<Link style={{color:'black' , opacity:0.8}} to="/about"><div className="header-title">About</div></Link>
						<Link style={{color:'black', opacity:0.8}} to="/product"><div className="header-title">Product</div></Link>
						<Link style={{color:'black', opacity:0.8}} to="/forteams"><div className="header-title">For teams</div></Link>
					</div>
				
			</nav>
   </>
  )
}

export default Header
