import React from 'react';

export default function Team(props) {
  const {details} = props;

  if(!details) {
    return <h3>Getting your team info</h3>
  }

  return (
    <div className='team-container'>
      <h3>Name: {details.name}</h3>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
    )
}
