import React from 'react'

export default function primeryButton(children) {
  return (
    <button className='btn'>
   {
    children.text
   }
    </button>
  )
}
