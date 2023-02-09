import React from 'react'

export const Card = ({ img, type, nom, dark }) => {
 
    let non = true
    non === true ? dark = "bg-black text-white" : dark = "bg-white text-black"
    return (


        <div className={`shadow-xl mx-2 mb-10 w-60 dark:bg-black dark:text-white ${dark} `}>

            <div ><img src={img} width="100%" alt="" /></div>
            <div className='text-2xl font-bold tracking-tr pl-3 mt-5'>{type}</div>
            <div className='tracking-tr pt-1 pl-3'>{nom}</div>
            <div className='text-gray-300 pl-3 pt-1 text-xs'>Alcolic</div>
            <div className='pl-3 pb-3 pt-1'><button className='p-2 bg-green-900 text-white  uppercase'>D e t a i l s</button></div>
        </div>

    )
}


export default Card