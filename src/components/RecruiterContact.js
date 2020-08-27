import React, { useState } from "react"
import { contactAtom } from "../Atom"
import {useRecoilValue} from "recoil"

export default function RecruiterContact(props){

    const contact = useRecoilValue(contactAtom),
        warning = {color:"red",fontWeight:"bold"},
        [position, setPosition] = useState("")

   
        function handlePosition(e){
            const position = e.target.value
            setPosition(position)
        }
    function handleCopy(){
        console.log("im hit")
        
        let bodyText = document.getElementById("recruiter-text"),
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
        // setCompany("")
        setPosition("")
      
        
    }
    
    return(
        <div className="alumni-message-container">
           
            <h2>Recruiter</h2>
            <br/>
                <label>Enter Position </label><input type="text" value={position} onChange={handlePosition} placeholder="Enter Position"/>
                <br/>
                <button onClick={handleReset}>Reset</button>
            <div id="recruiter-text">
            <p>Hi {contact.firstName === "" ? <span style={warning}> * Name Missing * </span> : contact.firstName},</p>
            <p>My Name is {props.user === "" ? <span style={warning}> * Your Name Missing * </span> : props.user}. I'm a Software Engineer. If you have a second, I would love the chance to discuss how my developer skills and experiences might match the {position === "" ? <span style={warning}> * Position Missing * </span> : position} I’ve applied for. Thanks for connecting and I hope you have a great day! </p>
            </div>
            <div>
                <button onClick={handleCopy}>Click to Copy Message</button>
            </div>
        </div>
    )
}