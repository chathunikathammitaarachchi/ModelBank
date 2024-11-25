
//SYGeOkzuGJMdUuJW
const express=require("express");
const mongoose=require("mongoose");
const router = require("./Routs/UserRouts");

const multer = require("multer");


const app = express();
const cors = require('cors');  

//middleware
app.use(express.json());
app.use(cors());
app.use("/users",router);


mongoose.connect("mongodb+srv://admin:SYGeOkzuGJMdUuJW@cluster0.2sypd.mongodb.net/")
.then(()=> console.log("connected  to mongodb"))
.then(() =>{
  app.listen(5000);
})
.catch((err)=> console.error( error));

//ima part
require("./Model/ImgModel");
const ImgSchema= mongoose.model("ImgModel");

const multerImg = multer.diskStorage({
  destination: function(req, file, cd){
    cd(null,"../post-management/src/components/EditPageContent/files")
  },
  filename:function(req,file,cd){
    const uniqueSuffix = Data.now();
    cd(null,uniqueSuffix + file.originalname);
  }
});

const uploadImg =multerImg({Storage: Storage});

app.post("/uploadImg", upload.single("/image"),async(req,res)=>{
  console.log(req.body);
  const imageName = req.file.filename;
  try{
    await ImgSchema.create({Image:imageName});
    res.json({status:"ok"})
  }catch (error){
    res.json({status:error});
  } 
});

//display img
app.get ("/getImage", async (req, res)=>{
  try{
    ImgSchema.find({}).then((data)=>{
      res.send({status:"ok",data:data});
    });

  }catch(error){
    res.json({status:error});

  }
});