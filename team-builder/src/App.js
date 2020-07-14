import React, { useState } from 'react';
import Form from './components/Form';
import TeamForm from './components/TeamForm';
import NavBar from "./components/NavBar"


function App() {
  const [team, setTeam] = useState([
    {
      id: '1',
      name: 'SpongeBob',
      email: 'bob123@email.com',
      role: 'FryCook',
    }
  ]);

    const addNewTeam = teamMember => {
      const newTeamMember = {
        id: Date.now(),
        name: teamMember.name,
        email: teamMember.email,
        role: teamMember.role
      };
        setTeam([...team, newTeamMember]);
    }

  return (
    <div className="App">
        <NavBar />
      <h1>Team Builder</h1>
      <Form addNewTeam={addNewTeam} />
      <TeamForm team={team} />
      
   
  
    
    </div>
  );
}

export default App;