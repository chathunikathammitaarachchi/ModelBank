const User = require("../Model/UserModel");


const getAllUser = async(req, res, next) => {
  
Mo
  //get all users
  try{
    const users = await User.find();
    return res.status(200).json({ users });

  }catch (err){
    console.log(err);
    return res.status(500).json({ message: 'An error occurred while fetching users.' });
  }
  
};

//data insert
const addUsers=async (req,res, next)=>{
  const{Model_name,title,Date,Camera_Details,description} =req.body;

  let users;

  try {
    users= new User({del_name,title,Date,Camera_Details,description});
    await users.save();
    return res.status(201).json({ user });
    
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'An error occurred while adding a user.' });
  }

  
};


//get by id
const getById= async (req, res, next)=>{
  const id =req.params.id;

  let user;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.status(200).json({ user });
       
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'An error occurred while fetching the user.' });
  }

  
};


//update use details
const UpdateUser= async (req, res, next)=>{
  const id =req.params.id;
  const{Model_name,title,Date,Camera_Details,description} =req.body;

  let users;

  try {
    users= await user.findByIdUpdate(id,
      {Model_name:Model_name,title:title ,Date:Date,Camera_Details:Camera_Details,description:description} ,{ new: true } );
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
      return res.status(200).json({ user });
     
    users = await users.save();   
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'An error occurred while updating the user.' });
  }

  
};

//delete use details
const deleteUser= async (req, res, next)=>{

  const id =req.param.id;
  

  let user;

  try {
    const user = await User.findByIdAndRemove(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.status(200).json({ message: 'User successfully deleted.' });
     
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'An error occurred while deleting the user.' });

  };


};

exports.getAllUser = getAllUser;
exports.addUsers = addUsers;
exports.getById = getById;
exports.UpdateUser = UpdateUser;
exports.deleteUser = deleteUser;

