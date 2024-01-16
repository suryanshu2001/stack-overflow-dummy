import React, { useEffect, useState } from 'react'
import './Home.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import { getAllAnswersToAQuestionHandler, getAllQuestionsHandler } from '../../Utils/APIhandlers'

function Home(props) {
  const {setQuestions,setQuestioncount,questions,questioncount} = props;
  const [issaved,setIssaved] = useState(false);
  const [answers,setAnswers] = useState();
  const [answercount,setAnswercount] = useState(1);
  const [selectedItem,setSelectedItem] = useState('Votes');
 

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleQuestionPlusClick = () =>{
    if (questions?.count>questioncount) {
      setQuestioncount(questioncount+1)
    }
  }
  const handleQuestionMinusClick = () =>{
    if (questioncount>1) {
      setQuestioncount(questioncount-1)
    }
  }
  function formatTimeAgo(timestamp) {
    const currentDate = new Date();
    const pastDate = new Date(timestamp * 1000);
  
    const timeDifference = currentDate - pastDate;
  
    const years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor((timeDifference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const days = Math.floor((timeDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  
    let timeAgo = "";
  
    if (years > 0) {
      timeAgo += `${years} ${years === 1 ? 'year' : 'years'}`;
    } else if (months > 0) {
      timeAgo += `${months} ${months === 1 ? 'month' : 'months'}`;
    } else if (days > 0 && days <= 30) {
      timeAgo += `${days} ${days === 1 ? 'day' : 'days'}`;
    } else if (timeDifference >= 60 * 60 * 1000) {
      timeAgo += `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    } else {
      timeAgo = "Just now";
    }
  
    if (timeAgo !== "Just now") {
      timeAgo += " ago";
    }
  
    return timeAgo;
  }
  function removeHtmlTags(xmlString) {
    return xmlString.replace(/<\/?[^>]+(>|$)/g, "");
  }
  const RemoveQuotes = (string) => {
    const removeQuotes = (str) => {
      return str.replace(/"/g, ''); 
    };
    const plainText = removeQuotes(string);

  return plainText;
  }
  function formatUnixTimestamp(timestamp) {
    const date = new Date(timestamp * 1000); 
  
    const options = { month: 'short', day: 'numeric', year: '2-digit', hour: 'numeric', minute: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
    return formattedDate;
  }
  
  useEffect(()=>{
    async function fetchQuestions() {
      const response = await getAllQuestionsHandler();
      setQuestions(response);
      setQuestioncount(1)
    }
    fetchQuestions()
  },[])
  useEffect(()=>{
    async function fetchAnswers() {
      const response = await getAllAnswersToAQuestionHandler(questions?.items[questioncount-1]?.question_id);
      setAnswers(response);
      setAnswercount(response?.count)
    }
    if (questions?.items[questioncount-1]?.is_answered) {
      fetchAnswers()
    }
    else setAnswers(null)
   
  },[questioncount])
  console.log('hello world',questions)
  console.log('hello answer world',answers)
  return (
    <div className='home-container'>
        <LeftSidebar />
        <div className='home-center'>
           <div className='home-center-question'>
               <div className='question-header-section'>
                   <div className='upper-header'>
                      <div className='title'>{questions?.items[questioncount-1]?.title}</div>
                      <img className='question-mark' src={require('../../Assets/Images/question-signF.png')} alt='question mark' />
                        <div className='change-question-container'>
                            <span className='negative-sign' onClick={()=> handleQuestionMinusClick()}>-</span>
                            <span className='count'>{questioncount}</span>
                            <span className='posetive-sign' onClick={()=> handleQuestionPlusClick()}>+</span>
                        </div>
                    </div>
                    <div className='white-bar' />
                    <div className='profile-section'>
                        <img className='profile-pic' src={questions?.items[questioncount-1]?.owner?.profile_image} alt='profilepic' />
                        <span className='small-header-content-text'>{questions?.items[questioncount-1]?.owner?.display_name}</span>
                        <span className='small-header-content-text-count'>{questions?.items[questioncount-1]?.owner?.reputation}
                        </span>
                        <span className='small-header-content-text'>Asked {formatTimeAgo(questions?.items[questioncount-1]?.creation_date)}</span>
                        <span className='small-header-content-bar'>|</span>
                        <span className='small-header-content-text'>Active{formatTimeAgo(questions?.items[questioncount-1]?.last_activity_date)}</span>
                        <span className='small-header-content-bar'>|</span>
                        <span className='small-header-content-text'>Viewed {questions?.items[questioncount-1]?.view_count} times</span>
                    </div>
                </div>
                <div className='question-body-section'>
                   <div className='question-html' dangerouslySetInnerHTML={{ __html: questions?.items[answercount-1]?.body }} />
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
           {!answers ? 
           <div className='no-answer'>
            <span className='no-answer-text'>Sorry!! Looks like there's no answer to this issue thread.</span><span >😟</span>
            </div>:
            <>
           <div className='home-center-separation' >
            <div className='answer-counts'>
              <span className='number'>{answercount}</span>
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
          <span className='answer-profile'>Author:<span className='link'>{answers?.items[answercount-1]?.owner?.display_name} ({answers?.items[answercount-1]?.owner?.reputation})</span></span>
            <span className='answer-timestamp'>Answered: {formatUnixTimestamp(answers?.items[answercount-1]?.last_edit_date)}</span>
        </span>
        <div className='change-answer-container'>
          <span className='negative-sign2'>-</span>
          <span className='count2'>25</span>
          <span className='posetive-sign2'>+</span>
        </div>
    </div>
    </div>
    <div className='answer-body'>
    <div dangerouslySetInnerHTML={{ __html: answers?.items[answercount-1]?.body }} />
    </div>
  </div>
  </>}
</div>
<RightSidebar />
</div>
  )
}

export default Home