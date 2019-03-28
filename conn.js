const pgp = require('pg-promise')();
const options = {
    host: 'localhost',
    database: 'todo-app'
};

const db = pgp(options);

db.any('select * from users where id=1')
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        // error
    });