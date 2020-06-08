const mongoose = require('mongoose')





const Task = mongoose.model('Task', {
    Item:{
        type: String
    
    },

    Itemno : {
        type :Number,
       
    }
})


module.exports = Task