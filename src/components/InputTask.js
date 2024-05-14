import React from 'react'
import ButtonTask from './ButtonTask'

export default function InputTask() {
  return (
    <section className='inputTask'>
        <input className='inputTask-txt'></input>
        <ButtonTask>Add Task</ButtonTask>
    </section>
  )
}
