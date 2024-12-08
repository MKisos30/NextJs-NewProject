import { getAllTasks } from "./lib/data/task.data";
import Link from 'next/link'
import EditCheckBox from "./components/editCheckBox";

export interface Itask {
  title: string,
  done: boolean,
  description: string,
  ddLine: string,
  adress: string,
  _id: object,
  __v: number,
}

export default async function Home() {
  const data: Array<Itask> = await getAllTasks()

  // console.log(data)
  // console.log(data[0]._id.toString())
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/new-task">To New Task Page</Link>
      <div>
        {data.map((task, i: number) => (
          <section key={i}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            {/* <p>{task.ddLine}</p> */}
            <p>{task.adress}</p>
            <EditCheckBox done={task.done} id={task._id.toString()}/>
            <Link href={`/edit-task/${task._id}`}>Edit Task</Link>
          </section>
        ))}
      </div>
    </div>
  );
}
