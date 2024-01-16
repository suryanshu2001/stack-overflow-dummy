import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
       <h1>About Stack Overflow</h1>
      <p>
        Welcome to the Stack Overflow web app, where developers come together to learn, share knowledge, and build their careers.
      </p>

      <h2>Our Mission</h2>
      <p>
        At Stack Overflow, our mission is to empower developers by providing a platform for them to ask questions, share expertise, and collaborate on solving coding challenges. We believe in the power of a thriving developer community that supports and learns from each other.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Ask Questions:</strong> Post your coding challenges and get answers from the global developer community.</li>
        <li><strong>Answer Questions:</strong> Share your knowledge by helping others with their programming queries.</li>
        <li><strong>Vote and Rank:</strong> Users can upvote helpful answers, ensuring the best solutions rise to the top.</li>
        <li><strong>Tags and Categories:</strong> Organize content by tagging questions and categorizing topics for easy navigation.</li>
        <li><strong>User Profiles:</strong> Build your developer reputation by contributing valuable content and earning badges.</li>
      </ul>

      <h2>How to Get Started</h2>
      <p>
        To begin your journey on Stack Overflow, simply <Link to="/signup">create an account</Link> or <Link to="/login">log in</Link> if you already have one. Ask questions, answer queries, and engage with the vibrant developer community.
      </p>

      <h2>Contact Us</h2>
      <p>
        Have feedback, suggestions, or need assistance? Feel free to <Link to="/contact">contact us</Link>. We value your input and are committed to making Stack Overflow a better place for developers.
      </p>

      <p>
        Thank you for being a part of the Stack Overflow community. Happy coding!
      </p>
    
    </>
  )
}

export default About
