// import React, { useEffect, useState } from 'react'
// import Card from '../../components/Card'
// import axios from 'axios'

// const Home = () => {

//     // states  best location..
// const [users, setUsers] = useState([])

// // useEffect best location...

// const getData = async () => {
//      let result = await axios.get("https://dummyjson.com/users")
//     console.log(result);
    
    
//     setUsers(result.data.users);
// }


// useEffect(() => {
//     console.log("use effect chalaaa -->");
    
//      getData()
    
//     }, [])
    


// // useEffect(() => {}, [])
//   return (
//     <div>
//       <div className='p-4 shadow-md mb-4'>
// <h1>This is a Dashboard</h1>
//       </div>

//       <div className='flex justify-evenly gap-5 flex-wrap'>
//     {users.map((user) => (<Card key={user.id} data={user} />))}
// </div>
//     </div>
//   )
// }

// export default Home






import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import axios from 'axios'

const Home = () => {

    // states  best location..
const [users, setUsers] = useState([])

// useEffect best location...

const getData = async () => {
     let result = await axios.get("https://dummyjson.com/users")
    console.log(result);
    
    
    setUsers(result.data.users);
}


useEffect(() => {
    console.log("use effect chalaaa -->");
    
     getData()
    
    }, [])
    


// useEffect(() => {}, [])
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 px-6 py-6 shadow-xl backdrop-blur-xl">
        <div className="mx-auto max-w-7xl">
          <p className="mb-1 text-sm font-medium text-indigo-400">
            Dashboard
          </p>

          <h1 className="text-3xl font-bold tracking-tight">
            This is a Dashboard
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Manage and view all users from your dashboard
          </p>
        </div>
      </div>

      {/* Users */}
      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Users
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            All registered users
          </p>
        </div>

        <div className='flex justify-evenly gap-5 flex-wrap'>
          {users.map((user) => (<Card key={user.id} data={user} />))}
        </div>

      </div>

    </div>
  )
}

export default Home