import React, { useState, useEffect } from 'react';
import axios from './axios';
import Form from './Components/Form';
import Team from'./Components/Team';
import './App.css';

const initialFormValues = {
    name: '',
    email: '',
    role: '',
};

export default function App() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(null);

    const updateForm = (inputName, inputValue) => {
        console.log('updated');
        setFormValues({ ...formValues, [inputName]: inputValue });
    };
    //create an object that will create the new team member. Adding the trim prevents trailing whitespace from being added to the users input/

    const submitForm = () => {
        console.log('submitted');
        const newTeamMember = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role,
        };
        //create a control flow statement that prevents submission of empty information.
        if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
            setErrors('All fields must be filled out');
            return;
        }

        axios.post(
            'fakeapi.com',
            newTeamMember.then((res) => {
                console.log(res.data);
                setTeamMembers([res.data, ...teamMembers]);
                setFormValues(initialFormValues);
                setErrors('');
            })
        );
    };

    useEffect(() => {
        axios.get('fakeapi.com').then((res) => setTeamMembers(res.data), []);
    });

    return (
        <div className='App'>
            {errors && <h2 className='errors'>{errors}</h2>}
            <Form values={formValues} update={updateForm} submit={submitForm} />
            {teamMembers.map((member) => {
                return <Team key={member.id} details={member} />;
            })}
        </div>
    );
}
