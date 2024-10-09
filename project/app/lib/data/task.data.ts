import connectToDatabase from "../mongodb";
import Task from "../taskModel";

export const getAllTasks = async () => {
    try {
        await connectToDatabase()
        const allTasks = await Task.find({})

        return allTasks;
    } catch (error) {
        console.log(error)
    }
}



