import React from 'react';
import {useState , useContext} from 'react';
import {NamesContext} from 'react';

function MessagePage() {

    const context = useContext( NamesContext );
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
  
    
    let usersAdd = context.pushNames( user );
  
    return (
    <>
      <form>
        <h1>Your Message</h1>
  
        <label>
          Name:
          <input
            name="name"
            type="name"
            value={user}
            onChange={e => setUser(e.target.value)}
            required />
        </label>

        <label>
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required />
        </label>
  
        <label>
          Your Message:
          <input
            name="message"
            type="text"
          />
        </label>
  
        <button type='submit' onClick={usersAdd}>Send!</button>
      </form>
    </>
    );
  }

  export default MessagePage;