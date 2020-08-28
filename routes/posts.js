const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
console.log(Users);

//GET posts from the Database:
router.get('/', async (req, res) => {
    try {
        const posts = await Users.find();
        res.json(posts);
        console.log('Got the files!');
    } catch (err) {
        res.json({ message: err });
    }
});

//GET posts from Database by ID:
router.get('/:postId', async (req, res) => {
    try {
        const posts = await Users.findById(
            req.params.postId
        );
        res.json(posts);
        console.log('Got the file!');
    } catch (err) {
        res.json({ message: err });
    }
});

//SUBMIT posts to the Database:
router.post('/', async (req, res) => {

    const post = new Users({
        name: req.body.user.name,
        message: req.body.user.message
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
        console.log('Posted it!');
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE post by ID:
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Users.deleteOne({
            _id: req.params.postId
        });
        res.json(removedPost);
        console.log('File deleted!');
    } catch (err) {
        res.json({ message: err });
    }
});

//UPDATE specific post by ID:
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Users.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email
                }
            }
        );
        res.json(updatedPost);
        console.log('Updated file!');
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;