// import React from 'react'

// const Button = ({title, handler}) => {
//   return (
//     <button onClick={handler} className='mt-4 bg-gray-900 rounded p-3 text-white font-bold cursor-pointer'>
//       {title}
//     </button>
//   )
// }

// export default Button

import React from 'react'

const Button = ({title, handler}) => {
  return (
    <button
      onClick={handler}
      className='mt-4 w-full rounded-xl bg-indigo-600 p-3.5 text-white font-semibold capitalize shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-indigo-600/40 active:translate-y-0 cursor-pointer'
    >
      {title}
    </button>
  )
}

export default Button