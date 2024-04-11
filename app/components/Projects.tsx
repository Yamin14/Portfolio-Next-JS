
import React from 'react'
import Section_Heading from './Section_Heading'
import Section_Points from './Section_Points';

const Projects = () => {

  const projects = ['Landing Page', 'Ecommerce Shopping Page', 'Grocery Bud', 'Tours Page', 'Random Quotes Generator'];

  return (
    <div id='projects'>

        <Section_Heading heading='Projects' />

        {/* Projects */}
        <Section_Points heading='projects' points={projects}  />
        
    </div>
  )
}

export default Projects