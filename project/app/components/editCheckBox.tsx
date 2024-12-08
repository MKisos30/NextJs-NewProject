'use client'

import React from 'react'
import { clickDoneEdit } from '../lib/data/edit.checkbox'

const EditCheckBox = ({done, id} : {done: boolean, id: string}) => {
  return (
    // {/* add line on the task = done */}
    <input onClick={() => clickDoneEdit(done, id)} type="checkbox" defaultChecked={done} /> 
  )
}

export default EditCheckBox