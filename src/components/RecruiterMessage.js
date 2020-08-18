import React, {useState} from "react"

export default function RercruiterMessage(props){

    const [contact, setContact] = useState(""),
    [company, setCompany] = useState(""),
    [user, setUser] = useState(""),
    [position, setPosition] = useState(""),
    [location, setLocation] = useState(""),
    [tidbit, setTidbit] = useState(""),
    [question, setQuestion] = useState(""),
    warning = {color:"red",fontWeight:"bold"}

function handleContact(e){
    const contact=e.target.value
    setContact(contact)
}

function handleCompany(e){
    const company = e.target.value
    setCompany(company)
}

function handlePosition(e){
    const position = e.target.value
    setPosition(position)
}

function handleLocation(e){
    const location = e.target.value
    setLocation(location)
}

function handleTidbit(e){
    const tidbit = e.target.value
    setTidbit(tidbit)
}

function handleQuestion(e){
    const question = e.target.value
    setQuestion(question)
}


    return(
        <div className="recruiter-message-container">
            <h2>Recruiter Message</h2>
          
                <label>Enter Recruiter's Name </label><input type="text" value={contact} onChange={handleContact} placeholder="Enter Recruiters Name"/>
                <br/>
                <label>Enter Company </label><input type="text" value={company} onChange={handleCompany} placeholder="Enter Company Name"/>
                <br/>
                <label>Enter Position </label><input type="text" value={position} onChange={handlePosition} placeholder="Enter Position"/>
                <br/>
                <label>Enter Location </label><input type="text" value={location} onChange={handleLocation} placeholder="Enter Location"/>
                <br/>
                <label>Enter Company Tidbit </label><input type="text" value={tidbit} onChange={handleTidbit} placeholder="Enter Tidbit"/>
                <br/>
                <label>Enter Question</label><input type="text" value={question} onChange={handleQuestion} placeholder="Enter what you would like to speak about, e.g. keys to success"/>
                <br/>
                
                {/* <label>Enter Your Name</label><input type="text" value={user} onChange={handleUser} placeholder="Enter Your Name"/> */}
           
            <p><b>Quick Question about {company === "" ? <span style={warning}> * Company Missing * </span> : company}</b></p>
            <p>Hi {contact === "" ? <span style={warning}> * Name Missing * </span> : contact}</p>

            <p>I hope you are doing well.  My name is {props.user === "" ? <span style={warning}> * Your Name Missing * </span> : props.user} and I am a recent graduate of Flatiron School's Software Engineering Program.  I came across the {position === "" ? <span style={warning}> * Position Missing * </span> : position} in {location === "" ? <span style={warning}> * location Missing * </span> : location} and after learning more about {company === "" ? <span style={warning}> * Company Missing * </span> : company}, I was very intrigued by {tidbit === "" ? <span style={warning}> * what caught your eye * </span> : tidbit}.</p>


            <p>I would love to schedule a virtual coffee soon so I could learn more about what it's like to work at {company === "" ? <span style={warning}> * Company Missing * </span> : company} and ask a few questions about {question === "" ? <span style={warning}> * your question * </span> : question}. If your schedule doesn’t permit us to connect, would you be open to answering a few questions via email?</p>

            <p>I look forward to hearing from you soon.  Thanks in advance!</p>
            <p>Best,
            <br/>
            {props.user === "" ? <span style={warning}> * Your Name Missing * </span> : props.user}</p>
            
        </div>
    )
}