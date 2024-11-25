import React from 'react';
import './MenuLink.css';

export function MenuLink(props) {
  return (
    <div>
      <a href={props.url} className='link'>{props.linkname} </a>
    </div>
  )
}

export function FooterImg(props) {
  return (
    <>
      <div>
        <a href={props.url}>
          <img src={props.imge} className='footer_img' alt={props.name}/>
        </a>
        
      </div>
    </>
    
  )
 }

