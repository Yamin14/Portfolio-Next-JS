
import React from 'react'
import Logo from './Logo'
import SocialIcon from './SocialIcon'

const Footer = () => {
  return (
    <div className='text-center bg-green-900 text-white py-4 mt-6'>

      <div className='flex justify-center mt-1 mb-3'>
        <Logo icon='footer' />
      </div>    

      <div>
        <SocialIcon icon='github' link='https://github.com/Yamin14' />
        <SocialIcon icon='linkedin' link='https://www.linkedin.com/in/yamin-kazmi-a2ab83255/' />
        <SocialIcon icon='instagram' link='https://www.instagram.com/yaminkazmi14.js/' />
      </div>

      <div>
        <p>Copyright &copy; 2024 Yamin K. All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer