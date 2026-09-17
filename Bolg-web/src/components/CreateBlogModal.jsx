// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Input from './Input';
// import { addDoc, collection,  serverTimestamp,} from "firebase/firestore";
// import ButtonCmp from "../components/Button";
// import { uploadImageToCloudinary } from "../helper/helper.js";

// import { db, auth } from "../firebase/config.js"; 

// import {
//     ToastContainer,
//     toast
// } from "react-toastify";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function CreateBlogModel() {

//   const [blogForm , setBlogForm] = React.useState({
//     blogTitle : "",
//     blogContent : "",
//     blogImage : ""
//   })


//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleChange = (name , value) => {
//     setBlogForm({
//       ...blogForm,
//       [name] : value
//     })
//   }

//    const saveDataIntoDB = async (url, data) => {
//     console.log(data);
//     //  return
//     try {
//           const currentUserId = auth.currentUser ? auth.currentUser.uid : null;
// if (!currentUserId) {
//       toast.error("You must be logged in to create a blog.");
//       return;
//     }
//       await addDoc(collection(db, "blogs"), {

//         blogImgUrl : url,
//         title : data.blogTitle,
//         description: data.blogContent,
//         authorId : currentUserId,
//         createdAt: serverTimestamp(),
//       });

//       console.log("blog created!");
//       toast.success("Blog created successfully!");

//       setTimeout(() => {
//         handleClose();
//       }, 5000);
      
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const postBlogHandler = async () => {
//     try {

//       if (!blogForm.blogTitle || !blogForm.blogContent || !blogForm.blogImage) {
//         toast.error("Please fill all the fields!");
//         return;
//       }
//       const imgUrl = await uploadImageToCloudinary(blogForm.blogImage);

//       saveDataIntoDB(imgUrl, blogForm);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <Button onClick={handleOpen}>start Writting</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//                 create Blog

//           </Typography>
//           <Input label="Blog Title" type="text" name ="blogTitle" handler={handleChange} value={blogForm.blogTitle} />
//           <Input label="Blog Content" type="text" name ="blogContent" handler={handleChange} value={blogForm.blogContent} />
//           <Input label="" type="file" name ="blogImage" handler={handleChange} />
//           <ButtonCmp handler={postBlogHandler} buttontext="Create Blog"/> 
//           <ToastContainer />
//         </Box>
//       </Modal>
//     </div>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from './Input';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
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
};

