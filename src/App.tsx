import React from 'react';
import LoadData from './view/components/async/LoadData';
import DataStore from './business/network/DataStore';
import ContactList from './view/ContactList';
import './App.scss';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
      <LoadData promise={DataStore.getContacts()}>
        {contacts => (
          <ContactList contacts={contacts}/>
        )}
      </LoadData>
    </div>
  )
}
export default App;
