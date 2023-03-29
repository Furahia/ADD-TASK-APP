import React, {useState} from 'react'
import { Link } from "react-router-dom";
// import Profile from './components/Profile';
// import image from '../components/OIP.jpg';
// import image  from "./OIP.jpg"

function Home() {
  return (
    <div>
      <div className='home'>
      <div className="action-buttons">
        {/* <li><Link to={"/Profile"}>Profile</Link></li>
         <li><Link to={"/Questions"}>Questions</Link></li>
         <Link to="/register">Register</Link> */}
        </div>

      <header>
        <h1>WELCOME TO FAQ APP</h1>
        <p>Where you can pose a question,see other people's questions and comments.
          See your progress so far
        </p>
      </header>
      <main>
       


        <div className="featured-questions">
          <h2>Featured Questions</h2>
          <br/>
          <ul>
            <li><Link to="Questions">Why use firebase?</Link></li>
            <br/>
            <li><Link to="Questions">What is a firebase database?</Link></li>
            <br/>
            <li><Link to="Questions">How do i create a firebase app?</Link></li>
            <br/>
          </ul>
        </div>
      </main>
         


          <button type="submit" className="btn">LEARN MORE</button>
     </div>
     {/* <img src={image} alt =""/> */}
     </div>
  )
}

export default Home