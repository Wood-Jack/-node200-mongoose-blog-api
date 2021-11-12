
                const express = require('express');
                const mongoose = require('mongoose');
                const bodyParser = require('body-parser');
                
                const app = express();

               

                mongoose.connect('mongodb://localhost/my-blog');

                mongoose.Promise = Promise;

                
                app.use(bodyParser.json());
                
                app.get('/', (req, res) => {
                    res.status(200).send();
                });
                
                app.use('/api/users', require('./routes/users'));
                module.exports = app;