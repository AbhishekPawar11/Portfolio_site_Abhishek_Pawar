import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/Abhishek--Pawar-resume.pdf'
import  hero from './Data/hero.json';
import Typed from 'typed.js';

export default function Home() {
  const typedRef = useRef(null)
   
  useEffect(()=>{
   
     const options ={
         strings:["Welcom to my profile" , "My Name is Abhishek Pawar", "I am Software Developer", "Full Stack Developer(MERN)"],
         typeSpeed:50,
         backSpeed:50,
         loop: true
     }
     const typed = new Typed(typedRef.current , options)

     return()=>{
      typed.destroy();
     }
  },[])
   
  return (
    <div className='container home'>
       <div className='left' data-aos="fade-up-right" data-aos-duration='1000'>
        <h1 ref={typedRef}></h1>
         <a href={pdf} download="Abhishek_Pawar_Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
              </div>
        <div className='right' data-aos="fade-up-left" data-aos-duration="1000">
            <div className='img'>
               <img  src={`assets/${hero.imgSrc}`} alt='hero img'/>
            </div>
        </div>
    </div>
  )
}
