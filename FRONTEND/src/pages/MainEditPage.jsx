import React from 'react'
import HeaderContent from '../components/header/HeaderContent';
import MaineEdit from '../components/MaineEditPage/MaineEdit';
import { Link } from 'react-router-dom';
//import EditPageContent from '../components/EditPageContent/EditPageContent';

function MainEditPage() {
  return (
    <div>
      <HeaderContent/>
      <MaineEdit/>
      <div className='button-box'>
        <Link to="/create">
        <button className='button4'>Crate Post</button>
        </Link>
       
      </div>
      
    </div>
  )
}

export default MainEditPage
