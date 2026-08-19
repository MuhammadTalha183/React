// import React from 'react'

// const Card = ({data}) => {
//     console.log(data);
    
//   return (
//     <div className='p-4 shadow-2xl rounded-2xl h-[150px] w-[350px] flex flex-col justify-center'>
      
// <h1>Username : {data.username}</h1>
// <p>Email : {data.email}</p>
// <p>Age : {data.age}</p>
// <p>Password : {data.password}</p>
//     </div>
//   )
// }

// export default Card



import React from 'react'

const Card = ({data}) => {
    console.log(data);
    
  return (
    <div className='group relative w-[350px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-white/10 hover:shadow-indigo-500/10'>
      
      {/* Top accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className="mb-5 flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white shadow-lg shadow-indigo-600/20">
          {data.username?.charAt(0).toUpperCase()}
        </div>

        <div className="min-w-0">
          <h1 className="truncate text-lg font-semibold text-white">
            {data.username}
          </h1>

          <p className="truncate text-sm text-slate-400">
            {data.email}
          </p>
        </div>

      </div>

      <div className="space-y-3">

        <div className="flex items-center justify-between rounded-xl bg-slate-900/60 px-4 py-3">
          <span className="text-sm text-slate-400">
            Age
          </span>

          <span className="font-medium text-white">
            {data.age}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-900/60 px-4 py-3">
          <span className="text-sm text-slate-400">
            Password
          </span>

          <span className="font-medium tracking-widest text-white">
            {data.password}
          </span>
        </div>

      </div>

    </div>
  )
}

export default Card