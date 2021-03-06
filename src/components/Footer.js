import React from 'react'
import '../styles/Footer.css'
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <a href='https://www.juanjesc.dev/' target="_blank" rel='noreferrer' className='text-footer'>Juanjesc.dev 🍺</a>
				<a 
					href="https://www.linkedin.com/in/juan-jes%C3%BAs-sedano-calder%C3%B3n-08938b1b0/"
					target="_blank"
					rel='noreferrer'
					className='enlace'>
					<AiFillLinkedin className='linkedinIcon'/>
				</a>
    </div>
  )
}
