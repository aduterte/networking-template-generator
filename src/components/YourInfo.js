import React from "react"

export default function YourInfo(props){
   

    return (
        <div className="your-info">
            <label>Enter Your Name </label><input type="text" value={props.user} onChange={props.func} placeholder="FirstName LastName"/>
        </div>
    )
}