import React, {useState} from "react"

export default function AlumniMessage(){

    const [contact, setContact] = useState(""),
        [company, setCompany] = useState(""),
        [user, setUser] = useState("")

    function handleContact(e){
        const contact=e.target.value
        setContact(contact)
    }

    function handleCompany(e){
        const company = e.target.value
        setCompany(company)
    }

    function handleUser(e){
        const user = e.target.value
        setUser(user)
    }
    return(
        <div className="alumni-message-container">
            <h2>Alumi LinkedIn Message</h2>
          
                <label>Enter Alumni's Name</label><input type="text" value={contact} onChange={handleContact} placeholder="Enter Alumni Name"/>
                <br/>
                <label>Enter Alumni's Company</label><input type="text" value={contact} onChange={handleCompany} placeholder="Enter Alumni Company"/>
                <br/>
                <label>Enter Your Name</label><input type="text" value={user} onChange={handleUser} placeholder="Enter Your Name"/>
           
            <p><b>Greetings from a fellow Flatiron Alumni</b></p>
            <p>Hi {contact}</p>
            <p>I hope all is well with you.  I noticed that you attended Flatiron School and began your new journey as a developer at {company}.  As a recent Flatiron School graduate, I would love to know more about your post-graduation experience and how you successfully transition into the industry.</p>
            <p>Would you be open to scheduling a virtual coffee meeting to discuss your experience?  If so, please let me know what date and time work best for you.  If your schedule doesn’t permit us to connect, would you be open to answering a few questions via email?</p>
            <p>I look forward to hearing from you soon.  Thanks in advance!</p>
            <p>Best,
            <br/>
            {user}</p>
            <textarea>Test</textarea>
        </div>
    )
}