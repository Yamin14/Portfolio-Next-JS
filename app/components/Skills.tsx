
import React from 'react'
import Section_Point from './Section_Point'
import Section_Heading from './Section_Heading';
import Section_Points from './Section_Points';

const Skills = () => {

  const skills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'TypeScript', 'React.js', 'Bootstrap', 'TailwindCSS', 'Next.js'];

  return (
    <div className='section py-6'>
      <Section_Heading heading='Skills' />

      {/* Skills */}
      <Section_Points heading='skills' points={skills} />

    </div>
  )
}

export default Skills