import React from 'react'
import '../Header/Header.css';
import { Link } from "react-router-dom";

function Header() {
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
							<input type='text' className='search-bar' placeholder='Search' />		
						</div>
						<div className="header-title">About</div>
						<div className="header-title">Product</div>
						<div className="header-title">For teams</div>
					</div>
				
			</nav>
   </>
  )
}

export default Header
