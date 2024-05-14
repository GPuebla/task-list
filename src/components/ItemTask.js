import React from 'react'
import ButtonTask from './ButtonTask'

export default function ItemTask({taskText="xxxx"}) {
  return (
    <section className='itemTask'>
        <p>{taskText}</p>
        <ButtonTask>Edit</ButtonTask>
        <ButtonTask>Delete</ButtonTask>
    </section>
  )
}
