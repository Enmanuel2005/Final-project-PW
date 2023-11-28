const express = require('express');
const { auth, db } = require("./firebase/firebase-config.js");
const { v4: uuidv4 } = require('uuid');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const port = process.env.PORT || 3000;

const userTable = db.ref('users')
const postsTable = db.ref('posts')


//Funcion para poder crear un nuevo usuario (BackEnd)
const createUser = async (name, lastName, user, password) => {
    const userId = uuidv4()
    const userRef = userTable.child(userId);
    const newUser = {
        name,
        lastName,
        user,
        password
    }
    await userRef.set(newUser)
}
//

//Funcion para poder crear un nuevo post (BackEnd)
const createPost = async (tittle, bodyPost, postName) => {
    const postId = uuidv4()
    const postRef = postsTable.child(postId)
    const newPost = {
        postName: postName,
        tittle: tittle,
        bodyPost: bodyPost
    }
    await postRef.set(newPost)
}
//

// Funcion para poder logearse con sus respectivas verificaciones (BackEnd)
const loginUser = async (userName, password) => {
    let success = false;
    const snapshot = await userTable.get();
    snapshot.forEach(user => {
        const userData = user.val();
        if (userData.user === userName && userData.password === password) {
            success = true
            return success
        }
        console.log(user.val())
    })
    return success
}
//


//Routing post para usar el login (BackEnd)
app.post("/login", async (req, res) => {
    const result = await loginUser(req.body.user, req.body.password);
    if (result) {
        res.status(200).json({ result })
    }
    else {
        res.status(401).json({ result })
    }
});
//

//Routing post para poder registrarse y mandar las credenciales a la base de datos (BackEnd)
app.post("/register", async (req, res) => {
    try {
        const snapshot = await userTable.get();
        let userExists = false;

        snapshot.forEach(user => {
            const userData = user.val();
            if (userData.user === req.body.user) {
                console.log('Este usuario ya existe');
                userExists = true;
                res.status(401).json({ userData })
            }
        });

        if (!userExists) {
            await createUser(req.body.name, req.body.lastName, req.body.user, req.body.password);
            console.log(req.body);
            res.json({ message: 'Usuario registrado exitosamente.' });
        }
    } catch (error) {
        console.error('Error durante la operación de registro:', error);
        res.status(500).json({ error: 'Hubo un problema durante el registro.' });
    }
});
//

//Routing post para poder agregar un nuevo post (BackEnd)
app.post("/post", async (req, res) => {
    await createPost(req.body.postName, req.body.tittle, req.body.bodyPost)
    const snapshot = await postsTable.get()
    snapshot.forEach(post => {
        console.log(post.val())
    })
})
//


//Routing get para obtener los post actuales que hay en la base de datos (BackEnd)
app.get("/posts", async (req, res) => {
    const snapshot = await postsTable.get()
    const posts = []
    snapshot.forEach(post => {
        posts.push(post.val())
    })
    res.json(posts)
})
//

//Listen que nos dice en que puerto se esta corriendo el server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//