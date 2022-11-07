import React, { useState } from 'react'
import { useContext } from 'react';
import { MessagesContext } from '../context';
import "../styles/messageHistory.css";

const MessageHistory = () => {
    const context = useContext( MessagesContext );

    const [ selectedUsername, setSelectedUsername ] = useState( '' );


  return (
<section className='container'>  
    <div className='dropdown'>
        {context.getUsernames(selectedUsername).map((username, idx)=>(
            <select className="select" key={idx}>
                <option value={username}>{username}</option>
            </select>
        )
    )}
    </div>

    <div className='table-div'>
        
        {/* Quando il navigatore seleziona uno username
        la tabella si deve popolare con i messaggi di quell'utente,
        quindi il seguente componente deve poter aggiornare la
        variabile di stato 'selectedUsername' */}

        {selectedUsername ? (
            <table>
            <thead>
                <tr>
                    <th>Message History: {selectedUsername}</th>
                </tr>
            </thead>
            <tbody>
                {context.getUserMessages( selectedUsername ).map( ( message, idx ) => (
                    <tr key={idx}>
                        <td>{message}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
        ) : null}
        
    </div>
</section>
  )
}

export default MessageHistory