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

  return (
    <div>    
      <h1>Homepage</h1>
      {/* {data.map((task, i: number) => (
        <section>{task.title}</section>
      ))} */}
    </div>
  );
}
