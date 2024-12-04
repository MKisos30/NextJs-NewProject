import { getOneTask } from '@/app/lib/data/task.data';
import { Itask } from '@/app/page';
import React from 'react'

interface IPageEdit {
  params: { id: string }
}

const Page = async ({ params }: IPageEdit) => {
  const {id} = params;
  const task: Itask = await getOneTask(id)

  console.log(task)

  return (
    <div>
      <h1>EDIT TASK</h1>
      <form action="">
        <input type="text" placeholder='title' defaultValue={task.title}/>
        <input type="text" placeholder='description' defaultValue={task.description}/>
        <input type="text" placeholder='adress' defaultValue={task.adress}/>
        <input type="date"  defaultValue={task.ddLine}/>
        <input type="checkbox" defaultChecked={task.done}/>
      </form>
    </div>
  )
}

export default Page