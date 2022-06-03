//CREATING AN API
//so this server will only respond with json, not css or javascript. Because instead of building an app, we are building an API for anyone to access and do whatever they want with
//it will however serve up an html file, but simply for documentation so that you can know how to use the API

//asign express into a variable in order to use it
const express = require('express')
// instead of constantly invoking express and calling its methods, create variable app in order for it to use the methods that come with express
const app = express()
//require cors module (in order to run the api locally)
const cors = require('cors')
//just assigning port 8000 or our localhost to a variable
const PORT = 8000

//our server can handle cors request (localhost)
app.use(cors())

//create json objects
const siblings = {
    'selim': {
        'age': 25,
        'fullName': 'selim yosef',
        'location': 'baltimore'
    },
    'aron': {
        'age': 24,
        'fullName': 'aaron',
        'location': 'new york'
    },
    'avraham': {
        'age': 23,
        'fullName': 'avraham',
        'location': 'new york'
    },
    'shmueli': {
        'age': 22,
        'fullName': 'shmuel',
        'location': 'baltimore'
    },
    'binyomin': {
        'age': 20,
        'fullName': 'binyomin leib',
        'location': 'israel'
    },
    'sarah': {
        'age': 18,
        'fullName': 'sarah henya',
        'location': 'israel'
    },
    'rivka': {
        'age': 16,
        'fullName': 'rivka',
        'location': 'detroit'
    },
    'nechama': {
        'age': 12,
        'fullName': 'nechama reizel',
        'location': 'detroit'
    },
    'yitz': {
        'age': 10,
        'fullName': 'yitschak levi',
        'location': 'detroit'
    },
    'moshe': {
        'age': 7,
        'fullName': 'moshe chaim',
        'location': 'detroit'
    },
    'dovid': {
        'age': 6,
        'fullName': 'dovid meir',
        'location': 'detroit'
    },
}

//First you need set up your server so that it can listen for requests and respond to them:

//respond to a get request
//(the parameter '/' is the route of the url. Once the server listens for a url request, and that url request starts with a '/')
//(the parameters 'req' and 'res' are going to handle the request and response)
//inside this method, respond to url '/' by sending an index.html file
//(since the server does not know where to get this file from, __dirname tells it to look for the file in its own directory)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//respond to a get request
//(this time '/api' will be the route of the request. when the serve listens for a request and sees this route, it will respond)
//add a parameter to the route name beginning with ':'
//when request comes in, if there is anything after the '/', then grab it with req.params.<query parameter> and assign it to variable sibName
//respond to this request with json
app.get('/api/:name', (req, res) => {
    const sibName = req.params.name.toLowerCase()
    if(siblings[sibName]){
        res.json(siblings[sibName])
    }
})



//respond to a get request of '/api' with all of the siblings
app.get('/api', (req, res) => {
    res.json(siblings)
})

//now set up the server so that it can listen for requests
//we are telling it to listen for a request on the environment variable or our localhost:8000
//when the server starts to listen for requests, console log that the server is running
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is now running on port ${PORT}`)
})

