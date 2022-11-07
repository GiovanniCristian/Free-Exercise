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
        <select
            value={selectedUsername}
            onChange={( event ) => setSelectedUsername( event.target.value )}
        >
            <option value=''>Select user</option>
            {context.getUsernames().map( ( username ) => (
                // Siccome gli username sono unici, possiamo usarli come 'key'.
                <option key={username} value={username}>{username}</option>
            ))}
        </select>
    </div>

    <div className='table-div'>
        
        {/* Quando il navigatore seleziona uno username
        la tabella si deve popolare con i messaggi di quell'utente,
        quindi il seguente componente deve poter aggiornare la
        variabile di stato 'selectedUsername' */}

        {selectedUsername ? (
            <table className='table'>
            <thead className='thead'>
                <tr className='th'>
                    <th className='th'>{ selectedUsername }</th>
                </tr>
            </thead>
            <tbody>
                {context.getUserMessages( selectedUsername ).map( ( messageData, idx ) => (
                    <tr key={idx}>
                        <td className='td-map'>{messageData.message}</td>
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