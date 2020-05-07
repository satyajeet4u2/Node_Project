// import { compile } from 'handlebars';

const express = require('express');


const app = express()


app.get('', (req, res) => {
    res.send('Expree Response')
})

app.get('/login', (req, res) => {
    res.send("Response Login")
    // res.console.error(Error);

})

app.get('/about', (req, res) => {
    res.send({
        item_name: 'string',
        item_price: 'number',
        item_description: 'string',
        item_image: 'jpg'


    })
})


// fetch('http://localhost:3000/json?search=satya', (req, res) => {
//     res.Json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         }else{
//             console.log(data.error)  
//         }
//     })
          
// })

// app.get('*', (req, res)=> {
//     res.send('No Route Match')
// })

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.Json().then((data) => {
//         console.log(data)
//         // this.jsonData = data;
//     })
         
// })



    app.listen(3000, () => {
        console.log('Server is up port 3000')
    })

