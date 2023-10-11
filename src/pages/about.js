import React from 'react'
import AnimatedText from '../component/AnimatedText'

const About = () => {
  const text= "MD Kamran"
  return (
    <div >
      About Page
      <h1 style={{fontSize: "10rem"}}>
        <AnimatedText text={text}/>
      </h1>
    </div>
  )
}

export default About
