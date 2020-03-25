const { Client } = require('pg');

const client = new Client({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    ssl: true
});


module.exports ={
    getMysteries: (req, res) => {

        client.connect().then(() => console.log("hell yeah, connect"))
        .then( () => client.query( "select * from mysteries" ))
        .then( results => res.status(200).send(results.row))
        .then( results => console.log(results))
        .catch(e => console.log(e)).finally(() => client.end())
    }
}