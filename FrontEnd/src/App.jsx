import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Dl from './components/Dl'
import A from './components/A'
import Label from './components/Label'
import Input from './components/Input'
import 'animate.css';

function App() {

  const [doConfesion, setDoConfesion] = useState('addConfesionN');

  const changeClass = (e) => {
    e.preventDefault();
    setDoConfesion(doConfesion === 'addConfesionN' ? 'addConfesionV animate__animated animate__bounceInDown' : 'addConfesionN');
  }

  return (
    <div className="App">
      <div className={`${doConfesion}`}>
        <div className='addConfesion'>
          <div className='formPublicContainer'>
            <form action="" className='publicConfesionForm'>
              <h3>Añadir una confesion publica.</h3>
              <Input placeholder={'Nombre completo:'} />
              <Input placeholder={'algo:'} />
              <Input />
              <Button label={'Añadir confesion'} />
            </form>
          </div>
          <hr />
          <div className='formPrivateContainer'>
            <form action="" className='publicConfesionForm'>
              <h3>Añadir una confesion privada.</h3>
              <Input placeholder={'Nombre completo:'} />
              <Input placeholder={'algo:'} />
              <Input />
              <Button label={'Añadir confesion'} />
            </form>
          </div>
        </div>
      </div>
      <div className="leftMenu">
        <div className="infoContainer">
          <Label label={'Enmanuel Zorrilla Pimentel'} />
          <Label label={'enmanuelzorrilla56@gmail.com'} />
        </div>
        <div className="aLeft">
          <li className='leftList'>
            <A label={'Mi perfil'} />
            <A label={'Hacer una confesion'} onClick={changeClass} />
            <A label={'Confesiones Publicas'} />
            <A label={'Confesiones Privadas'} />
          </li>
        </div>
        <div className="buttonContainer">
          <Button className={'logoutButton'} label={'Cerrar Sesion'} />
        </div>
      </div>
      <div className="confesionsContainer">
        <Dl id={'confesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'confesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'confesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'confesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'confesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'confesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'confesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'confesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'confesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
      </div>
      <div className='yourConfesions'>
        <div className="tittleYourConfesionsContainer">
          <h2 className='tittleYourConfesions'>Tus Confesiones</h2>
        </div>
        <Dl id={'yourConfesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'yourConfesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'yourConfesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'yourConfesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'yourConfesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'yourConfesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'yourConfesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'yourConfesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
        <Dl id={'yourConfesionsList'} tittle={'hola'} info={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.'} />
      </div>
    </div>
  )
}

export default App
