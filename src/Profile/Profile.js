import React from 'react'

import {Table} from 'react-bootstrap'
import Avatar from 'react-avatar';
function Profile(props) {
    const {users} = props
    return (
        <div className="profile container">
           <Table striped bordered hover className="m-2">
                <thead>
                    <tr>
                    <th> </th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((users,i) =>{
                    let name = `${users.firstName} ${users.lastName}`;
                    return ( 
                    <tr key={i}>
                    <td id={users.firstName}><Avatar name={name} size="40" round={true}  /> </td>
                    <td>{users.firstName} {users.emoji}</td>
                    <td>{users.lastName}</td>
                    <td>{name}@gmail.com</td>
                    </tr>
                    )
                    }
                    )
               
              
                }
                </tbody>    
            </Table>
        </div>
    )
}

export default Profile
