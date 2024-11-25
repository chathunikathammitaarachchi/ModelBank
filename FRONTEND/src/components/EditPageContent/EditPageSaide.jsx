import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBarText from '../SideBarText/SideBarText'
import './EditPageSide.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditPageSaide() {
  const[inputs, setInputs] =useState({});
  const history= useNavigate();
  const id= useParams().id;  

  useEffect(()=>{
    const fetchHandler = async ()=>{
      await axios
      .get( `http://localhost:5000/users/${id}`)
      .then((res)=>res.data)
      .then((data)=> setInputs(data.user));

    };
    fetchHandler();
  },[id]);

  const sendRequest =async()=>{
    await axios.put(`http://localhost:5000/users/${id}`,{
      Model_name: String (inputs.Model_name),
      title: String (inputs.title),
      Data: Date (inputs.Data),
      Camera_Details: String (inputs.Camera_Details),
      description: String (inputs.description)
    })
    .then((res)=> res.data);
  };
  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,

    }));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('/editmainpage'))
  }
  
  return (
<div className='left_bar_content'>
  <form onSubmit={handleSubmit} >
  <div >
        <div className='category_Description'>
          <SideBarText text="Model Name :"/>
        </div>
        <div>
          <input type='text' name='ModelName' value={inputs.Model_name} onChange={handleChange}  placeholder='name' className='input_box' required></input>
        </div>

      </div>
      <div>
        <div className='category_Description'>
          <SideBarText text="Title :"/>
        </div>
        <div>
          <input type='text' name='title' value={inputs.Model_name} onChange={handleChange}  placeholder='title' className='input_box'required></input>
        </div>

      </div>
      <div>
        <div className='category_Description'>
          <SideBarText text="Date :"/>
        </div>
        <div>
          <input type='date' name='date' value={inputs.Model_name} onChange={handleChange}  className='date_box' required></input>
        </div>

      </div>

      <hr className='liner'/>

      <div>
        <div className='category_Description'>
          <SideBarText text="Camera Details :"/>
        </div>
        <div>
          <textarea type='text' name='camera' value={inputs.Model_name} onChange={handleChange}  className='camera_box' required></textarea>
        </div>

      </div>
      <div>
        <div className='category_Description'>
          <SideBarText text="Description :"/>
        </div>
        <div>
          <textarea type='text' name='description' value={inputs.Model_name} onChange={handleChange}  className='description_box' required></textarea>
        </div>

      </div>

  </form> 
      



  
    </div>
  )
}

export default EditPageSaide;
