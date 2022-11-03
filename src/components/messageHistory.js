import React from 'react'
import { useContext } from 'react';
import {NamesContext} from 'react';

const MessageHistory = () => {

    const context = useContext( NamesContext );

  return (
<div className='table-div'>
    <table>
        <thead>
            <tr>
            <th>Message History</th>
            </tr>
        </thead>
        <tbody>
            {context.users.map( ( user, idx ) => (
            <tr key={idx}>
                <td>{user}</td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

  )
}

export default MessageHistory