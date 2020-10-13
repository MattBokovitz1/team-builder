import React, { useState } from 'react';

const Form = props => {

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
     })

    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value})

    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: '', email: '', role: ''})
    }

    return(
        <div>
        <form onSubmit={submitForm}>
            <label>Name: </label>
            <input 
                id="name"
                name="name" 
                type="text" 
                value={member.name}
                onChange={handleChanges}
                placeholder={"Enter Your Name"}/><br/>
            <label>Email: </label>
            <input 
                id="email"
                name="email" 
                type="email" 
                value={member.email}
                onChange={handleChanges}
                placeholder={"Enter Your Email"}/><br/>
            <label>Role: </label>
            <select>
                id="role"
                name="role" 
                value={member.role}
                onChange={handleChanges}
                <option>---select role---</option> 
                <option>Front-End Web Developer</option>
                <option>Back-End Web Developer</option>
                <option>Full-Stack Web Developer</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
};

export default Form;