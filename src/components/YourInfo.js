import React, {useState} from "react"

export default function YourInfo(props){
    const [name, setName] = useState("")

    function handleName(e){
        const name = e.target.value
        setName(name)
    }

    return (
        <div>
            <label>Enter Your Name </label><input type="text" value={props.user} onChange={props.func} placeholder="FirstName LastName"/>
        </div>
    )
}