// import React, { useState } from 'react'
//   import { ToastContainer, toast } from 'react-toastify';

// function App() {
//     let [input , setIput ] = useState("")
//     let [task , setTask ] = useState([])
//     let [editId , setEditId] = useState(null)

// //  notification popup
// function notify(message) {
//     toast(message);
// }


// //   hande Input 
//     function handleInput (value){
//         setIput(value)
        
//     }
// //  Hanle add Item 
//     function handleTask (){
//         if (!input.trim()){
//         notify("Please Enter any value ")
//         }
//         if (task){
//           let existingTask = task.map((item)=> item.title == input)
          
//           if (existingTask.includes(true)){
//             // console.log("Ye existing task ke value hai ",existingTask)
//             notify("Item Already Exist")
//             return
//           }
         
//         }
//          if(editId){
//             let updateTask = task.map((item)=> editId == item.id ? {...item , title : input} : item )
//             setTask(updateTask)
//             setEditId(null)
//             notify("Item Updated Successfully")
//             setIput("")
//             return

//           }

//           //   handle the object of task 
//         let todo = {
//         id : Date.now(),
//         title : input
//     }
//             setTask((prev)=>[...prev , todo])
//             notify("Item Added Successfully")
        

//         setIput("")
//     }
//     console.log(task)
//     // Handle Delete Item
//     function handleDelete (id){
//         setTask((prev)=> prev.filter((item)=> item.id !== id))
//         notify("Item Deleted Successfully")
//     }
//     // function handleEdit 
//     function handleEdit (id){
//       let editTask=  task.find((item)=> item.id == id)
//       // console.log(updateTask)
//       setEditId(editTask.id)
//       setIput(editTask.title)
//     }


//   return (
//    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6 text-white'>
//   {/* Modern Glassmorphism Card */}
//   <div className='flex items-center h-20  gap-3  w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl  transition-all duration-300 hover:border-white/40'>
//     <input 
//       type="text" 
//       placeholder="Add a new item..." 
//       value={input}
//       onChange={(e)=>{handleInput(e.target.value)}}
//       className='flex w-[80%] text-lg text-left pl-5 h-11   bg-black/30 text-white placeholder-gray-400  outline-none border border-white/10 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 transition-all'
//     />
//     <button className='bg-gradient-to-r w-20 from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 active:scale-95 text-white font-semibold text-sm px-5 h-11 rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200'
//     onClick={handleTask}>
//         {editId ? "Update" : "Add"}
//     </button>

    
//   </div>
//           <ToastContainer />

//         <div className='flex flex-col items-center justify-center w-full max-w-sm mb-2'>
//                      {task.length > 0 ? task.map((item)=>{
//             return (
//                  <div key={item.id} className=' m-5 h-10 max-w-sm rounded-2xl p-10 flex items-center justify-center  w-full  bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl   transition-all duration-300 hover:border-white/40'>
//           <p className='w-[70%]' >{item.title}</p>
//           <div className='flex gap-3'>
//             <button className='text-green-500 text-lg font-semibold'
//             onClick={() => handleEdit(item.id)}>Edit</button>
//           <button className='text-red-500 text-lg font-semibold'
//           onClick={() => handleDelete(item.id)}>Delete</button>
//           </div>
//           </div>
                
//             )
//          }): "No items added yet."}
//         </div>


          

// </div>

//   )
// }

// export default App




import React, { useState } from 'react'
import Card from './components/Card'
import { ToastContainer, toast } from 'react-toastify';

function App() {
    let [input , setIput ] = useState("")
    let [task , setTask ] = useState([])
    let [editId , setEditId] = useState(null)

//  notification popup
function notify(message) {
    toast(message);
}


//   hande Input 
    function handleInput (value){
        setIput(value)
        
    }
//  Hanle add Item 
    function handleTask (){
        if (!input.trim()){
        notify("Please Enter any value ")
        }
        if (task){
          let existingTask = task.map((item)=> item.title == input)
          
          if (existingTask.includes(true)){
            notify("Item Already Exist")
            return
          }
         
        }
         if(editId){
            let updateTask = task.map((item)=> editId == item.id ? {...item , title : input} : item )
            setTask(updateTask)
            setEditId(null)
            notify("Item Updated Successfully")
            setIput("")
            return

          }

          //   handle the object of task 
        let todo = {
        id : Date.now(),
        title : input
    }
            setTask((prev)=>[...prev , todo])
            notify("Item Added Successfully")
        

        setIput("")
    }
    console.log(task)

    // Handle Delete Item
    function handleDelete (id){
        setTask((prev)=> prev.filter((item)=> item.id !== id))
        notify("Item Deleted Successfully")
    }

    // function handleEdit 
    function handleEdit (id){
      let editTask=  task.find((item)=> item.id == id)
      setEditId(editTask.id)
      setIput(editTask.title)
    }


  return (
    <div className="min-h-screen bg-[#080b14] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-purple-600/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-2xl">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 mb-5">
            <span className="text-3xl">✓</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Tasks</span>
          </h1>

          <p className="text-gray-400 mt-3">
            Keep your tasks organized and stay productive.
          </p>
        </div>


        {/* Input Card */}
        <div className="bg-white/[0.06] backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl">

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              placeholder="What needs to be done?"
              value={input}
              onChange={(e)=>{handleInput(e.target.value)}}
              className="flex-1 h-14 px-5 rounded-2xl bg-black/30 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
            />

            <button
              onClick={handleTask}
              className="h-14 px-7 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 font-semibold shadow-lg shadow-indigo-500/20 transition-all duration-200"
            >
              {editId ? "Update Task" : "Add Task"}
            </button>

          </div>

        </div>



        <Card task={task} handleEdit={handleEdit} handleDelete={handleDelete} />

      <ToastContainer />
</div>
    </div>
  )
}

export default App