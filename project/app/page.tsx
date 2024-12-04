import { getAllTasks } from "./lib/data/task.data";
import Link from 'next/link'

export interface Itask {
  title: string,
  done: boolean,
  description: string,
  ddLine: string,
  adress: string,
  _id: unknown,
  __v: number,
}

export default async function Home() {
  const data: Array<Itask> = await getAllTasks()

  console.log(data)
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
            <input type="checkbox" defaultChecked={task.done} /> {/* Create function that will change the status of checkbox to done in db */}
            <Link href={`/edit-task/${task._id}`}>Edit Task</Link>
          </section>
        ))}
      </div>
    </div>
  );
}
