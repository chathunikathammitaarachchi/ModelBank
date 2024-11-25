/* eslint-disable no-undef */

import React, { useState } from 'react';
import './EditPageContent.css';
//import { wait } from '@testing-library/user-event/dist/utils';
import { useEffect } from 'react';
import axios from 'axios';





const EditPageContent = () => {
  const[image, setImage]=useState(null);
  const[allImage, setAllImage]= useState(null);

  const submitImg= async (e)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('image',image);
    // eslint-disable-next-line no-unused-vars
    const result = await axios.post("http://localhost:5000/uplodeImg",
      formData,{
      Headers: {"content-type": "multipart/form-data"

        },
      }
    );
    getImage();


  };

  const onImgChange = (e) =>{
    setImage(e.target.files[0]);
  
  };

  const getImage = async()=>{
    try{
      const  result= await axios.get ("http://localhost:5000/getImage");
      setAllImage(result.data.data);
    
  }catch(e){
    console.error("Error getting image ",e);
  }

};

useEffect(()=>{
  getImage();
},[]);
 
    return (
      <>
      <from onSubmit={submitImg}>
        <div className='button-box'>
          <button className='button1' type='submit'>submit</button>
          <button className="button2" type='remove'>Delete</button>
        </div>
      
        <input type='file' accept="image/*"onChange={onImgChange}></input>
        
      </from>
      {allImage=== null? ""
      :allImage.map((data)=>(
        <img
        key={data._id}
        src={`http://localhost:5000/files/${data.image}`}
        height={100}
        alt="photos"></img>
      ))
      }

      </>
             
  )
};
export default EditPageContent;

