import React from 'react'

export const Input = () => {

  return (
    <div className='flex justify-center my-20 drop-shadow-xl border-b-green-900 '>
        <div className='p-5 bg-trwhite
         w-8/12 border-b-2 border-b-green-900'>
            <div className='tracking-tr text-green-900 mb-3'>Search Your Favorite Cocktail</div>
            <div><input className='bg-gray-200 w-full' type="text" /></div>
        </div>
    </div>
  )
}
