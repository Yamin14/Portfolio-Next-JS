
import React from 'react'
import Section_Heading from './Section_Heading'
import Section_Points from './Section_Points'

const Certifications = () => {

  const certifications = ['React + Redux', 'Responsive Web Design', 'UI UX For Beginners', 'Get Started With Figma']

  return (
    <div id='certifications'>
        <Section_Heading heading='Certifications' />
        <Section_Points heading='certifications' points={certifications}  />
    </div>
  )
}

export default Certifications