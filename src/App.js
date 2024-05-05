import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import TaskList from './components/TaskList';
import CreateTask from './mod/CreateTask';
import Header from './components/Header';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = ()=>{
    setIsModalOpen(!isModalOpen);
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App md:mx-96 p-4">
          <Header modalControl={toggleModal}/>
          <CreateTask isOpen = {isModalOpen} modalControl={toggleModal}/>
          <TaskList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
