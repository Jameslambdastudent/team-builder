import React, { useState } from 'react';

const Form = props => {
    const [teams, setTeams] = useState({ name: "", email: "", role: ""});

    const handleUpdates = event => {
        setTeams({...teams, [event.target.name]: event.target.value});
    };

    const submitTeam = event => {
        event.preventDefault();
        props.addNewTeam(teams);
        setTeams({ name: "", email: "", role: ""});        
    };

    return (
        <form onSubmit={submitTeam}>
            <label htmlFor="name">Name</label>
            <input
                name="name"
                type="text"
                id="name"
                onChange={handleUpdates}
                value={teams.name}
            />
            <label htmlFor="email">Email</label>
            <input
                name="email"
                type="text"
                id="email"
                onChange={handleUpdates}
                value={teams.email}
            />
            <label htmlFor="role">Role</label>
            <input
                name="role"
                type="text"
                id="role"
                onChange={handleUpdates}
                value={teams.role}
            />
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right"></i>
  </button>
        </form>
    );
};

export default Form; 