import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';

function App() {

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [name, setName] = useState('');
  const [buttonLogoutLogin, setButtonLogoutLogin] = useState(null);
  console.log(loginSuccess)
  console.log(name)

  return (
    <>
      {loginSuccess ? <Home buttonLogoutLogin={buttonLogoutLogin} name={name} loginSuccess setLoginSuccess={setLoginSuccess} setName={setName}/> : <Login setLoginSuccess={setLoginSuccess} setName={setName} setButtonLogoutLogin={setButtonLogoutLogin}/>}
    </>
  );
}

export default App;