const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema= new mongoose.Schema(
    {
        name:{
            type: String
        
        },
    
        age : {
            type :Number,
            validate(value) {
                if (value < 0) {
                    throw new Error('Age Must Be a Positive Number')
                }
            }
        },
        email: {
            type: String,
            unique:true,
            trim:true,
            required:true,
            lowercase:true
        },
        password: {
            type: String,
            require:true,
            minLength:7,
            trim: true
        }
    }
)

userSchema.static.findByCredentials= async (email, password) => {
    const user = await User.findOne({email})
     if(!user){
         throw new Error('unable to login')
     }

     const isMatchCredential = await bcrypt.compare(password, user.password)
     if(!isMatchCredential){
        throw new Error('No email exist')
    }
    return user
}


// Encripted Password
userSchema.pre('save',async function (next) {
   const user = this

if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 8)
}
   next()
})

const User = mongoose.model('User', userSchema)


// const userInstant = new User({
//     name: 'Test Data',
//     age: '26',
//     emaial: 50
// })


// userInstant.save().then(() => {
//     console.log('success', userInstant)
    
// }).catch((error) => {
//     console.log('Error ---->', error)
// })

module.exports = User