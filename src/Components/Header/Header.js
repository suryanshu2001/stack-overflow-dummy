import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
   <>
   <nav className="navbar navbar-expand-lg  navbar-expand-md navbar-light p-4">
				<div className="outer-container">
					<div className="logo-container col-2">
						<Link to="/">
							<span
								style={{
									fontSize: "3vw",
									textDecorationColor: "black",
								}}
							>
								LOGO
							</span>
						</Link>
					</div>
					<div
						className="content-container col-9"
						style={{
							display: "flex",
							justifySelf: "center",
							justifyContent: "space-between",
						}}
					>
						

						<div
							style={{
								borderRadius: "1.5vw",
								backgroundColor: "white",
								width: "22vw",
								height: "3.6vh",
								display: "flex",
								justifyContent: "flex-start",
								alignItems: "center",
								overflow: "hidden",
							}}
						>
							<div
								style={{
									fontSize: "1.2vw",
									marginLeft: "0.8vw",
									width: "18.2vw",
									opacity: "0.6",
									fontWeight: "400px",
								}}
							>
								Search for style,collection
							</div>
							<div
								style={{
									backgroundColor: "black",
									height: "3.8vh",
									width: "6vw",
									opacity: "0.83",
								}}
							/>
						</div>
						<div className="home-container"></div>
						<div className="home-container">MEN</div>
						<div className="home-container">WOMEN</div>
						<div className="home-container">KIDS</div>
						<div className="home-container">COLLECTION</div>
						<div className="home-container">TRENDS</div>
					</div>
				</div>
			</nav>
   </>
  )
}

export default Header
