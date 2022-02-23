import {v4 as uuid } from 'uuid';

const initialTeamList = [
  {
    id: uuid(),
    name: 'Bilbo',
    email: 'bible@theshire.com',
    role: 'Rogue'
  }
]


export default {
  get() {
    return Promise.resolve({status: 200, success: true, data:initialTeamList})
  },
  post(url, {name, email, role}) {
    const newTeamMemember = {id: uuid(), name, email, role}
    return Promise.resolve({status: 200, success: true, data: newTeamMemember})
  }
}
