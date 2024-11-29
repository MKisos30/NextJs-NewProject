// import { getAllTasks } from "./lib/data/task.data";

import { getAllTasks } from "./lib/data/task.data";

interface Itask {
  title: string,
  done: boolean,
  description: string,
  ddLine: string,
  adress: string,
  _id: string,
}

export default async function Home() {
  const data:Array<Itask> = await getAllTasks()
  console.log(data)

  //add link to move to new task page
  
  return (
    <div>    
      <h1>Homepage</h1>
      {/* {data.map((task, i: number) => (
        <section>{task.title}</section>
      ))} */}
    </div>
  );
}
