import React, { useState } from 'react';
import './login.css';
import { useRef } from 'react';
import 'animate.css';
import { useNavigate } from 'react-router-dom';


const Login = ({ loginSuccess, setLoginSuccess, setName, setButtonLogoutLogin }) => {
    
    //Declaraciones
    const loginInputUser = useRef();
    const loginInputPassword = useRef();

    const registerInputPassword = useRef();
    const registerInputName = useRef();
    const registerInputUser = useRef();
    const registerInputLastName = useRef();

    const containerForms = useRef();

    const [register, setRegister] = useState('none');
    const [login, setLogin] = useState('flex');
    const [loginError, setLoginError] = useState(null);
    //


    //Funcion para poder registrarse en la pagina con algunas verificaciones
    const handleRegister = (e) => {
        if (registerInputUser.current.value === '' || registerInputPassword.current.value === '' || registerInputName.current.value === '' || registerInputLastName.current.value === '') {
            e.preventDefault();
            alert('Favor llenar todos los campos');
        } else {
            e.preventDefault();
            const userData = {
                user: registerInputUser.current.value,
                password: registerInputPassword.current.value,
                name: registerInputName.current.value,
                lastName: registerInputLastName.current.value
            };
            fetch('http://localhost:3000/register', {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(response => {
                    if (response.ok) {
                        registerInputUser.current.value = ''
                        registerInputPassword.current.value = ''
                        registerInputName.current.value = ''
                        registerInputLastName.current.value = ''
                        alert('Usuario registrado satisfactoriamente');
                        window.location.reload();
                    }
                    else {
                        alert('El usuario ya existe')
                    }
                    return response.json();
                })
        }
    };
    //

    //Funcion para poder loguearse con una cuenta ya creada, con algunas verificaciones
    const handleLogin = (e) => {
        e.preventDefault();
        const userData = {
            user: loginInputUser.current.value,
            password: loginInputPassword.current.value,
        };
        fetch('http://localhost:3000/login', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setLoginSuccess(true);
                setLoginError(null);
                setButtonLogoutLogin(true)
                setName(loginInputUser.current.value)
            })
            .catch(error => {
                console.error('Error during fetch operation:', error);
                setLoginSuccess(false);
                setLoginError(error.message || 'Hubo un problema durante el inicio de sesión.');
            });
    };
    //

    //Funcion para los formularios de login y register dinamicos
    const changeLogin = () => {
        setRegister(register === 'none' ? 'flex' : 'none');
        setLogin(login === 'flex' ? 'none' : 'flex');
        setLoginSuccess(false);
        setLoginError(null);
    };
    //

    //Funcion para poder entrar a la pagina sin necesidad de loguearse
    const enterWithOutAc = (e) => {
        e.preventDefault();
        setLoginSuccess(true)
        setButtonLogoutLogin(false)
    }
    //

    return (
        <div className='formsContainer' ref={containerForms}>
            <div className='formLoginContainer animate__animated animate__fadeIn' id='formLoginContaine' style={{ display: `${login}` }}>
                <h3>Iniciar Sesion</h3>
                <form action="" onSubmit={handleLogin}>
                    <input type="text" placeholder='Usuario' ref={loginInputUser} />
                    <input type="password" placeholder='Contraseña' ref={loginInputPassword} />
                    <button>INICIAR SESION</button>
                    <div className="labels">
                        <label htmlFor="">Aun no estas registrado?</label>
                        <label htmlFor="" className='linkLabel' onClick={changeLogin}> Crear una cuenta</label>
                    </div>
                    <a href="" className='linkLabel' onClick={enterWithOutAc}>Ingresar sin cuenta</a>
                </form>
                {loginSuccess && <p>Login exitoso.</p>}
                {loginError && <p>Credenciales incorrectas</p>}
            </div>

            <div className='formRegisterContainer animate__animated animate__fadeIn' style={{ display: `${register}` }}>
                <h3>Registrarse</h3>
                <form action="" onSubmit={handleRegister}>
                    <input type="text" placeholder='Usuario' ref={registerInputUser} />
                    <input type="text" placeholder='Nombre' ref={registerInputName} />
                    <input type="text" placeholder='Apellido' ref={registerInputLastName} />
                    <input type="password" placeholder='Contraseña' ref={registerInputPassword} />
                    <button>REGISTRARSE</button>
                    <div className="labels">
                        <label htmlFor="">Ya tienes una cuenta?</label>
                        <label htmlFor="" className='linkLabel' onClick={changeLogin}> Iniciar Sesion</label>
                    </div>
                    <a href="" className='linkLabel' onClick={enterWithOutAc}>Ingresar sin cuenta</a>
                </form>
            </div>
        </div>
    );
};

export default Login;
