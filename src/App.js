
import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ComponentsRout from './Routing/ComponentsRout';

function App() {
  const [questions,setQuestions] = useState();
  const [questioncount,setQuestioncount] = useState(1);
  return (
    <>
    <Header setQuestions={setQuestions} setQuestioncount={setQuestioncount}/>
    <ComponentsRout setQuestions={setQuestions} setQuestioncount={setQuestioncount} questions={questions} questioncount={questioncount} />
    </>
  );
}

export default App;
