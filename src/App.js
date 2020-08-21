import React, {useState} from 'react';
import AlumniMessage from "./components/AlumniMessage"
import './App.css';
import RercruiterMessage from './components/RecruiterMessage';
import YourInfo from './components/YourInfo';
import EmailChecker from './components/EmailChecker';

function App() {

  const [user, setUser] = useState(""),
    [template, setTemplate] = useState("")

  function handleName(e){
    const name = e.target.value
    setUser(name)
  }

  function handleTemplate(e){
    const template = e.target.value
    setTemplate(template)
  }
  return (

    <div className="App">
      <div className="left-nav">
        <YourInfo user={user} func={handleName}/>
        <EmailChecker/>
        <input type="radio" value="alumni" name="template" onChange={handleTemplate}/>
        <label>Alumni Template</label>
        <input type="radio" value="recruiter" name="template" onChange={handleTemplate}/>
        <label>Recruiter Template</label>
        
      </div>
      <div className="main-section">
        
        
        <div className="templates">
          {template === "alumni" && <AlumniMessage user={user}/>}
          
          {template === "recruiter" && <RercruiterMessage user={user}/>}
        </div>  
      </div>
      
      
    </div>
  );
}

export default App;
