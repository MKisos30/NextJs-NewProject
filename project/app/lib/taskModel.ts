import mongoose, { Schema, model } from 'mongoose'

const TaskSchema = new Schema({
    title: {
        type: String,
        require: [true, "Please enter task title"]
    },
    done: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        require: [true, "Please enter task description"]
    },
    ddLine: {
        type: Date,
        default: new Date()
    },
    adress: {
        type: String
    }
})


const Task = mongoose.models.Task || model("Task", TaskSchema)
export default Task

//add data folder