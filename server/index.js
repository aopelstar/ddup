const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const cors = require('cors');
const controller = require('./controller/getMysteries.js')
require('dotenv').config();

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

const client = new Client({
    connectionString: process.env.PG_CONNECT,
    ssl: true
});

app.get('/api/mysteries', async (req,res) =>{
    const rows = await readMysteries();
    res.send(rows)
})

const port = process.env.SERVER_PORT || 7331

app.listen( port, () => {
    console.log(`listening on port ${port}`);
})


async function readMysteries(){
    try{
        client.connect();
        const results = await client.query("select * from mysteries")
        return results.rows
    } catch (e){
        return e;
    }
    client.end();
}