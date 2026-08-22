import React, { useState } from 'react'
  import { ToastContainer, toast } from 'react-toastify';

function AddItem() {
    let [input , setIput ] = useState("")
    let [task , setTask ] = useState([])
    let [id , setId ] = useState(null)

//  notification popup
function notify(message) {
    toast(message);
}

//   handle the object of task 
    let todo = {
        id : Date.now(),
        title : input
    }
//   hande Input 
    function handleInput (value){
        setIput(value)
        
    }
    console.log(input)
//  Hanle add Item 
    function handleTask (){
        if (!input.trim()){
        notify("Please Enter any value ")
        }else{
            setTask((prev)=>[...prev , todo])
            notify("Item Added Successfully")
        }

        setIput("")
    }
    console.log(task)
    // Handle Delete Item
    function handleDelete (id){
        setTask((prev)=> prev.filter((item)=> item.id !== id))
        notify("Item Deleted Successfully")
    }

  return (
   <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6 text-white'>
  {/* Modern Glassmorphism Card */}
  <div className='flex items-center h-20  gap-3  w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl  transition-all duration-300 hover:border-white/40'>
    <input 
      type="text" 
      placeholder="Add a new item..." 
      value={input}
      onChange={(e)=>{handleInput(e.target.value)}}
      className='flex w-[80%] text-lg text-left pl-5 h-11   bg-black/30 text-white placeholder-gray-400  outline-none border border-white/10 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 transition-all'
    />
    <button className='bg-gradient-to-r w-20 from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 active:scale-95 text-white font-semibold text-sm px-5 h-11 rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200'
    onClick={handleTask}>
      ADD
    </button>

    
  </div>
          <ToastContainer />

        <div className='flex flex-col items-center justify-center w-full max-w-sm mt-5'>
                     {task.length > 0 ? task.map((item)=>{
            return (
                 <div key={item.id} className=' m-5 h-10 max-w-sm rounded-2xl p-10 flex items-center justify-center  w-full  bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl   transition-all duration-300 hover:border-white/40'>
          <p className='w-[70%]' >{item.title}</p>
          <div className='flex gap-3'>
            <button className='text-green-500 text-lg font-semibold'>Edit</button>
          <button className='text-red-500 text-lg font-semibold'
          onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
          </div>
                
            )
         }): "No items added yet."}
        </div>


          

</div>

  )
}

export default AddItem



