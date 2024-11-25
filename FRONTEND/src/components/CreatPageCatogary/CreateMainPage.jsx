import React ,{UseState}from 'react'
import SideBarText from '../SideBarText/SideBarText'
import "./CreateMainPage.css"
import {useNavigate} from "react-router" ;
import axios from 'axios';


function CreateMainPage() {
  const history = useNavigate();
  const[inputs, setInputS]=UseState({
    Model_name: "",
    title:"",
    Data:"",
    Camera_Details:"", 
    description: ""
  });
  const handleChange=(e)=>{
    setInputS((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,

    }));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('/editmainpage'))
  }

const sendRequest = async()=>{
  await axios.post("http://localhost:5000/users",{
    Model_name: String (inputs.Model_name),
    title: String (inputs.title),
    Data: Date (inputs.Data),
    Camera_Details: String (inputs.Camera_Details),
    description: String (inputs.description)
  });
}
  return (
    <div className='left_bar_content'>
  <form onSubmit={handleSubmit}>
  <div>
        <div className='category_Description'>
          <SideBarText text="Model Name :"/>
        </div>
        <div>
          <input type='text' value={inputs.Model_name} onChange={handleChange}  name='ModelName' placeholder='name' className='input_box' required></input>
        </div>

      </div>
      <div>
        <div className='category_Description'>
          <SideBarText text="Title :"/>
        </div>
        <div>
          <input type='text' name='title' placeholder='title' className='input_box'required></input>
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
          <textarea type='text' value={inputs.Model_name} onChange={handleChange}  name='description'  className='description_box' required></textarea>
        </div>

      </div>

  </form> 
      



  
    </div>
  )
}

export default CreateMainPage