import React from 'react';
import profile_img from '../../img/profile_logo.jpg';
import "./LeftBar.css";
import SideBarText from '../SideBarText/SideBarText';
import {Link} from "react-router-dom";

function LeftBar() {
  return (
    <>
    <div className='left_bar_content'>
      <div>
        <div className='profile_icon_box' >      
          <img className="profile_icon"src={profile_img} alt='logo'/>
        </div>
      </div>
      <div className='category_Description'>
        <SideBarText text="Shehan kavinda"/>
        <SideBarText text="249/A Niwandama Ja-Ela"/>
        <SideBarText text="Naturai Creation"/>
        <a href='skavinda04@gmail.com'>skavinda04@gmail.com</a>
        <SideBarText text="0768251139"/>

      </div>
      
      <hr className='liner'/>

      <div className='category_Description'>
        <h4>Photography Type</h4>
        <SideBarText text="xxxxxxxxx"/>
        <SideBarText text="xxxxxxxxx"/>
        <SideBarText text="xxxxxxxxxxxxx"/>

      </div>
      <hr className='liner'/>

      <div className='category_Description'>
        <h4>Camara Type</h4>
        <SideBarText text="xxxxxxxxx"/>
        <SideBarText text="xxxxxxxxx"/>
        <SideBarText text="xxxxxxxxxxxxx"/>

      </div>
      <hr className='liner'/>

      <div className='category_Description'>
        <h4>Price Details </h4>
        <SideBarText text="xxxxxxxxx  Rs.xxxxx.xx"/>
        <SideBarText text="xxxxxxxxx  Rs.xxxxx.xx"/>
        <SideBarText text="xxxxxxxxx  Rs.xxxxx.xx"/>
        
      </div>
      <div className='edit_button_box'>
        <Link to="/editmainpage">
        <button type='button' className='edit_button' >Edit</button>
        </Link>
       
      </div>
      

    </div>
   
    </>
  )
}

export default LeftBar;
