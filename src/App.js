import React, {useState} from 'react';
import AlumniMessage from "./components/AlumniMessage"
import './App.css';
import RercruiterMessage from './components/RecruiterMessage';
import YourInfo from './components/YourInfo';
import EmailChecker from './components/EmailChecker';

function App() {

  const [user, setUser] = useState("")

  function handleName(e){
    const name = e.target.value
    setUser(name)
}
  return (

    <div className="App">
      <YourInfo user={user} func={handleName}/>
      <EmailChecker/>
      <div className="templates">
        <AlumniMessage user={user}/>
        <RercruiterMessage user={user}/>
      </div>
      
    </div>
  );
}

export default App;
