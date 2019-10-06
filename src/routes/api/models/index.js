import mongoose from 'mongoose'
const mongooseSchema = mongoose.Schema

const TodoSchema = mongooseSchema({
    title: String,
    isCompleted: Boolean
})

export default mongoose.model('Todo', TodoSchema)
