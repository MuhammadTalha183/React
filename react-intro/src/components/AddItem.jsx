import React, { useState } from 'react'

function AddItem() {
    let [inputValue , setInputValue] = useState([]);
    let [item , setItem] = useState([]);

    function handleChange (e){
        // setInputValue(...e,e.target.value) give the error e is not itterable 
        setInputValue([...inputValue,e.target.value])
        // setInputValue([...inputValue, e.target.value])
    }
    console.log(inputValue)

    function addItem(){
        set
    }

  return (
    <div className='w-full h-96 flex flex-col  items-center justify-center gap-4 bg-gray-100'>
        <h1 className='text-2xl text-center bg-amber-500 rounded-xl w-48'> Add Item</h1>
      <input
       type="text"
       name="" id=""
       value={inputValue} 
       onChange={handleChange} 
       className='w-48 h-12 bg-blue-300 text-2xl text-center text-black  '/>
      {/* <button onClick={(()=>{addItem})} className='w-48 h-12 bg-green-500 text-2xl text-center text-white rounded-xl'>add </button>

        <div>
            <h1>Items:</h1>
            <ul>
                {item ? item.map((i,idx)=>{
                    <li id={idx}>{i}</li>
                }) : "items not found "}
            </ul>
        </div>
 */}

    </div>
  )
}

export default AddItem
