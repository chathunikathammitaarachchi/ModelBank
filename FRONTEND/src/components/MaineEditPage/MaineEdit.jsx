/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import "./MaineEdit.css";
import axios from 'axios';
import SideBarText from '../SideBarText/SideBarText';
import {Link} from "react-router-dom";
import User from "../../components/MaineEditPage/MaineEdit.jsx";
import { useNavigate } from 'react-router-dom';

const URL="http://localhost:5000/usres";
const fetchHandle =async () => {
  return await axios.get(URL).then((res)=>res.data);
  
}
function MaineEdit(props) {
  const[users,setUsers] = useState();
 useEffect(()=>{
    fetchHandle().then((data)=> setUsers(data.users));
  },[])


  const{Model_name , title, Data, Camera_Details, description} =props.user;


  const history = useNavigate();
  const deleteHandler= async()=>{
    await axios.delete(`http://localhost:5000/users/${id}`)
    .then(res=>res.data)
    .then(()=>history("/"))
    .then(()=>history("/"))

  }


  return (


    
  <div className='left_bar_content'>
  {users && users.map((user, i) =>(
      <div key={i}>
        <User user ={user}/>
      </div>
    ))} 
  <form>   
  <div className='left_bar_content'>
      
      <div className='category_Description'>
      <h4>Models</h4>
        <SideBarText text={Model_name}/>

      <h4>Title</h4>  
        <SideBarText text={title}/>

      <h4>Date</h4>  
        <SideBarText text={Data}/>


       

      </div>
      
      <hr className='liner'/>

      <div className={Camera_Details}>

        <h4>Description</h4>
        <SideBarText text={description}/>
        
      </div>
      
      <div className='category_Description'>
        <h4>Camera Details</h4>
        <SideBarText text="xxxxxxxxx"/>
        

      </div>
      
      <div className='edit_button_box'>
        <Link to="/">
        <button type='button' className='edit_button1' >Cancel</button>
        </Link>
        <Link to={`/editpage/${id}`}>
        <button type='button' className='edit_button2' >Edit</button>
        </Link>
        <Link to="/editmainpage">
        <button type='button' onClick={deleteHandler} className='edit_button3' >Delete</button>
        </Link>
       
      </div>
      

    </div>

  </form> 

  </div>
  )
};

export default MaineEdit