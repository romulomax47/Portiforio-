const express = require('express');
const rounte = express.Router();
const posts = require('../modal/posts.js')

rounte.get('/all', (req, res) => {
    const getAll = posts.allPost()
    res.json(JSON.stringify(getAll));
});

rounte.post('/new',  (req, res) => {

    const {title, descrition} = req.body;
    posts.newPost(title, descrition)
    res.send('ok')
})

module.exports = rounte;