import React from 'react';
import SideBarText from '../SideBarText/SideBarText';
import './FooterContent.css';
import {FooterImg} from '../LinkMenu/MenuLink';
import FbIcon from '../../img/fb_icon.png';
import instagram from '../../img/instagram-icon.png';
import youtube from '../../img/youtube_icon.png';
import tiktok from '../../img/tiktok_icon.png';


function FooterContent() {
  return (
    <div >
      <div className='footer'>
        <di className='footer_content'>
          <h2 className='title_test'>XXXXXXXXX</h2>

          <div className='liner1_box'>
            <hr className='liner1'></hr>
          </div>

          <di className='footer_Details_content'>
            <div className='footer_Details'>
              <div className='footer_Details_company'>
                <h3>Company</h3>
                <SideBarText text="Company Details"/>
                <SideBarText text="About au"/>
              </div>

              <div className='footer_Details_Privacy'>
                <h3>Privacy</h3>
                <SideBarText text="Privacy policy"/>
                <SideBarText text="Terms of use"/>
              </div>

              <div className='footer_Details_Help'>
                <h3>Help</h3>
                <SideBarText text="Safety and trust"/>
                <SideBarText text="How it works"/>
                <SideBarText text="Modeling advice"/>
                <SideBarText text="Contact us"/>
              </div>
                        
            </div>
          </di>

          <div className='footer_icon_link'>
            <div className='icon_link'>
                     
              <FooterImg name='FbIcon' imge={FbIcon}  url='https://web.facebook.com/login/?_rdc=1&_rdr'/>       
              <FooterImg name='instagram' imge={instagram} url='https://www.instagram.com/accounts/login/'/>              
              <FooterImg name='youtube' imge={youtube} url='https://youtube.com'/>       
              <FooterImg name='tiktok' imge={tiktok} url='https://www.tiktok.com/login'/>       
            </div>
          </div>

         
          
          
        </di>
      </div>
      
    </div>
  )
}

export default FooterContent;
