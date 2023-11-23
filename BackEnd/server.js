const express = require('express');
const { db } = require("./firebase/db");
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
