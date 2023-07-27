import React from 'react';
import './App.css';
import  dweepio1  from './dweepio1.png';
import InstagramLogo from './InstagramLogo.png';
import LinkedinLogo from './LinkedinLogo.png';

function AssignmentOne(){
  return(
    <div id="First_Part">
    <div>
       <p className="heading">
        An inspiring design delivered to<br/>your inbox every morning
       </p><br/><br/>

       <p className="paragraph">Our team scouts the internet for the best designs,<br/> 
        illustrations and art and delivers a truly inspiring <br/>one every day to your inbox</p>
        <br/>
        <p className="Para_two">Show me how it looks</p>

    </div>
    <div id="input">
        <form>
            <input type="email" id="email" name="email" placeholder ="Your e-mail address" className="e-mail_input" />
            <input type="submit" value="Register Now" className="Register_Now" />
        </form>
    </div>
    <p className="subtitle">Free - No Spam - No Data Sharing</p>
    <div>
        <img className="Image" src={dweepio1} alt="a person looking his mobile for Mails "/>
        
    </div>
                 
</div>

  );
}

function AssignmentTwo(){
  return(
    <div id="Second_Part">
    
    <div id="lists">
        <ol>
            <li>Prompt Generator</li>
            <li>Dweep Daily</li>
            <li>All Contributors</li>
            <li>Your data on Dweep.io</li>
            <li>Contribute to Dweep</li>
          </ol>
      </div>
    <div id="connect_info">
        <p>Dweep.io</p>
        <p>Made with love in India</p>
    </div>
    
    <div id="connect_image">
        <img src= { LinkedinLogo } alt="LinkedinLogo" height="25px" width="25px" />
        <img src= { InstagramLogo } alt="InstagramLogo" height="25px" width="25px" />
    </div>
    <p className="connect_info_two">hello@dweep.io</p>

  </div>


  );
}
function App() {
  return (
    <div className="App">
      <AssignmentOne />
      <AssignmentTwo />
            </div>
  );
}

export default App;
