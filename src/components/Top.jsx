import React from 'react'

const Top = (props) => {
  return (
    <div className='pl-14 py-1 bg-stone-100 flex justify-between '>
        <div>
            <h1 className='font-semibold text-xl text-stone-800'>{props.heading}</h1>
            <h2 className='text-stone-500'>{props.subtitle}</h2>
        </div>

        <div className='flex items-center mr-4 gap-2'>
            <img src="" alt="" className='w-[40px] h-[40px] bg-green-700 rounded-full' />
            <div>
                <h1>user</h1>
            <h1>user@gmail.com</h1>
            </div>
        </div>
    </div>
  )
}

export default Top