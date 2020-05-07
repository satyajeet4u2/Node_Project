const express = require('express')
const User = require('../model/user')
const routerUser = express.Router()

// Method with  Try Catch and Router 

routerUser.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(error)
    }
})

routerUser.patch('/users/:id', async (req,res) => {

    const updateKey = Object.keys(req.body)
    const allowToUpdate = ["name","age","email","password"]
    const isValidOperation = updateKey.every((update) => allowToUpdate.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error:"No key avilable for this update"})
    }
    
    try {
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, {new :true, runValidator: true})

        const user = await User.findById(req.params.id)

        updateKey.forEach((update) => user[update]= req.body[update])

        await user.save()

        if(!user) {
            return res.status(404).send("error")
        }
        res.send(user)
    }catch (e) {
        res.status(400).send()
    }
})


routerUser.get('/users', async (req, res) => {

    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send(error)
    }
})

routerUser.get('/users/:id', (req, res) => {
    const _id = req.params.id
    console.log(req.params)

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send("No user found with this Id")
        }
        res.send(user)
    }).catch((error) => {
        res.status(500).send()
        // console.log('Error ---->', error)
    })
})


routerUser.delete('/users/:id', async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if(!user) {
            return res.status(404).send('No user found with this id')
        }
        res.send(user)
    } catch (e) {
       res.status(400).send()
    }
})

routerUser.post('/users/login', async (req,res) =>{
    try {

        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)

    }catch(e) {
        res.status(400).send('Login error')
    }
})


module.exports = routerUser