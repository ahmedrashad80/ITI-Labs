import mongoose from 'mongoose';

let todosSchema=mongoose.Schema({

    title:{
        type: String,
        required: [true,'title is required'],
        unique: [true,"title must be unique"],
        minLength:3,
        maxLength:16
    },
    status:{
        type: String,
        enum:['todo',"in progress","done"],
        default:'todo'
    },
    time:Date,

    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
       
    }

},{ timestamps:true})

const todosModel=mongoose.model('Todo',todosSchema)

export {todosModel}