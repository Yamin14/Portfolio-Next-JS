

import Link from 'next/link'
import React from 'react'

interface Props {
    icon: string,
    link: string
}

const SocialIcon = ({icon, link}: Props) => {
  return (
    <Link href={link} target='_blank'>
      <i className={'fa fa-' + icon + ' my-2 mx-3 fa-2x hover:opacity-70'}></i>
    </Link>
  )
}

export default SocialIcon