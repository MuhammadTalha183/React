// import React from 'react'
// import './App.css'
// import { useState } from 'react'
// function App() {
//   let [count , setCount] = useState(0)

//   function increase (){
//     setCount(count + 1)
//   }
//   function decrease (){
//     setCount(count - 1 )
    
//   }
//   return (
//     <div>
      
//       <button onClick={increase}>[+]</button>
//       <button>{count}</button>
//       <button onClick={decrease}>[-]</button>
//       <button onClick={(()=>{setCount(0)})}>Reset</button>
//     </div>
//   )
// }

// export default App



import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  let [count , setCount] = useState(0)

  function increase (){
    setCount(count + 1)
  }

  function decrease (){
    setCount(count - 1 )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Counter Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"></div>

          <div className="relative z-10">

            {/* Heading */}
            <div className="mb-8 text-center">
              <div className="mb-3 inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
                React Practice
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white">
                Counter App
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Practice React state with a simple counter
              </p>
            </div>

            {/* Counter Display */}
            <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-8 text-center">

              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-500">
                Current Count
              </p>

              <div className="text-7xl font-bold tracking-tight text-white">
                {count}
              </div>

            </div>

            {/* Increase / Decrease */}
            <div className="mb-4 flex items-center justify-center gap-4">

              <button
                onClick={increase}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-2xl font-bold text-white shadow-lg shadow-green-500/20 transition-all duration-200 hover:scale-105 hover:shadow-green-500/30 active:scale-90"
              >
                +
              </button>

              <button
                className="flex h-14 min-w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 text-xl font-bold text-white"
              >
                {count}
              </button>

              <button
                onClick={decrease}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-2xl font-bold text-white shadow-lg shadow-red-500/20 transition-all duration-200 hover:scale-105 hover:shadow-red-500/30 active:scale-90"
              >
                −
              </button>

            </div>

            {/* Reset */}
            <button
              onClick={(()=>{setCount(0)})}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-[0.98]"
            >
              Reset Counter
            </button>

          </div>
        </div>

        {/* Footer */}
        <p className="mt-5 text-center text-xs text-slate-600">
          Built with React • useState
        </p>

      </div>
    </div>
  )
}

export default App