import React from 'react'

function Home() {

    function removeUserHandler() {
        localStorage.removeItem('user')
        // window.location.reload()
    }
  return (
    <div>
      <h1 className='text-center mt-5 font-bold text-3xl'>Welcome to the Home Page</h1>

      <button onClick={removeUserHandler}>Logout</button>
    </div>
  )
}

export default Home
