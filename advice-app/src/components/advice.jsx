import { useState } from "react"

let advives = ["Learn HTML" , "Learn CSS", "Learn Javascript "] 

function Advice () {
    let [ step, setStep ] = useState(0)

    // function handleNext () {
    //    step < advives.length - 1 ? setStep(step + 1 ) : setStep(0)
    // }
    // function handlePrevious (){
    //    step == 0 ? setStep(advives.length - 1) : setStep( step - 1)
    // }
    return (
        <>
        <div></div>
        <div>Advice :
            {advives[step]} </div>
        <div>
            <button onClick={()=>{step < advives.length - 1 ? setStep(step + 1 ) : setStep(0)}}>Next</button>
            <button onClick={()=>{step == 0 ? setStep(advives.length - 1) : setStep( step - 1)}}>Previous</button>
        </div>
        </>
    )
}

export default Advice