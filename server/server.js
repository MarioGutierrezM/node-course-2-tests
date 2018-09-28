const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        { name: 'mario', age: 23 },
        { name: 'paco', age: 23 },
        { name: 'samu', age: 23 },
        { name: 'gera', age: 23 },
    ]);
});

app.listen(3000);

module.exports = {
    app
};