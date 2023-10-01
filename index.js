const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());

function calculateMul(counter){
    var mul = 1;

    for(let i=1;i<=counter;i++){
        mul *= i;
    }

    return mul;
}

function calculateSum(counter){
    var sum = 0;

    for(let i=1;i<=counter;i++){
        sum += i;
    }

    return sum;
}

function handleFirstRequest(req, res){
    //Using query params:-
    //var counter = req.query.counter;
    
    //Using headers:-
    //var counter = req.headers.counter;
    
    //Using body:-
    var counter = req.body.counter;   

    var calculatedSum = calculateSum(counter);
    var calculatedMul = calculateMul(counter);
    //console.log(calculatedSum);
    
    var answerObject = {
        sum: calculatedSum,
        mul: calculatedMul,
    };

    res.status(200).send(answerObject);
}    

function createUser(req, res){
    res.send('Hello World')
}

app.get('/handleSum', handleFirstRequest);
app.post('/createUser', createUser);

function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);