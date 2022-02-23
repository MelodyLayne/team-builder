import React from 'react';
import './form.css';

export default function Form(props) {
    const { values, update, submit } = props;

    //Here we are creating an event handler to control the user input event
    const onChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
        console.log('submitted')
    };

    return (
        //this is the built out form that uses props from the App.js file to create a new person to add.
        <form className='form' onSubmit={onSubmit}>
            <div className='title'>Let's go on an Adventure!</div>
            <label>
                Team Member Name
                <input
                    name='name'
                    type='text'
                    placeholder='Enter team member name'
                    value={values.name}
                    onChange={onChange}
                />
            </label>
            <label>
                Team Member Email
                <input
                    name='email'
                    type='email'
                    placeholder='Enter an email address'
                    value={values.email}
                    onChange={onChange}
                />
            </label>
            <label>
                Choose a Role
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>-- Select a Role--</option>
                    <option value='Bard'>Bard</option>
                    <option value='Paladin'>Paladin</option>
                    <option value='Sorcerer'>Sorcerer</option>
                    <option value='Sorceress'>Sorceress</option>
                    <option value='Rogue'>Rogue</option>
                </select>
            </label>
            <button type='submit'>Add to your party</button>
        </form>
    );
}
