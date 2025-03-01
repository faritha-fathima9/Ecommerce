import React from 'react'
import "./Login.css";

const Login = () => {
   

    var userData=[
        {username:"faritha",passcode:123,cart:[] },
        {username:"fathima",passcode:456,cart:[] },
        {username:"tamil",passcode:789,cart:[] },
    
      ];

     
      const signup=()=>{
        var username=document.getElementById("username").value;
        var userpasscode=document.getElementById("passcode").value;
        var activiewuserdetails=userData.filter((data)=>{
          return username == data.username;
    
        });
        console.log(activiewuserdetails);
        if(activiewuserdetails.length >0){
          if(activiewuserdetails[0].passcode==userpasscode){
            localStorage.setItem("username",activiewuserdetails[0].username);
        window.location.replace("/Home");

          }
          else{
            console.log("wrong password")
          }
        }
      }
  return (
    <div>

    <div className='header'><br></br>
        <div className='text'>LOGIN UP</div>
        <div className="inputs"><br></br>
            <input type='text'id="username"/>
            <div className='input'/>
            <input type='password' id='passcode'/><br>
            </br>
        
        <button onClick={signup}>SINGN UP</button>
        <p>forgot password? or sign up</p>

        </div>
        </div>
  </div>
  );
};

export default Login;