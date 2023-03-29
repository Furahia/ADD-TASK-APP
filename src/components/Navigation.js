import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navigation() {
  let navigate = useNavigate();
  let [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if(sessionStorage.getItem("user")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [])

  function handleLogout() {
    sessionStorage.removeItem("user");
    setLoggedIn(false);
    return navigate("/"); // Redirect user to homepage
  }
  

  return (
    <nav>
      <div className='logo'>
        
      </div>

      <ul className='links'>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/login"}>Login</Link></li>
        <li><Link to={"/register"}>Register</Link></li>
        {loggedIn ? <li><Link to={"/profile"}>Profile</Link></li> : ""}

        {loggedIn ? <li><button onClick={handleLogout}>Logout</button></li> : ""}
      </ul>
    </nav>
  );
}

export default Navigation;