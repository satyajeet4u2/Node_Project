require('../db/mongoose')

const User = require('../model/user')

User.findByIdAndUpdate('5e8c6bd1d1e96911e17b7c46', {name:"TEst"}).then((user) => {
    console.log(user)
    return User.countDocuments({name:"Satyajeet"})
}).then((r) => {
    console.log(r)
}).catch((e) => {
    console.log(e)
})

const userIdUpdateAndCount = async (id,name) => {
    const user = await User.findOneAndUpdate(id,{name})
    const usercount = await User.countDocuments({name})
    return usercount
}


userIdUpdateAndCount('5e8c6bd1d1e96911e17b7c46',"Test").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

