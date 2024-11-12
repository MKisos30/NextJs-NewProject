import React from 'react'

//add form with all inputs to add new task.
//create action to add new task

const Page = () => {
  

  return (
    <div>
        <h1>ADD NEW TASK</h1>
        <form action=""> {/* change to {} when you create action function */}
            <input type="text" />
            <input type="text" /> {/* pay attention to the kind of the date */}
        </form>
    </div>
  )
}

export default Page