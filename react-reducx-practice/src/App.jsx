import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { addToDo } from './app/features/counter/TodoSlice'
import { increment, decrement , reset ,addByAmmount } from '../src/app/features/counter/CounterSlice'
export default function App() {
  const [text , setText] = React.useState("")
  const name = useSelector((state)=>state.todo.todo)
  const dispatch = useDispatch()
  // const count = useSelector((state)=> state.counter.value)
  const onChangeHandler = (e)=>{

      setText(e.target.value)
  }
  return (
    <div>
      {/* <h1>Redux Counter </h1>
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>incremet </button>
      <button onClick={()=>dispatch(decrement())}>decremet </button>
      <button onClick={()=>dispatch(reset())}> reset</button>
      <button onClick={()=>dispatch(addByAmmount(5))}> +5</button> */}

        <h1>Todo app Using Redux Tool Kit </h1>
<input onChange={onChangeHandler} type="text" name="" id="" />
<button onClick={()=>dispatch(addToDo(text))}>add todo </button>
        <h3>{name.map((n) => <div key={n.id}>{n.name}</div>)}</h3>
    </div>
  )
}
