const db = require('./conn');


function getTaskById(id) {
    return db.any(`select * from todos where id=${id}`)
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            // error
        });

}

getTaskById(2).then(() => {
    getTaskById(3);
})
getTaskById(1);