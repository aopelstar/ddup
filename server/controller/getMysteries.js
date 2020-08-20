module.exports ={

mysteries: (req, res, nest) =>{
    const dbInstance = req.app.get('db');
    
    dbInstance.mystery()
    .then(response => {
        res.status(200).send(response)
    }).catch( (error) => {
        console.log(error)
        res.status(500).send(error);
    })
}
 
}