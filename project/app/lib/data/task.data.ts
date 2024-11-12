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

export type State = { //continue the state + validation
    errors?: {

    }
    message?: string | null;
}

export const newTask = async (prevState: State, formData: FormData) => {
    try {
        

    } catch (error) {
        console.log(error)
    }
}



