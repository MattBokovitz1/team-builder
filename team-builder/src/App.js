import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'; 
import Form from "./Form.js";
import FormResults from "./FormResults.js"

const initialFormValues = {
  name: "",
  email: "",
  role: "",

}

function App() {
  
  const [formValues, setFormValues] = useState(initialFormValues)
  
  //Here

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };
  const submitForm = () => {
    let newFriend = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newFriend.username || !newFriend.email || !newFriend.role) return;
}   
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />
       <FormResults/> 
      </header>
    </div>
  );
}
export default App;
