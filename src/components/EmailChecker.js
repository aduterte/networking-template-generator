import React, { useState } from "react"
import {contactAtom} from "../Atom"
import {useRecoilState} from "recoil"

export default function EmailChecker(){

    const [contact, setContact] = useRecoilState(contactAtom),
        [domain, setDomain] = useState("")

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

    return(
        <div>
            <h2>Contact Info</h2>
            <div className="contact-info-container">
                <div>
                    Email Finder
                </div>
                <div>
                    <input type="text" value={contact.firstName} onChange={handleFirstName} placeholder="First Name"/>
                    <input type="text" value={contact.lastName} onChange={handleLastName} placeholder="Last Name"/>
                    @
                    <input type="text" value={domain} onChange={handleDomain} placeholder="domain.com"/>
                    <button>Find email</button>
                </div>
                <div>
                    Enter Company Name<input type="text" value={contact.company} onChange={handleCompany} placeholder="Enter Company Name"/>
                </div>
            </div>
            
            
        </div>
    )
}