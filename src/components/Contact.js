import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


export default function Contact() {
  return (
    <>
      <div className="container contact">
         <h1>
           CONTACT ME
         </h1>
         <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration='1000'>
            <a href='https://www.instagram.com/abhi_11_pawar/' className="items">
            <FaInstagramSquare className='icons'/>
            </a>
            <a href='https://www.linkedin.com/in/abhishek-pawar-94958a215' className="items">
            <FaLinkedin className='icons'/>
            </a>
            <a href='https://github.com/AbhishekPawar11' className="items">
            <FaGithubSquare className='icons'/>
            </a>
            <a href='mailto:abhishekbabanraopawar11@gmail.com' className="items">
            <BiLogoGmail className='icons' />
            </a>
          
         </div>
      </div>
    </>
  )
}
