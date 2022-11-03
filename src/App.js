import './App.css';
import MessageHistory from './components/messageHistory';
import MessagePage from './components/messagePage';
import { useState } from 'react';
import { NamesContext } from './context';
import DropdownList from './components/dropdownList';


function App() {

  const [ users, setUsers ] = useState( "" );

  const nameContext = {
    pushNames: ( user ) => setUsers( users => {
      let newName = [ ...users ];

      newName.push( user );

      return newName;
    }),
      getDropNames: () => users[users.length - 1],
      users
  };


  return (
  <>
    <NamesContext.Provider value={nameContext}>
      <section>
          <MessagePage />
          <MessageHistory />
      </section>
    </NamesContext.Provider>

    <div>
      <DropdownList />
    </div>
  </>
  );
}

export default App;
