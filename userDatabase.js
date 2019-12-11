var fs = require('fs');

const userFile = "users.json";

function readDatabase(cb) {
    fs.readFile(userFile, (err, data)=>{
        if(err) {
            cb(`Plik userFile nie istnieje`);
        } else {
            cb(undefined, JSON.parse(data.toString()));
        }
    })
}

function writeDatabase(users) {
    fs.writeFile(userFile, JSON.stringify(users), (err) =>{
        if(err)
            console.log("writeDatabase error: ", err)
    })
}

function addUser(last_name, first_name) {
    readDatabase((err, users) => {
        users.push({first_name: first_name, last_name: last_name});
        console.log("addUser", users);
        writeDatabase(users);
    })
}

function getUsers(cb) {
    readDatabase((err, users) => {
        console.log("getUsers err", err);
        return cb(err,users);
    })
}


exports.addUser = addUser;
exports.getUsers = getUsers;
