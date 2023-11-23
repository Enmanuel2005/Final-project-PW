import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="leftMenu">
        <div className="infoContainer">
          <label htmlFor="">Enmanuel Zorrilla Pimentel</label>
          <label htmlFor="">enmanuelzorrilla56@gmail.com</label>
        </div>
        <div className="aLeft">
          <li className='leftList'>
            <a href="">Mi perfil</a>
            <a href="">Hacer una confesion</a>
            <a href="">Confesiones Publicas</a>
            <a href="">Confesiones Privadas</a>
          </li>
        </div>
        <div className="buttonContainer">
          <button className='logoutButton'>Cerrar Sesion</button>
        </div>
      </div>
      <div className="confesionsContainer">
        <dl id='confesionsList'>
          <dt>Adios</dt>
          <dd>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.</dd>

          <dt>Hola</dt>
          <dd>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium itaque temporibus ad libero in? Nostrum aut modi odit eveniet saepe facere, nulla architecto asperiores fugiat officiis aspernatur alias cumque quaerat?</dd>

          <dt>GoodBye</dt>
          <dd>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum consectetur hic nemo illo nihil delectus voluptatum atque similique unde facere mollitia sit eos totam nisi, sapiente, accusantium quo excepturi aperiam.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>
        </dl>
      </div>
      <div className='yourConfesions'>
        <div className="tittleYourConfesionsContainer">
          <h2 className='tittleYourConfesions'>Tus Confesiones</h2>
        </div>
        <dl id='yourConfesionsList'>
          <dt>Adios</dt>
          <dd>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus praesentium beatae nobis, doloremque neque maxime quasi aperiam aliquid unde obcaecati nostrum, perspiciatis harum necessitatibus blanditiis inventore rerum. Ut, omnis ullam.</dd>

          <dt>Hola</dt>
          <dd>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium itaque temporibus ad libero in? Nostrum aut modi odit eveniet saepe facere, nulla architecto asperiores fugiat officiis aspernatur alias cumque quaerat?</dd>

          <dt>GoodBye</dt>
          <dd>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum consectetur hic nemo illo nihil delectus voluptatum atque similique unde facere mollitia sit eos totam nisi, sapiente, accusantium quo excepturi aperiam.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>

          <dt>Hello</dt>
          <dd>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum dolorum, non rerum vitae voluptas ullam. Quod doloribus architecto aperiam voluptatibus reiciendis? Provident officiis quae qui harum quas ut alias.</dd>
        </dl>
      </div>
    </div>
  )
}

export default App
