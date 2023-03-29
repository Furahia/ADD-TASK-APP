import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
let navigate = useNavigate();

  let [user, setUser] = useState(
    { // User object
      email: "",
      password: ""
    }
  )
  let [loginError, setLogginError] = useState(false);

  // TODO: Add SDKs for Firebase products that you want to use

  function handleLogin(event) {
      event.preventDefault();

      // Firebase login
      const auth = getAuth();
      signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log(user);
          sessionStorage.setItem("user", JSON.stringify(user)); // Save user to sessionStorage
          return navigate("/questions"); // Redirect user to questions
      })
      .catch((error) => {
          // We have a login error
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)

          setLogginError(true);
      });
  }

  

  return (
    <div className='container'>

      <ul className='links'>
        <li><Link to={"/questions"}>Questions</Link></li>
        <li><Link to={"/profile"}>Profile</Link></li>
       </ul>
      
       

       <form action="" className='login' onSubmit={(event) => handleLogin(event)}>
            
       {loginError ? 
            <div className="error">
                <p>ERROR: Invalid email/password combination</p>
            </div>
            : ""
            }
            
        <span className='logo'> FAQ APP</span>
        <span className='reg'> Login</span>
           
        <label htmlFor="">Email</label> 
            <br/>
            <input type="email" name="User-name" onChange={(e) => setUser({...user, email: e.target.value})}/>
            <br/>
            <label htmlFor="">Enter password</label>
            <br/>
            <input type="password" name="password" onChange={(e) => setUser({...user, password: e.target.value})}/>
            <br/>
            <button type="submit" className="btn">Login</button>
            <br />
            <small>Dont have an account? <Link to="/register">Register</Link></small>
        </form>
    </div>
    
  )
}

export default Login