import { useState } from 'react';
import './App.css';
import Register from './components/Register';
import {BiCommand} from "react-icons/bi"
import Login from './components/Login';

function App() {
  const handleBack=()=>{
    setLogin(!login);
    localStorage.removeItem('receivedToken');
  }
  const [login, setLogin]=useState(false);
  const [showReg, setShowReg]=useState(false);
  return (
    <div className="App">
    {login ? <><button className='backBtn' onClick={handleBack}>Back</button><Login/></> : <>{showReg ? <><button className='btn' onClick={()=>setShowReg(!showReg)}><BiCommand className='icn'/></button><Register/></> : <button className='btn' onClick={()=>setShowReg(!showReg)}>Register</button>}<button className='login' onClick={()=>{setLogin(!login)}}>Login</button></>
}
    </div>
  );
}

export default App;
