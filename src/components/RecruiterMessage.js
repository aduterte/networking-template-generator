import React, {useState} from "react"

export default function RercruiterMessage(props){

    const [contact, setContact] = useState(""),
    [company, setCompany] = useState(""),
    [position, setPosition] = useState(""),
    [location, setLocation] = useState(""),
    [tidbit, setTidbit] = useState(""),
    [question, setQuestion] = useState(""),
    [email, setEmail] = useState(""),
    warning = {color:"red",fontWeight:"bold"}

    // const message = `Hi ${contact},%0D%0AI hope you are doing well. My name is ${props.user} and I am a recent graduate of Flatiron School's Software Engineering Program.  I came across the ${position} position in ${location} and after learning more about ${company}, I was very intrigued by ${tidbit}.%0D%0A%0D%0AI would love to schedule a virtual coffee soon so I could learn more about what it's like to work at ${company} and ask a few questions about ${question}. If your schedule doesn’t permit us to connect, would you be open to answering a few questions via email?%0D%0A%0D%0AI look forward to hearing from you soon. Thanks in advance!%0D%0A%0D%0ABest,%0D%0A${props.user}<img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"/>
    // `

 

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

    function handleEmail(e){
        const email = e.target.value
        setEmail(email)
    }

    function handleCopy(){
        console.log("im hit")
        
        let bodyText = document.getElementById("copy-text"),
            selection = window.getSelection(),
            range = null


            range = document.createRange()
        range.selectNode(bodyText)
        selection.removeAllRanges()
        selection.addRange(range)
        
       
        document.execCommand('copy')
        
        // debugger
        
        selection.removeAllRanges()
        
        range = null
    }

    function handleReset(){
        setContact("")
        setCompany("")
        setPosition("")
        setLocation("")
        setTidbit("")
        setQuestion("")
        setEmail("")
    }

    return(
        <div className="recruiter-message-container">
            <h2>Recruiter Message</h2>
                <br/>
                <label>Enter Recruiter's E-mail </label><input type="text" value={email} onChange={handleEmail} placeholder="name@somewhere.com"/>
                <br/>
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
                <button onClick={handleReset}>Reset</button>

            <p><b>Quick Question about {company === "" ? <span style={warning}> * Company Missing * </span> : company}</b></p>
            <div id="copy-text">
                <p>Hi {contact === "" ? <span style={warning}> * Name Missing * </span> : contact},</p>

                <p>I hope you are doing well.  My name is {props.user === "" ? <span style={warning}> * Your Name Missing * </span> : props.user} and I am a recent graduate of Flatiron School's Software Engineering Program.  I came across the {position === "" ? <span style={warning}> * Position Missing * </span> : position} position in {location === "" ? <span style={warning}> * location Missing * </span> : location} and after learning more about {company === "" ? <span style={warning}> * Company Missing * </span> : company}, I was very intrigued by {tidbit === "" ? <span style={warning}> * what caught your eye * </span> : tidbit}.</p>


                <p>I would love to schedule a virtual coffee soon so I could learn more about what it's like to work at {company === "" ? <span style={warning}> * Company Missing * </span> : company} and ask a few questions about {question === "" ? <span style={warning}> * your question * </span> : question}. If your schedule doesn’t permit us to connect, would you be open to answering a few questions via email?</p>

                <p>I look forward to hearing from you soon.  Thanks in advance!</p>
                <p>Best,
                <br/>
                {props.user === "" ? <span style={warning}> * Your Name Missing * </span> : props.user}</p>
            </div>
            <div>
                <button onClick={handleCopy}>Click to Copy Message</button>
            </div>

            
            {/* <a href={`mailto:${email}?subject=Quick Question about ${company}&html-body=${message}`} target="_blank" rel="noopener noreferrer">E-mail it</a> */}
            
        </div>
    )
}