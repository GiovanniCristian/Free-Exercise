import { useState } from 'react';
import './App.css';

import { MessagesContext } from './context';
import MessagesHistory from './components/messagesHistory';
import MessagePage from './components/messagePage';
import Layout from './components/layout';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {

  const [ messages, setMessages ] = useState( [] );

  const contextValue = {
    pushMessage: ( username, message ) => setMessages( ( currentMessages ) => {
      const newMessages = [ ...currentMessages ];

      newMessages.push( { username, message } );

      return newMessages;
    }),
    getUsernames: () => {
      return messages.reduce(
        ( usernames, messageData ) => {
          const usernameFound = usernames.find(
            username => username === messageData.username
          );

          // Aggiorniamo l'array di usernames solo se nello stesso
          // lo username valutato non esiste ancora.
          return ( usernameFound ? usernames : [ ...usernames, messageData.username ] );
        },
        []
      );
    },

    // In questo caso è sufficiente usare 'filter()'.
    getUserMessages: ( username ) => {
      return messages.filter( messageData => messageData.username === username );
    }
  };

  return (
  <>
    <MessagesContext.Provider value={contextValue}>
      <Router>
        <Routes>
          <Route exact path='/' element={ <Layout /> }>
            <Route path='/' element={ <MessagePage /> } />
            <Route path='messageshistory' element={ <MessagesHistory /> } />
          </Route>
          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </Router>
    </MessagesContext.Provider>
  </>
  );
}

export default App;
