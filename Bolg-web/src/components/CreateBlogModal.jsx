import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from './Input';
import { addDoc, collection,  serverTimestamp,} from "firebase/firestore";
import ButtonCmp from "../components/Button";
import { uploadImageToCloudinary } from "../helper/helper.js";

import { db, auth } from "../firebase/config.js"; 

import {
    ToastContainer,
    toast
} from "react-toastify";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateBlogModel() {

  const [blogForm , setBlogForm] = React.useState({
    blogTitle : "",
    blogContent : "",
    blogImage : ""
  })


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (name , value) => {
    setBlogForm({
      ...blogForm,
      [name] : value
    })
  }

   const saveDataIntoDB = async (url, data) => {
    console.log(data);
    //  return
    try {
          const currentUserId = auth.currentUser ? auth.currentUser.uid : null;
if (!currentUserId) {
      toast.error("You must be logged in to create a blog.");
      return;
    }
      await addDoc(collection(db, "blogs"), {

        blogImgUrl : url,
        title : data.blogTitle,
        description: data.blogContent,
        authorId : currentUserId,
        createdAt: serverTimestamp(),
      });

      console.log("blog created!");
      toast.success("Blog created successfully!");

      setTimeout(() => {
        handleClose();
      }, 5000);
      
    } catch (error) {
      console.log(error);
    }
  };

  const postBlogHandler = async () => {
    try {

      if (!blogForm.blogTitle || !blogForm.blogContent || !blogForm.blogImage) {
        toast.error("Please fill all the fields!");
        return;
      }
      const imgUrl = await uploadImageToCloudinary(blogForm.blogImage);

      saveDataIntoDB(imgUrl, blogForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>start Writting</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
                create Blog

          </Typography>
          <Input label="Blog Title" type="text" name ="blogTitle" handler={handleChange} value={blogForm.blogTitle} />
          <Input label="Blog Content" type="text" name ="blogContent" handler={handleChange} value={blogForm.blogContent} />
          <Input label="" type="file" name ="blogImage" handler={handleChange} />
          <ButtonCmp handler={postBlogHandler} buttontext="Create Blog"/> 
          <ToastContainer />
        </Box>
      </Modal>
    </div>
  );
}



