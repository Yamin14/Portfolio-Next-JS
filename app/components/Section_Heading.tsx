
import React from 'react'

interface Props {
    heading: string
}

const Section_Heading = ({heading}: Props) => {
  return (
    <div className='mb-4 flex justify-center'>
        <h1 className='py-2 w-fit text-green-950 font-semibold text-2xl border-b-2 border-green-900 rounded-md border-dotted md:text-5xl'>{heading}</h1>
    </div>
  )
}

export default Section_Heading