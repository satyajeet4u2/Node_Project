const express = require('express')
const Task = require('../model/task')

const appTask = express()

// Method  is with Promise

appTask.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
        // console.log('Error ---->', error)
    })
})

appTask.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((error) => {
        res.status(500).send(error)
        // console.log('Error ---->', error)
    })
})

module.exports = appTask


// test