const express = require('express');
const app = express();
const port = 5000;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



app.get('/', async (req, res) => {
    MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = db.db("Student");

        const result = await dbo.collection("studentmarks").find().toArray();
       
        console.log(result);
        res.json(result);
        db.close();
        
    });

});
app.listen(port, () => {
    console.log("Server Running at Port :- " + port);
});
