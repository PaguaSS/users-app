import React, { useState } from 'react';
import UserForm from './components/Users/UserForm/UserForm';
import './App.css';
import UserList from './components/Users/UserList/UserList';
import Modal from './components/UI/ErrorModal/Modal/Modal';

const App = () => {
  const [users, setUsers] = useState([]);
  const [errorObj, setErrorObj] = useState({showModal: false, msg: ""});

  const addUserEventHandler = userData => {
    setUsers(prevUserList => {
      const newUserList = [
        {
          id: Math.floor(Math.random() * Date.now()),
          username: userData.username,
          age: userData.age 
        },
        ...prevUserList
      ];

      return newUserList;
    });
  };

  const showErrorModalHandler = errorObj => {
    setErrorObj({
      showModal: errorObj.visible ?? false,
      msg: errorObj.msg ?? ""
    });
  };

  return (
    <React.Fragment>
      <main>
        <UserForm onAddUser={addUserEventHandler} onShowErrorModal={showErrorModalHandler}/>
        <UserList data={users}/>
      </main>
      <Modal visible={errorObj.showModal} onShowErrorModal={showErrorModalHandler}>
        <p>{errorObj.msg}</p>
      </Modal>
    </React.Fragment>
  );
};

export default App;