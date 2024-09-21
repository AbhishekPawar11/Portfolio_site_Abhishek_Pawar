import React from 'react'
import skills from './Data/skills.json';

export default function Skills() {
  return (
    <>
      <div className='container skills'>
        <h1>SKILLS</h1>
        <div className='items' >
        {
            skills.map((data)=>(
               
                   <div className="item" data-aos="flip-left" data-aos-duration='1000' key={data.id}>
                      <img src={`/assets/${data.imageSrc}`} alt="skill img" />
                      <h3>{data.title}</h3>
                   </div>
               
            ))
        }
       </div>
      </div>
    </>
  )
}
