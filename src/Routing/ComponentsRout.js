import React from 'react'
import About from '../Pages/About/About'
import ForTeams from '../Pages/ForTeams/ForTeams'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'

function ComponentsRout() {
  return (
    <Routes>
			<Route path="/" exact={true} element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/forteams" element={<ForTeams/>} />
		</Routes>
  )
}

export default ComponentsRout