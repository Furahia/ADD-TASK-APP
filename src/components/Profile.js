import React from 'react'

// function Profile() {
//   return (
//     <div>
        
//         <div className='pp'>
//         <h3>USER</h3>
//         <h4>Your question</h4>
//       <input type="text" name="question"/>
//       <h4> Your Answers </h4>
//       <input type="text" name="answer"/>
//       <input type="text" name="answer"/>
//       <input type="text" name="answer"/>

//         </div>

//     </div>
//   )
// }

function Profile() {
  let loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    console.log(loggedInUser)
  return (
  
    <div className="ProfilePage">
      {/* <div className='h3'><h3>Profile Page</h3></div>
      <div className="profile-left">
            <img src={loggedInUser.providerData[0].photoURL} alt="" />
            <br />
            <h3>{loggedInUser.providerData[0].displayName}</h3>
            <p><strong>{loggedInUser.providerData[0].email}</strong></p>
        </div> */}

       <div className="profile-card"> 
       
       
        <span>
          <div className="profile-image">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Profile Avatar" />
          <h2> Hope Guest</h2>
          <h3>{loggedInUser.providerData[0].displayName}</h3>
            <p><strong>{loggedInUser.providerData[0].email}</strong></p>
          <h2> About Me</h2>
          <h4>Hi, i'm Hope Guest.. I have a huge passion for web-development an programming. I love to learn and thrive from challenges</h4>
          <p>Email: hope.guest@example.com</p>
          <p>Username: hopeguestt123</p>
          <p>Location: Nairobi, KENYA</p>
          </div>
        </span> 
        
       </div>
      {/* <div className="profile-right">
             <div className="stats">
                 <h6>10</h6>
                 <p>Questions asked</p>
             </div>
             <div className="stats">
                 <h6>20</h6>
                 <p>Questions answered</p>
             </div>
       </div> */}
    </div>
     );
}
export default Profile