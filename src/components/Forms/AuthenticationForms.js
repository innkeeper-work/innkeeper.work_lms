// List of components to be created

// SignUpForm
// SignInForm
import React, { useState } from 'react';
import Record from "../../data/Record.json"



const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        courseOfInterest: "",
        password: "",
      })

      const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Fullname: " + formData.fullName );
        console.log("Email: " +  formData.email );
        console.log("Phone Number: " + formData.phoneNumber );
        console.log("Course Of Interest: " +  formData.courseOfInterest );
        console.log("Password: " + formData.password );
    }


    return (<>
    	

        {

Record && Record.map(record => {
    return(
        <div className="row">
        <div className="welcomeContainer col-lg-8">
			<img src={ record.innkeeperlogo1 } className="shiftedimage img-fluid w-75" style={{marginTop: 150,}} ></img>
			<p className="signUpText shift">{ record.text1 }</p>
			<p className="signUpText shift">{ record.text2a }<br/> { record.text2b }</p>
		</div>
        <div className="signUpForm-Container col-lg-4">
            <div className='row'>
            <div className="mt-3 mx-auto">
            <img src={ record.innkeeperlogo2 } alt='Innkeeper Logo' className='w-17'></img>
            </div>
            </div>
            <h1 className="text">Create Account</h1>
            <form onSubmit={handleSubmit}>
            <div className="Vessel">
                <p className="icon">👨‍💼 </p>
                <input onChange={(e) => setFormData({...formData, fullName: e.target.value})} value={formData.fullName} type="text" name="fullName" id="fullName" className="myInput" placeholder="Full name"></input><br/>
            </div>

            <div className="Vessel">
            	<p className="icon">✉ </p>
               <input onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} type="text" name="email" id="email" className="myInput" placeholder="Email"></input><br/>
            </div>

            <div className="Vessel">
            	<p className="icon">📞 </p>
               <input onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} value={formData.phoneNumber} type="text" name="phoneNumber" id="phoneNumber" className="myInput" placeholder="Phone number"></input><br/>
            </div>

            <div className="Vessel">
            	<p className="icon">📖 </p>
                <input list='courses' onChange={(e) => setFormData({...formData, courseOfInterest: e.target.value})} value={formData.courseOfInterest} type="text" name="courseOfInterest" id="courseOfInterest" className="myInput" placeholder="Course of interest" />
               <datalist id="courses">
               <option value="course1"></option>
               <option value="course2"></option>
               <option value="course3"></option>
               <option value="course4"></option>
               </datalist>
               <br/>
               </div>

            <div className="Vessel">
            	<p className="icon"> </p>
               <input onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} type="text" name="password" id="password" className="myInput" placeholder="Password"></input><br/>
            </div>

            <p>{ record.text3a }<br /><a href="" class="link">{ record.text3b } </a>{ record.text3c }</p>

                <input className="signUpButton" type="submit" value="Sign Up" />
                </form>
                <p>{ record.text4 }</p>

                <div>
                    <button className="button"><img src={ record.Linkedinicon } width="30px" height="30px"></img></button>
                    <button className="button"><img src={ record.Googleicon } width="30px" height="30px"></img></button>
                </div>
                <p>{ record.text5 }</p>
        </div>                                              
        </div>                                                                                                                                                    
    )
})
}
		
                
    
    </>)
}
export default SignUpForm



// export const signInForm = () => {
//     return (<> 
//     <div>
//         <div class="signUpForm-Container">
//             <img src="file:///C:/Users/Doctor/Desktop/React/Cloned/innkeeper_lms/src/assets/images/innkeeperdarlogo.png"></img>
//             <h1 class="text">Login</h1>

//             <div class="Vessel">
//                <input class="myInput" placeholder="Email/Username"></input>
//             </div>

//             <div class="Vessel">
//                <input class="myInput" placeholder="Password"></input>
//             </div>

//             <div class="checkbox-container">
//             <input type="checkbox">Stay Signed </input>
//             </div>

//             <a class="link" href="#">Forget Username/Password?</a>

//                 <button class="loginButton">Log In</button>
//                 <p>Or continue with</p>

//                 <div>
//                     <button class="button"><img src="file:///C:/Users/Doctor/Desktop/React/Cloned/innkeeper_lms/src/assets/images/icons8-linkedin-circled-48.png"></img></button>
//                     <button class="button"><img src="file:///C:/Users/Doctor/Desktop/React/Cloned/innkeeper_lms/src/assets/images/google-logo.png" width="50px" height="50px"></img></button>
//                 </div>
//                 <p>Terms| Privacy</p>
//         </div>
                
//     </div>    
    
//     </>)}