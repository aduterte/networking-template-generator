import React, {useState} from "react"
import { contactAtom} from "../Atom"
import {useRecoilValue} from "recoil"

export default function AlumniMessage(props){

    const contact = useRecoilValue(contactAtom),
        warning = {color:"red",fontWeight:"bold"}

   

    function handleCopy(){
        console.log("im hit")
        
        let bodyText = document.getElementById("alumni-text"),
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
    
    return(
        <div className="alumni-message-container">
           
            <h2>Alumni LinkedIn Message</h2>
                
            <div id="alumni-text">
            <p><b>Greetings from a fellow Flatiron Alumni</b></p>
            <p>Hi {contact.firstName === "" ? <span style={warning}> * Name Missing * </span> : contact.firstName},</p>
            <p>I hope all is well with you.  I noticed that you attended Flatiron School and began your new journey as a developer at {contact.company === "" ? <span style={warning}> * Company Missing * </span> : contact.company}.  As a recent Flatiron School graduate, I would love to know more about your post-graduation experience and how you successfully transition into the industry.</p>
            <p>Would you be open to scheduling a virtual coffee meeting to discuss your experience?  If so, please let me know what date and time work best for you.  If your schedule doesn’t permit us to connect, would you be open to answering a few questions via email?</p>
            <p>I look forward to hearing from you soon.  Thanks in advance!</p>
            <p>Best,
            <br/>
            {props.user === "" ? <span style={warning}> * Name Missing * </span> : props.user}</p>
            </div>
            <div>
                <button onClick={handleCopy}>Click to Copy Message</button>
            </div>
        </div>
    )
}

