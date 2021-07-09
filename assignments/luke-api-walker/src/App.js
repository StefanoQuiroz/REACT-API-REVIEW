import React, { createContext, useState } from 'react';
import './App.css';
import Result from './components/Result';
import Menu from './view/Menu';

export const MyContext = createContext();

function App() {
  const [encontrado, setEncontrado] = useState(true);
  const [info, setInfo] = useState({
    title: "",
    paraph: []
  }) 
  return (
    <div className="App">
      <MyContext.Provider value={{info, setInfo, encontrado, setEncontrado}} >
        <Menu/>
        <Result/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
