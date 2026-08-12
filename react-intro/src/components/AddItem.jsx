import React, { useState } from 'react'

function AddItem() {
    let [inputValue , setInputValue] = useState("");
    let [item , setItem] = useState([]);

    function handleChange (e){
        // setInputValue(...e,e.target.value) give the error e is not itterable 
        setInputValue(e.target.value)
        // setInputValue([...inputValue, e.target.value])
    }
    console.log(inputValue)

    function addItem(){
        if (inputValue.trim() === '') return; 

        setItem([...item,inputValue])

            setInputValue(''); 

    }

  return (
    <div className='w-full h-96 flex flex-col  items-center justify-center gap-4 bg-gray-100'>
        <h1 className='text-2xl text-center bg-amber-500 rounded-xl w-48'> Add Item</h1>
      <input
       type="text"
       name="" id=""
       value={inputValue} 
       onChange={handleChange} 
       className='w-48 h-12 bg-amber-300 border-2 border-black text-2xl rounded-2xl  text-center text-black  '/>
      <button onClick={addItem} className='w-48 h-12 bg-green-500 text-2xl text-center text-white rounded-xl'>add </button>

        <div>
            <h1>Items:</h1>
            <ul className='flex flex-col gap-5'>
                {item ? item.map((i,idx)=>{
                    return <li className='w-48 flex  gap-5 justify-around items-center rounded-3xl  bg-amber-200 ' id={idx}>{i} <button onClick={() => setItem(item.filter((_, index) => index !== idx))} className='w-20 h-10 rounded-2xl text-amber-200 bg-red-600  text-center p-5'>delete</button></li>
                }) : "items not found "}
            </ul>
        </div>
 

    </div>
  )
}

export default AddItem
