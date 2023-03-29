import React, {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  let navigate = useNavigate();

  let [user, setUser] = useState(
    { // User object
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
    }
  )

  function handleRegister(event) {
    event.preventDefault(); // Prevent form from submitting

    if(user.password !== user.confirmPassword) { // check if passwords match
      alert("passwords do not match");
      return; // end program
    }

    if(user.password.length < 8) {  // check password length
      alert("Password too short"); 
      return; // end program
    }

    
    if(user.password.length < 8) {  // check password length
      alert("Password too short"); 
      return; // end program
    }


    // Handle Firebase
  
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log(user);

      updateProfile(auth.currentUser, {
        displayName:user.name, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then((res) => {
        // Profile updated!
        console.log(res);
        return navigate("/questions"); // Redirect user to questions
      }).catch((error) => {
        // An error occurred
        console.log(error)
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode, errorMessage)
    });
}

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'> FAQ APP</span>
        <span className='reg'> REGISTER</span>
     
       <form action="" className='register' required onSubmit={(e) => handleRegister(e)}>
            <label htmlFor="">Name:</label>
            <br/>
            <input type="text" name="name" required onChange={(e) => setUser({...user, name: e.target.value})} />
            <br/>
            <label htmlFor="">Your user name:</label>
            <br/>
            <input type="text" name="username" required onChange={(e) => setUser({...user, username: e.target.value})}/>
            <br/>
            <label htmlFor="">Your email:</label>
            <br/>
            <input type="email" name="email" required onChange={(e) => setUser({...user, email: e.target.value})}/>
            <br/>
            <label htmlFor="">Enter password:</label>
            <br/>
            <input type="password" name="password" onChange={(e) => setUser({...user, password: e.target.value})}/>
            <br/>
            <label htmlFor="">Confirm password:</label>
            <br/>
            <input type="password" name="password" onChange={(e) => setUser({...user, confirmPassword: e.target.value})}/>
            <br/>
            <h4>Forgot password?</h4>
            <button type="submit" className="btn">Submit</button>
            <br/>
            <small>Already have an account? <Link to="/login">Login</Link></small>
        </form>
        </div>
    </div>
  )
  }

export default Register