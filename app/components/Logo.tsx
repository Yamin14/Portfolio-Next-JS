
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  icon: string
}

const Logo = ({icon}: Props) => {
  return (
        <Link href='/' className='w-fit hover:cursor-default'>
            <Image src={'/logo/logo_' + icon + '.png'} alt='' width={75} height={75}
            className='p-2 hover:cursor-pointer' />
        </Link>     
  )
}

export default Logo