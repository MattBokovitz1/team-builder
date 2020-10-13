import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'; 
import Form from "./Form.js";
import FormResults from "./FormResults.js"

function App() {
  const [teamMember, setTeamMember] = useState([{

  }])
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember([...teamMember, newMember])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Form addNewmember={addNewMember}/>
        <FormResults teamMember={teamMember}/>
      </header>
    </div>
  );
}

export default App;
