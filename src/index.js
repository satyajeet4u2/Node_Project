const express = require('express')
require('./db/mongoose')
// const User = require('./model/user')
// const Task = require('./model/task')
const userRouter = require('./Router/userRouter')
const taskRouter = require('./Router/taskRoute')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up at port', +port);
})


const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'satya1234'
    const bcryptPassword = await bcrypt.hash(password,8)
    const isMatch = await bcrypt.compare('satya1234', bcryptPassword)

    console.log(isMatch)
    console.log(password)
    console.log(bcryptPassword)
    
}



myFunction()


// Start with video no 99