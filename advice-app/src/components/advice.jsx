
// Original code before edits 

// import { useState } from "react"

// let advives = ["Learn HTML" , "Learn CSS", "Learn Javascript "] 

// function Advice () {
//     let [ step, setStep ] = useState(0)

//     // function handleNext () {
//     //    step < advives.length - 1 ? setStep(step + 1 ) : setStep(0)
//     // }
//     // function handlePrevious (){
//     //    step == 0 ? setStep(advives.length - 1) : setStep( step - 1)
//     // }
//     return (
//         <div className="flex flex-col items-center justify-center h-screen gap-4">
//         <div className="text-2xl font-bold">Advice NO {step + 1}</div>
//         <div className="text-lg">Advice :
//             {advives[step]} </div>
//         <div className="flex gap-4">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{step < advives.length - 1 ? setStep(step + 1 ) : setStep(0)}}>Next</button>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{step == 0 ? setStep(advives.length - 1) : setStep( step - 1)}}>Previous</button>
//         </div>
//         </div>
//     )
// }

// export default Advice

//  After edits desiging using AI also update the  advices Array from AI suggestions but LOOGIC IS still same as before
import { useState } from "react"



let advives = [
    "Master the fundamentals before jumping into advanced technologies.",
    "Write code every day, even if it is only a small amount.",
    "Don't just watch tutorials; build projects to understand what you learn.",
    "When you get an error, read the error message carefully before searching for a solution.",
    "Learn to use documentation instead of depending on tutorials for everything.",
    "Break large problems into smaller problems that you can solve one at a time.",
    "Write code that is easy to understand before trying to make it clever.",
    "Learn why your code works instead of only memorizing the syntax.",
    "Use Git from the beginning of every serious project.",
    "Build projects that solve real problems instead of only following tutorial projects.",
    "When stuck, try debugging yourself before asking for help.",
    "Don't learn five technologies at the same time; become comfortable with one before adding another.",
    "Refactor your code after you understand the problem better.",
    "Read other people's code to learn different ways of solving problems.",
    "Practice writing clean and reusable functions.",
    "Learn how the tools you use actually work instead of treating them like magic.",
    "Don't be afraid of difficult bugs; debugging is one of the best ways to improve.",
    "Keep your projects organized with a clear folder structure.",
    "Learn database fundamentals if you want to become a strong backend developer.",
    "Understand HTTP, APIs, authentication, and authorization before building serious backend applications.",
    "Security is not an optional feature; think about it from the beginning.",
    "Don't copy code blindly. Understand every important line you add to your project.",
    "Build, break, debug, improve, and repeat.",
    "Consistency will take you further than motivation.",
    "Your first solution doesn't need to be perfect; make it work, then make it better.",
    "Learn to search effectively. Knowing what to search for is a valuable developer skill.",
    "Keep your dependencies and tools updated, but understand changes before upgrading major versions.",
    "Write meaningful variable and function names.",
    "Test your code instead of assuming it works.",
    "A developer who can explain their code clearly usually understands it better.",
    "Don't compare your progress with someone else's timeline.",
    "Focus on understanding concepts rather than collecting technologies.",
    "Finish projects. An unfinished project teaches less than a completed one.",
    "Build something without a tutorial at least once every few weeks.",
    "Keep notes about bugs and solutions you encounter; they become your personal knowledge base.",
    "Learn to read documentation, stack traces, and source code.",
    "Good developers don't know everything; they know how to find and learn what they don't know.",
    "Spend more time building than watching someone else build.",
    "Keep improving one small thing every day."
]
function Advice () {
    let [ step, setStep ] = useState(0)

    // function handleNext () {
    //    step < advives.length - 1 ? setStep(step + 1 ) : setStep(0)
    // }
    // function handlePrevious (){
    //    step == 0 ? setStep(advives.length - 1) : setStep( step - 1)
    // }
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4">

            <div className="w-full max-w-lg">

                {/* Main Card */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

                    {/* Decorative Glow */}
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"></div>

                    <div className="relative z-10">

                        {/* Header */}
                        <div className="mb-8 text-center">
                            <div className="mb-3 inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
                                Developer Advice
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight text-white">
                                Daily Advice
                            </h1>

                            <p className="mt-2 text-sm text-slate-400">
                                Keep learning, keep building.
                            </p>
                        </div>

                        {/* Advice Number */}
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-400">
                                Current Advice
                            </span>

                            <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-sm font-semibold text-indigo-300">
                                {step + 1} / {advives.length}
                            </span>
                        </div>

                        {/* Advice Content */}
                        <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-8 text-center">

                            <div className="mb-4 text-4xl">
                                💡
                            </div>

                            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
                                Advice
                            </p>

                            <div className="text-2xl font-bold leading-relaxed text-white">
                                {advives[step]}
                            </div>

                        </div>

                        {/* Progress */}
                        <div className="mb-8">
                            <div className="mb-2 flex justify-between text-xs text-slate-500">
                                <span>Progress</span>
                                <span>{step + 1} of {advives.length}</span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                                    style={{ width: `${((step + 1) / advives.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4">

                            <button
                                className="group flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
                                onClick={()=>{step == 0 ? setStep(advives.length - 1) : setStep( step - 1)}}
                            >
                                <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">
                                    ←
                                </span>
                                Previous
                            </button>

                            <button
                                className="group flex-1 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02] hover:from-indigo-400 hover:to-purple-500 hover:shadow-indigo-500/30 active:scale-95"
                                onClick={()=>{step < advives.length - 1 ? setStep(step + 1 ) : setStep(0)}}
                            >
                                Next
                                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>

                        </div>

                    </div>
                </div>

                {/* Footer */}
                <p className="mt-5 text-center text-xs text-slate-600">
                    Keep going • One step at a time 🚀
                </p>

            </div>
        </div>
    )
}

export default Advice