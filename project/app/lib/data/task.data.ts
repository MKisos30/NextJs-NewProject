"use server"
import { revalidatePath } from 'next/cache';
import connectToDatabase from '../mongodb';
import Task from '../taskModel';
import { z } from 'zod';
import { redirect } from 'next/navigation';
// import { revalidatePath } from '@/node_modules/next/cache';
// import { redirect } from '@/node_modules/next/navigation';

export const getAllTasks = async () => {
  try {
    await connectToDatabase();
    const allTasks = await Task.find({});

    return allTasks;
  } catch (error) {
    console.log(error);
  }
};

export type State = {
  //continue the state + validation
  errors?: {
    title?: string[];
    done?: string[];
    description?: string[];
    ddLine?: string[];
    adress?: string[];
  };
  message?: string | null;
};

const taskValidation = z.object({
  title: z
    .string({ invalid_type_error: 'חייב לכלול אותיות' })
    .min(10, { message: 'מינימום 10 אותיות' }),
  description: z
    .string({ invalid_type_error: 'חייב לכלול אותיות' })
    .min(5, { message: 'מינימום 5 אותיות' }),
  ddLine: z.string().date(), 
  adress: z.string({ invalid_type_error: 'חייב להכיל אותיות בלבד' }),
});


export const newTask = async (prevState: any, formData: FormData) => {
  console.log(`in new task`)

  console.log(formData.get('title'), formData.get('description'), formData.get('ddLine'), formData.get('adress'))
  try {
    const taskValid = taskValidation.safeParse({
      title: formData.get('title'),
      description: formData.get('description'),
      ddLine: formData.get('ddLine'),
      adress: formData.get('adress'),
    });

    if (!taskValid.success) {
      console.log(`not valid`)
      return {
        errors: taskValid.error.flatten().fieldErrors,
        message: 'שגיאה, המשימה לא נוצרה',
      };
    }

    const { title, description, ddLine, adress } = taskValid.data;
    console.log(title, description, ddLine, adress )

    await connectToDatabase();
    await Task.create({title, description, ddLine, adress})

    console.log(`done`)

    // revalidatePath('/')    // update cache of the page that you want to update 
    // redirect('/')   //redirect to the page that you want
    // const newTask = await new Task({ title, description, ddLine, adress })
    // await newTask.save()

  } catch (error) {
    console.log(error);
  }
};

export const getOneTask = async (id: string) => {
  try {
    await connectToDatabase();
    const oneTask = await Task.findById(id);

    return oneTask;
  } catch (error) {
    console.log(error);
  }
};


export const editTask = async (prevState: any, formData: FormData) => {
  console.log(`in edit task`)

  try {
    const taskValid = taskValidation.safeParse({
      title: formData.get('title'),
      description: formData.get('description'),
      ddLine: formData.get('ddLine'),
      adress: formData.get('adress'),
    });

    if (!taskValid.success) {
      console.log(`not valid`)
      return {
        errors: taskValid.error.flatten().fieldErrors,
        message: 'שגיאה, המשימה לא נוצרה',
      };
    }

    const { title, description, ddLine, adress } = taskValid.data;
    console.log(title, description, ddLine, adress )

    await connectToDatabase();
    // await Task.create({title, description, ddLine, adress})

    //update need to include _id of the task and "done" of the task

    console.log(`done`)

    // revalidatePath('/')    // update cache of the page that you want to update 
    // redirect('/')   //redirect to the page that you want
    // const newTask = await new Task({ title, description, ddLine, adress })
    // await newTask.save()

  } catch (error) {
    console.log(error);
  }
};