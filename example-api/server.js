const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age':29,
        'birthname':'Sheyaa Bin Abraham-joseph',
        'birthlocation':'London, England',
    },
    'chance the rapper':{
        'age':29,
        'birthname':'Chance',
        'birthlocation':'London, England',
    },
    'dylan':{
        'age':29,
        'birthname':'Dylan',
        'birthlocation':'dylan',
    }

}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
         response.json(rappers[rappersName])
    } else{
        response.json(rappers['dylan'])
    }
    
})



app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`)
})