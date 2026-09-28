import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { increment, decrement } from '../src/app/features/counter/CounterSlice'
export default function App() {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Redux Counter </h1>
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>incremet </button>
      <button onClick={()=>dispatch(decrement())}>decremet </button>
    </div>
  )
}
