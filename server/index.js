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

app.get('/api/learn/:id', async (req, res) =>{
    let id = req.params.id;
    const rows = await specificMystery(id);
    res.status(200).send(rows);
})



async function readMysteries(){
    try{
        client.connect();
        const results = await client.query("select * from mysteries")
        return results.rows
    } catch (e){
        return e;
    }
}

async function specificMystery(id){

    const text = 'select * from mysteries where mystery_id = $1'
    const values = [id];
    try{
        const results = await client.query(text, values)
        return results.rows[0]
        
    } catch(e){
        return e.stack
    }
}
const port = process.env.SERVER_PORT || 7331

app.listen( port, () => {
    console.log(`listening on port ${port}`);
})