import React from 'react'

export const Button = ({ buttonName, icon }) => {
  return (
    <>
        <button className='border-t-neutral-500 text-cyan-600' onClick={(event) => {console.log(event); event.preventDefault();}}> 
            { buttonName }
        </button>
    </>
  )
}
