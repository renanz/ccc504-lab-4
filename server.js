var fetch = require('node-fetch');

exports.getUsers = function (){
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => resolve(json));
    })
};