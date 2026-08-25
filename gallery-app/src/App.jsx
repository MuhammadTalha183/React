import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  let [data , setData] = useState([])
  let [page , setPage] = useState(1)
  let [limit , setLimit] = useState(10)

  const fetchData = async ()=>{

    let responce = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    console.log(responce.data)
    setData(responce.data)
  }
  useEffect(()=>{
    fetchData()
  },[page,limit])
  return (
    <div className='w-full h-screen bg-black overflow-y-auto  '>
      <div className='h-15  p-5 border-b-2 border-white  bg-gray-500 font-bold '>
        <h1 className='text-white text-xl '>Image Gallery</h1>
      </div>

      
  <div className="font-sans flex items-center gap-2 mt-5 ml-5">
        <label htmlFor="page-limit" className="text-sm font-medium text-gray-400">
          Show:
        </label>
        <div className="relative">
          <select 
            id="page-limit" 
            name="limit" 
            value={limit} // Controlled component bound to React state
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setPage(1); // Reset to page 1 when changing display limits
            }}
            className="appearance-none w-20 bg-white border border-gray-300 rounded-md py-1.5 pl-3 pr-8 text-sm font-semibold text-gray-700 cursor-pointer transition-all duration-200 ease-in-out hover:border-blue-500 hover:bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
          >
             <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-gray-500">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      

      {/* Image Grid */}
      <div className='flex justify-center gap-5 rounded-2xl mt-10 items-center flex-wrap'>
        {data.length > 0 ? 
        data.map((item)=>{ 
          return(
          <div key={item.key} className='w-60 h-60 border-4  border-amber-900 flex flex-col items-center p-3 rounded-2xl mb-10 '>
            <img src={item.download_url} alt="" className='w-55 h-50 rounded-2xl overflow-hidden' />
            <h3 className='text-white text-center font-bold mt-3'>{item.author}</h3>
          </div>
         ) })
        : <p className='text-white text-2xl font-bold text-center'>Loading ....</p>}
      </div>


      {/* pagination  */}
        <div className='flex justify-center text-center gap-2 mb-10'>{
           [1,2,3,4,5].map((item)=>{
            console.log(item)
            return(
              <div className='text-center'>
              <button className='w-15 h-10 cursor-pointer p-3 text-center rounded-xl bg-amber-500 '
              onClick={(e)=>{setPage(e.target.innerHTML)}}>{item}</button>
              </div>
            )
          })
          }</div>



        

      
    </div>
  )
}

export default App
