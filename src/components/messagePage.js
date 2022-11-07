import React from 'react';
import {useState , useContext} from 'react';
import { MessagesContext } from '../context';
import "../styles/messagePage.css";

function MessagePage() {

    const context = useContext( MessagesContext );
    
    const [ username, setUsername ] = useState( "" );
    const [ message, setMessage ] = useState( "" );
 
    // Per il momento questo mettiamolo da parte!
    //const [email, setEmail] = useState("");
  

    const onSubmitHandler = ( event ) => {
      // Necessario per evitare il refresh della pagina.
      event.preventDefault();

      context.pushMessage( username, message );

      // Ricorda di resettare i campi di input dopo il submit:
      setUsername( '' );
      setMessage( '' );
    };

    // Questo solo a scopo esemplificativo.
    console.log( context.getUsernames() );
  
    return (
    <>
      <form
        // Aggiungiamo l'evento onSubmit che va a sostituire
        // l' onClick del pulsante – in generale è preferibile.
        onSubmit={onSubmitHandler}
        className="form"
      >
        <h1 className='h1'>Your Message</h1>
  
        <label className='label'>
          Name:
          <input
            className='input'
            name="name"
            type="name"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required />
        </label>

        {/* Per il momento questo mettiamolo da parte!
        <label className='label'>
          Email:
          <input
            className='input'
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required />
        </label> */}
  
        <label className='label'>
          Your Message:
          <textarea
            // Questo campo è 'required'
            className='textarea'
            required
            name='message'
            value={message}
            onChange={e => setMessage( e.target.value )}
          />
        </label>

        <button className="btn" type='submit'>Send!</button>
      </form>
    </>
    );
  }

  export default MessagePage;