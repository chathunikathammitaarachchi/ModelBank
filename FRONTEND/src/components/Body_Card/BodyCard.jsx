import React from 'react';
import './Body_card.css';

import image3 from '../../img/imge_photo3.jpg';
import BodyText from '../SideBarText/Body_text/BodyText';



const BodyCard = () => {

  
  return (
    <div className='card_box_content'>
      <div>
        <div className='card_box'>
          <div className='img_box'>
            <img className='img' src={image3} alt='' />

          </div>
          <div className='Description_box' >
            
              <BodyText  text="Image Description "/>
              <BodyText  text="Reviews Rate "/>       
           
          </div>

        </div>
      </div>
    </div>
    
  )
}


export default BodyCard;