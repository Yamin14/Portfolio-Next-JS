
import React from 'react'
import Section_Heading from './Section_Heading'
import Section_Points from './Section_Points'

const Certifications = () => {

  const certifications = ['Responsive Web Design - freeCodeCamp', 'React + Redux - SoloLearn', 'Responsive Web Design - SoloLearn', 'UI UX For Beginners - GreatLearning', 'Get Started With Figma - Coursera']

  return (
    <div id='certifications' className='section'>
        <Section_Heading heading='Certifications' />
        <Section_Points heading='certifications' points={certifications}  />
    </div>
  )
}

export default Certifications