import React from 'react'

function Card({task , handleEdit , handleDelete}) {
  return (
    <div>
        <div className="flex items-center justify-between mt-8 mb-4 px-2">

          <h2 className="text-lg font-semibold text-gray-200">
            Your Tasks
          </h2>

          <span className="text-sm text-gray-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            {task.length} {task.length === 1 ? "Task" : "Tasks"}
          </span>

        </div>


        <div className="space-y-3">

          {task.length > 0 ? task.map((item)=>{

            return (

              <div
                key={item.id}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.08] transition-all duration-300"
              >

                {/* Task Icon */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <span className="text-indigo-400 text-lg">
                    ✓
                  </span>
                </div>


                {/* Task Title */}
                <p className="flex-1 text-gray-200 font-medium break-words">
                  {item.title}
                </p>


                {/* Buttons */}
                <div className="flex items-center gap-2">

                  <button
                    onClick={() => handleEdit(item.id)}
                    className="px-3 py-2 rounded-xl text-sm font-medium text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400/20 border border-emerald-400/10 transition-all duration-200"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-2 rounded-xl text-sm font-medium text-red-400 bg-red-400/10 hover:bg-red-400/20 border border-red-400/10 transition-all duration-200"
                  >
                    Delete
                  </button>

                </div>

              </div>

            )

         }): (

            <div className="flex flex-col items-center justify-center py-16 px-5 rounded-3xl bg-white/[0.03] border border-dashed border-white/10">

              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                <span className="text-2xl text-gray-500">
                  ✓
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-300">
                No tasks yet
              </h3>

              <p className="text-sm text-gray-500 mt-1 text-center">
                Add your first task above and start getting things done.
              </p>

            </div>

         )}

        </div>


        <div className="text-center mt-8">
          <p className="text-xs text-gray-600">
            Stay focused • Stay productive
          </p>
        </div>


      </div>
    )
}

export default Card
