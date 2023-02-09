import React from 'react'

export const Nav = () => {
  return (
   
    <div className='flex px-10 py-5 justify-between border-b-2 border-green-900 shadow-xl'>
        <div>The<b className='text-green-900'>Cocktail</b>DB</div>
        <div className='uppercase flex'>
            <div>About</div>
            <div className='ml-3'>Home</div>
        </div>
    </div>  
  )
}
