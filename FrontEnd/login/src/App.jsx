import { useState, useRef } from 'react'
import './App.css'
import 'animate.css'
import Input from './components/Input';
import Button from './components/Button';
import Label from './components/Label';
import db from "/Users/enman/OneDrive/Escritorio/UNIVERSIDAD/CUARTO CUATRIMESTRE/Final-project-PW/BackEnd/firebase/db"

function App() {
  const [register, setRegister] = useState('none');
  const [login, setLogin] = useState('flex');

  const loginInputEmail = useRef();
  const loginInputPassword = useRef();
  const registerInputEmail = useRef();
  const registerInputPassword = useRef();
  const registerInputName = useRef();
  const loginButton = useRef();
  const registerButton = useRef();
  let email;
  let password;

  const registerUser = () => {
    email = registerInputEmail.value;
    password = registerInputPasswordt.value;
    auth.createUserWithEmailAndPassword(email, password);
  }

  const loginUser = () => {
    email = loginInputEmail.value;
    password = loginInputPassword.value;
    auth.createUserWithEmailAndPassword(email, password);
  }

  const logoutUser = () => {
    email = loginInputEmail.value;
    password = loginInputPassword.value;
    auth.createUserWithEmailAndPassword(email, password);
  }

  auth.onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log('logged in');
    }
    else {
      console.log('not logged in')
    }
  });

  const changeLogin = () => {
    setRegister(register === 'none' ? 'flex' : 'none')
    setLogin(login === 'flex' ? 'none' : 'flex')
  }

  return (
    <div className='App'>
      <div className='formLoginContainer animate__animated animate__fadeIn' id='formLoginContaine' style={{ display: `${login}` }}>
        <h3>Iniciar Sesion</h3>
        <form action="">
          <Input type={'text'} placeholder={'Email'} ref={loginInputEmail} />
          <Input type={'passward'} placeholder={'Contraseña'} ref={loginInputPassword} />
          <Button label={'Iniciar Sesion'} ref={loginButton} fun={loginUser}/>
          <div className="labels">
            <Label label={'Aun no estas registrado?'} />
            <Label label={' Crear una cuenta'} className={'linkLabel'} fun={changeLogin} />
          </div>
        </form>
      </div>

      <div className='formRegisterContainer animate__animated animate__fadeIn' style={{ display: `${register}` }}>
        <h3>Registrarse</h3>
        <form action="">
          <Input type={'text'} placeholder={'Nombre Completo'} ref={registerInputName} />
          <Input type={'text'} placeholder={'Email'} ref={registerInputEmail} />
          <Input type={'text'} placeholder={'Contraseña'} ref={registerInputPassword} />
          <Button label={'REGISTRARSE'} ref={registerButton} onClick={registerUser}/>
          <div className="labels">
            <Label label={'Ya tienes una cuenta?'} />
            <Label label={' Iniciar Sesion'} className={'linkLabel'} fun={changeLogin} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
