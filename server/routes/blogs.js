const express = require('express');
                const router = express.Router();
                const Blog = require('../models/Blog');
                
                router.get('/', (req, res) => {
                    Blog
                        .find()
                        .then(blogs => {
                            res.status(200).json(blogs);
                        });
                });
                
                router.get('/: id', (req, res) => {
                    Blog
                    .findById(req.params.id)
                    .then(blog => { 
                        if(blog) {
                            res.status(200).json(blog)
                        }
                        else{
                            res.status(404).send('error Blog not found')
                        }
                    })
                })
                router.post('/', (req,res) => {
                    const newBlog = new Blog({
                        title: req.body.title,
                        article: req.body.article,
                        published: req.body.published,
                        feature: req.body.feature,
                        author: req.body.author,
                    })
                    newBlog.save((err,blog) => {
                        if(blog){
                            res.status(201).send(blog);
                        }else handleError(err);
                    });
                });
                router.put('/:id', (req, res) => {
                    Blog
                    .findByIdAndUpdate(req.params.id,
                        {
                            title: req.body.title,
                            article: req.body.article,
                            published: req.body.published,
                            feature: req.body.feature,
                            author: req.body.author,
                        })
                    .then(blogs => {
                        res.status(204).json(blogs);
                    });
                })
                router.delete('/:id', (req,res) => {
                    Blog
                    .findByIdAndRemove(req.params.id)
                    .then(blogs => {
                        if(blogs){
                            res.status(200).json(blogs);
                        }else{
                            res.status(500)
                        }
                    })
                })

                module.exports = router;