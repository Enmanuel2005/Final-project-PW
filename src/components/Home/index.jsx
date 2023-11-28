import React, { useRef } from 'react'
import './home.css'
import { useState, useEffect } from 'react'

const Home = ({ loginSuccess, setLoginSuccess, name, buttonLogoutLogin, setName }) => {

  const tittlePostRef = useRef();
  const bodyPostRef = useRef();

  const [addPost, setAddPost] = useState('none');
  const [posts, setPosts] = useState([]);

  //Verificacion para que solo se pueda agregar post si estas logueado
  const addPostForm = () => {
    if (name === '' && loginSuccess) {
      alert('Necesitas iniciar sesion para poder hacer un nuevo post.')
    }
    else {
      setAddPost('flex')
    }
  }
  //

  const exitPostForm = () => {
    setAddPost('none')
  }

   //Traigo los posts
  const getPost = () => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
  }
  useEffect(() => {
    getPost();
  }, [])
  //


  // Funcion para publicar post
  const publicPost = (e) => {
    e.preventDefault();
    const postData = {
      postName: name,
      tittle: tittlePostRef.current.value,
      bodyPost: bodyPostRef.current.value
    };
    fetch('http://localhost:3000/post', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    console.log(postData)
    tittlePostRef.current.value = ''
    bodyPostRef.current.value = ''
    getPost();
  };
  //


  const buttonLogout = () => {
    setLoginSuccess(false)
    setName('')
  }

  return (
    <>
      <div className='homeContainer'>
        <div className='navBarContainer'>
          <div className='infoContainer'>
            <h2>{name == '' ? 'INVITADO' : name}</h2>
          </div>
          <div className='doPost'>
            <button href="" className='buttonAddPost' onClick={addPostForm}>Hacer un nuevo post</button>
          </div>
          <div className="buttonNavContainer">
            {loginSuccess && buttonLogoutLogin ? (<button onClick={buttonLogout}>Cerrar Sesión</button>) : (<button onClick={() => setLoginSuccess(false)}>Iniciar Sesión</button>)}
          </div>
        </div>
        <div className="tittlePostContainer">
          <h2>Posts</h2>
        </div>
        <div className='postsContainer'>
          {posts.map((post) => (
            <dl key={post.id}>
              <dt className='namePost'>{post.tittle}</dt>
              <br />
              <dt className='tittlePost'>{post.bodyPost}</dt>
              <dd className='bodyPost'>{post.postName}</dd>
            </dl>
          ))}
        </div>
      </div>
      <div className='formAddPost' style={{ 'display': `${addPost}` }}>
        <div className="headerForm">
          <button className='exitForm' onClick={exitPostForm}>X</button>
          <h2 className='tittleForm'>Añadir un nuevo Post</h2>
        </div>
        <form action="" onSubmit={publicPost}>
          <input type="text" placeholder='Titulo del post' ref={tittlePostRef} />
          <textarea name="" id="" cols="30" rows="10" placeholder='Cuerpo del post' ref={bodyPostRef}></textarea>
          <button>Añadir Post</button>
        </form>
      </div>
    </>
  )
}

export default Home
