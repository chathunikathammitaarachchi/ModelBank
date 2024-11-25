import React from 'react';
import { MenuLink } from '../LinkMenu/MenuLink';
import logo_img from '../../img/logo_icon.png';
import './HeaderContent.css';

const HeaderContent = () => {
  return (
    
    <div className='header_item'>
      <div>
        <div className='logo_icon_box' >
          <a className='logo_icon_link' href='/'>   
            <img className="logo_icon" src={logo_img} alt='logo'/>
          </a>
        </div>

      </div>
      
        
      <div className='text_link'>
        
        <MenuLink linkname="Home" url="#Home"/>       
        <MenuLink linkname="About" url="#About"/> 
        <MenuLink linkname="Models" url="#Models"/>
        <MenuLink linkname="Photographer" url="#Photographer"/>   
        <MenuLink linkname="Log Out" url="#LogOut"/>   
           
      </div>
    </div>

  )
}

export default HeaderContent;
