
import React from 'react'
import Section_Point from './Section_Point'

interface Props {
    heading: string,
    points: string[]
}

const Section_Points = ({heading, points}: Props) => {

  return (
    <div className={heading + ' grid grid-cols-1 gap-4 p-4 justify-items-center sm:grid-cols-2 md:grid-cols-4'}>

        {/* Map Each Point (Skill, certificate, or project) */}
        {points.map((point, index) => {
            return (<Section_Point key={index} heading={heading} name={point} />)
        })}

    </div>
  )
}

export default Section_Points