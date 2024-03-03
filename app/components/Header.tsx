
import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='h-screen bg-green-900 flex flex-col justify-between'>

      <div className='flex justify-start p-2 bg-white'>
        <Logo icon='header' />
      </div>

      <div className='text-white text-center py-44'>
        <h1 className='m-3 font-semibold text-3xl md:text-8xl'>Welcome to Yamin's Website!</h1>      
        
        <p className='text-sm px-4 pt-6'>
          <q>The best striving is that which is accompanied by [divinely granted] success.</q> 
          <cite> - Imam Ali (a.s)</cite>
        </p>
      </div>
    </div>
  )
}

export default Header