import {React,children} from 'react'

export default function ButtonTask({children}) {
  return (
    <button className='btnTask'>
        {children}
    </button>
  )
}
