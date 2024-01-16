import React from 'react'
import About from '../Pages/About/About'
import ForTeams from '../Pages/ForTeams/ForTeams'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'

function ComponentsRout(props) {
	const {setQuestions,setQuestioncount,questions,questioncount} = props;
  return (
    <Routes>
			<Route path="/" exact={true} element={<Home setQuestioncount={setQuestioncount} setQuestions={setQuestions} questioncount={questioncount} questions={questions}/>} />
			<Route path="/about" element={<About />} />
			<Route path="/forteams" element={<ForTeams/>} />
		</Routes>
  )
}

export default ComponentsRout