export default function CreateBlogModel() {

  const [blogForm, setBlogForm] = React.useState({
    blogTitle: "",
    blogContent: "",
    blogImage: ""
  })


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (name, value) => {
    setBlogForm({
      ...blogForm,
      [name]: value
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

        blogImgUrl: url,
        title: data.blogTitle,
        description: data.blogContent,
        authorId: currentUserId,
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
    <div className="flex items-center justify-center">

      {/* Create Blog Button */}
      <Button
        onClick={handleOpen}
        className="
          !normal-case
          !font-semibold
          !rounded-xl
          !px-6
          !py-3
          !text-white
          !shadow-lg
          !transition-all
          !duration-300
          hover:!scale-105
          hover:!shadow-xl
          !bg-gradient-to-r
          !from-indigo-600
          !via-purple-600
          !to-pink-600
        "
      >
        ✍️ Start Writing
      </Button>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>

          {/* Modal Container */}
          <div
            className="
              w-[92vw]
              max-w-2xl
              max-h-[92vh]
              overflow-y-auto
              rounded-3xl
              border
              border-white/20
              bg-white
              shadow-2xl
              dark:bg-slate-900
              dark:border-slate-700
            "
          >

            {/* Header */}
            <div
              className="
                relative
                overflow-hidden
                px-6
                py-7
                sm:px-8
                sm:py-8
                bg-gradient-to-br
                from-indigo-600
                via-purple-600
                to-pink-600
              "
            >

              {/* Decorative circles */}
              <div
                className="
                  absolute
                  -right-12
                  -top-12
                  h-36
                  w-36
                  rounded-full
                  bg-white/10
                "
              />

              <div
                className="
                  absolute
                  -bottom-16
                  -left-10
                  h-32
                  w-32
                  rounded-full
                  bg-white/10
                "
              />

              <div className="relative z-10">

                <div
                  className="
                    mb-3
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/20
                    text-2xl
                    backdrop-blur-sm
                  "
                >
                  ✍️
                </div>

                <Typography
                  id="modal-modal-title"
                  component="h2"
                  className="
                    !font-bold
                    !text-2xl
                    sm:!text-3xl
                    !text-white
                  "
                >
                  Create Your Blog
                </Typography>

                <Typography
                  component="p"
                  className="
                    !mt-2
                    !text-sm
                    sm:!text-base
                    !text-white/80
                  "
                >
                  Share your ideas, stories and knowledge with the world.
                </Typography>

              </div>
            </div>


            {/* Form */}
            <div className="space-y-6 px-6 py-7 sm:px-8 sm:py-8">

              {/* Blog Title */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-lg">📝</span>

                  <label
                    className="
                      text-sm
                      font-semibold
                      text-slate-700
                      dark:text-slate-200
                    "
                  >
                    Blog Title
                  </label>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    transition-all
                    duration-200
                    focus-within:border-indigo-500
                    focus-within:ring-4
                    focus-within:ring-indigo-500/10
                    dark:border-slate-700
                    dark:bg-slate-800
                  "
                >
                  <Input
                    label="Blog Title"
                    type="text"
                    name="blogTitle"
                    handler={handleChange}
                    value={blogForm.blogTitle}
                  />
                </div>
              </div>


              {/* Blog Content */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-lg">📖</span>

                  <label
                    className="
                      text-sm
                      font-semibold
                      text-slate-700
                      dark:text-slate-200
                    "
                  >
                    Blog Content
                  </label>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    transition-all
                    duration-200
                    focus-within:border-indigo-500
                    focus-within:ring-4
                    focus-within:ring-indigo-500/10
                    dark:border-slate-700
                    dark:bg-slate-800
                  "
                >
                  <Input
                    label="Blog Content"
                    type="text"
                    name="blogContent"
                    handler={handleChange}
                    value={blogForm.blogContent}
                  />
                </div>
              </div>


              {/* Image Upload */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-lg">🖼️</span>

                  <label
                    className="
                      text-sm
                      font-semibold
                      text-slate-700
                      dark:text-slate-200
                    "
                  >
                    Cover Image
                  </label>
                </div>

                <div
                  className="
                    rounded-2xl
                    border-2
                    border-dashed
                    border-slate-300
                    bg-slate-50
                    p-4
                    transition-all
                    duration-200
                    hover:border-indigo-400
                    hover:bg-indigo-50/50
                    dark:border-slate-600
                    dark:bg-slate-800
                    dark:hover:border-indigo-500
                  "
                >

                  <div className="mb-3 text-center">
                    <div
                      className="
                        mx-auto
                        mb-2
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-indigo-100
                        text-xl
                        dark:bg-indigo-500/20
                      "
                    >
                      📤
                    </div>

                    <p
                      className="
                        text-sm
                        font-medium
                        text-slate-700
                        dark:text-slate-200
                      "
                    >
                      Upload your cover image
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      Choose an image that represents your blog
                    </p>
                  </div>

                  <Input
                    label=""
                    type="file"
                    name="blogImage"
                    handler={handleChange}
                  />

                </div>
              </div>


              {/* Create Button */}
              <div className="pt-2">

                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    bg-gradient-to-r
                    from-indigo-600
                    via-purple-600
                    to-pink-600
                    p-[1px]
                  "
                >

                  <div className="rounded-xl bg-white dark:bg-slate-900">

                    <ButtonCmp
                      handler={postBlogHandler}
                      buttontext="Create Blog"
                    />

                  </div>

                </div>

              </div>


              {/* Bottom hint */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-center
                  text-xs
                  text-slate-500
                  dark:text-slate-400
                "
              >
                <span>✨</span>
                <span>Your story deserves to be shared.</span>
              </div>

            </div>

          </div>

          <ToastContainer />

        </Box>

      </Modal>

    </div>
  );
}



