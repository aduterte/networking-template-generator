import React, { useState } from "react"
import {contactAtom} from "../Atom"
import {useRecoilState} from "recoil"

export default function EmailChecker(){

    const [contact, setContact] = useRecoilState(contactAtom),
        [domain, setDomain] = useState(""),
        [emailStatus, setEmailStatus] = useState(false),
        [search, setSearch] = useState(false)

    const handleFirstName = (e) => {
        const firstName = e.target.value
        setContact({...contact, firstName: firstName})
        console.log(contact)
    }

    const handleLastName = (e) => {
        const lastName = e.target.value
        setContact({...contact, lastName: lastName})
        console.log(contact)
    }

    const handleCompany = (e) => {
        const company = e.target.value
        setContact({...contact, company: company})
    }

    const handleDomain = (e) => {
        const domain = e.target.value
        setDomain(domain)
    }

    const handleEmail = (e) => {
        const email = e.target.value
        setContact({...contact, email: email})
    }

    const handleFindEmail = () =>{
        setSearch(true)
        const name = `${contact.firstName.toLowerCase()}${contact.lastName.toLowerCase()}`
        // debugger
        fetch(`https://verimail.p.rapidapi.com/v3/verify?email=${name}@${domain}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "verimail.p.rapidapi.com",
                "x-rapidapi-key": "44574ae854mshd988c9424075896p1df504jsn70eef846d546"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.deliverable === true){
                setContact({...contact, email: data.email})
                setEmailStatus(true)
                console.log(contact.email)
                // debugger
            } else {
                debugger
                emailFLastname()
            }
        })
        .catch(err => {
            console.log(err);
        })

    }

    const emailFLastname = () => {
        const first = contact.firstName.charAt(0),
            last = contact.lastName,
            name = `${first.toLowerCase()}${last.toLowerCase()}`
        debugger
        fetch(`https://verimail.p.rapidapi.com/v3/verify?email=${name}@${domain}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "verimail.p.rapidapi.com",
                "x-rapidapi-key": "44574ae854mshd988c9424075896p1df504jsn70eef846d546"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.deliverable === true){
                setContact({...contact, email: data.email})
                setEmailStatus(true)
                console.log(contact.email)
                
            } else {
                emailFirst()
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    const emailFirst = () => {
        const name = contact.firstName.toLowerCase()

        fetch(`https://verimail.p.rapidapi.com/v3/verify?email=${name}@${domain}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "verimail.p.rapidapi.com",
                "x-rapidapi-key": "44574ae854mshd988c9424075896p1df504jsn70eef846d546"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.deliverable === true){
                setContact({...contact, email: data.email})
                setEmailStatus(true)
                console.log(contact.email)
                
            } else {
                console.log("not found")
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    

    function renderEmail(){
        if (search === true) {
            if (emailStatus === true) {
                return <div>{contact.email}</div>
            } else {
                return <div>"Email Not Found"</div>
            }
        }
    }


    return(
        <div>
            <h2>Contact Info</h2>
            <div className="contact-info-container">
                <div style={{backgroundColor: "lightblue"}}>
                    Email Finder (BETA TESTING)
                </div>
                <div style={{backgroundColor: "lightblue"}}>
                    <input type="text" value={contact.firstName} onChange={handleFirstName} placeholder="First Name"/>
                    <input type="text" value={contact.lastName} onChange={handleLastName} placeholder="Last Name"/>
                    @
                    <input type="text" value={domain} onChange={handleDomain} placeholder="domain.com"/>
                    <button onClick={handleFindEmail}>Find email</button>
                    <br/>
                </div>
                {renderEmail()}
                <div>
                    Please use <a href="https://cultivatedculture.com/mailscoop/" rel="noopener noreferrer" target="_blank" >Mail Scoop</a> to find emails for now
                    <br/>
                    <label>Enter Email from Mailscoop </label><input type="text" onChange={handleEmail}value={contact.email} placeholder="Contact email"/>
                </div>
                <div>
                    Enter Company Name<input type="text" value={contact.company} onChange={handleCompany} placeholder="Enter Company Name"/>
                </div>
            </div>
            
            
        </div>
    )
}