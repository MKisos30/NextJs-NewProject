'use server';

import connectToDatabase from "../mongodb";
import Task from "../taskModel";

export const clickDoneEdit = async (done: boolean, id: string) => {
  console.log(id);
  console.log(done);

  await connectToDatabase();
  const doneNew = await Task.findByIdAndUpdate(id, {done: !done})
  console.log(doneNew)

  return !done
};
