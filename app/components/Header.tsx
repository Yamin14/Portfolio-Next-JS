
import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='h-screen bg-green-900 flex flex-col justify-between'>

      <div className='flex justify-between p-2 bg-white fixed top-0 w-screen border-b-2 border-green-900'>
        <Logo icon='header' />
        <div className='px-2 flex justify-evenly items-center w-8/12 md:w-5/12 text-sm md:text-xl lg:text-2xl'>
          <a className='border-b border-green-900 border-dashed' href='#skills'>Skills</a>
          <a className='mx-1 border-b border-green-900 border-dashed' href='#certifications'>Certifications</a>
          <a className='border-b border-green-900 border-dashed' href='#projects'>Projects</a>
        </div>
      </div>

      <div className='text-white text-center py-44'>
        <h1 className='m-3 font-semibold text-3xl md:text-8xl'>{"Welcome to Yamin's Website!"}</h1>      
        
        <p className='text-sm px-4 pt-6'>
          <q>The best striving is that which is accompanied by [divinely granted] success.</q> 
          <cite> - Imam Ali (a.s)</cite>
        </p>
      </div>
    </div>
  )
}

export default Header