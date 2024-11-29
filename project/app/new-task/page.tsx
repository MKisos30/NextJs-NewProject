"use client"

import React from 'react';
// import {  newTask, State } from '../lib/data/task.data';
// import { useFormState } from 'react-dom';
import { useActionState } from 'react'
import { newTask } from '../lib/data/task.data';

//add form with all inputs to add new task.
//create action to add new task

const Page = () => {
  const initialState: any = { message: null, errors: {}};
  const [ state, formAction ] = useActionState(newTask, initialState)

  console.log(`state`)
  console.log(state)

  const router = useRouter()

  return (
    <div>
      <h1>ADD NEW TASK</h1>
      <form action={formAction}>
        <input type="text" name="title" placeholder="כותרת למשימה" />
        <input type="text" name="description" placeholder="תיאור המשימה" />
        <input
          type="date"
          name="ddLine"
          placeholder="יש לציין במידה ויש תאריך דד ליין"
        />
        <input type="text" name="adress" placeholder="ניתן לציין כתובת" />
        <button type="submit">יצירת משימה חדשה</button>
      </form>
      <button type="button" onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default Page;
