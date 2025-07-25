import React from 'react'

const Top = (props) => {
  return (
    <main>
      <div className='pl-8 py-1 bg-stone-100 md:flex md:justify-between h-[60px]'>
        <div className='hidden md:block'>
            <h1 className='font-semibold text-xl text-stone-800'>{props.heading}</h1>
            <h2 className='text-stone-500'>{props.subtitle}</h2>
        </div>

        <div className='flex items-end mr-4 gap-2 absolute right-[20px] '>
            <img src="" alt="" className='w-[40px] h-[40px] bg-green-700 rounded-full object-cover' />
            <div>
                <h1>user</h1>
            <h1>user@gmail.com</h1>
            </div>
        </div>
    </div>
    </main>
  )
}

export default Top