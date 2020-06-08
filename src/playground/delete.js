require('../db/mongoose')

const User = require('../model/user')




const deleteUser = async(id) => {
    const user = await User.findByIdAndDelete(id)
    const deleteCount = await User.countDocuments({completed:false})
    return deleteCount 
}

deleteUser('5e8c91dfe321c6309c73004f').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})