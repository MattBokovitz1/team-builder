import React from 'react';

const Form = props => {

    const { values, update, submit } = props;

    const onChange = (evt) => {
        const{name, value} = evt.target;
        update(name, value)
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }


    return(
        
        <form onSubmit={onSubmit}>
        <div>   
            <label>Name: 
            <input 
                id="name"
                name="name" 
                type="text" 
                value={values.name}
                onChange={onChange}
                placeholder={"Enter Your Name"}/><br/>
            </label>    
            <label>Email: 
            <input 
                id="email"
                name="email" 
                type="email" 
                value={values.email}
                onChange={onChange}
                placeholder={"Enter Your Email"}/><br/>
            </label>    
            <label>Role: 
            <select>
                id="role"
                name="role" 
                value={values.role}
                onChange={onChange}
                <option>---select role---</option> 
                <option>Front-End Web Developer</option>
                <option>Back-End Web Developer</option>
                <option>Full-Stack Web Developer</option>
            </select>
            </label>
            <button type="submit">Submit</button>
        </div>
        </form>
    
    )
};

export default Form;