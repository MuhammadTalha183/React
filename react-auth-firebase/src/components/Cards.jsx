import React from 'react'

function Cards({loading ,users , deleteDoc}) {
  return (
    <div>
              {/* Loading State */}
        {loading ? (
          <div className="text-center text-slate-400 mt-10">
            <p className="animate-pulse">Loading profiles...</p>
          </div>
        ) : users.length === 0 ? (
          <div className="text-center text-slate-500 mt-10">
            <p>No users found in the database.</p>
          </div>
        ) : (
          /* Cards Grid layout using map */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div 
                key={user.id} 
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl hover:border-indigo-500/50 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Profile Avatar Anchor */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-xl text-white font-bold shadow-md shadow-indigo-500/10">
                      {user.username ? user.username.charAt(0).toUpperCase() : '👤'}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white tracking-wide truncate max-w-[180px]">
                        {user.username || "Anonymous"}
                      </h2>
                      <span className="text-xs text-indigo-400 font-medium">User Profile</span>
                    </div>
                  </div>

                  {/* Profile Metadata */}
                  <div className="space-y-2 text-sm border-t border-slate-800/60 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">🎂 Age</span>
                      <span className="text-slate-200 font-medium">{user.age || "N/A"} years</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-slate-400">✉️ Email Address</span>
                      <span className="text-slate-300 font-medium truncate bg-slate-950/40 p-2 rounded-lg border border-slate-800/40">
                        {user.email || "No email provided"}
                      </span>
                    </div>
                  </div>
                </div>

              <button className='bg-red-500 p-3 rounded-2xl font-bold text-xl mt-3' onClick={() => deleteDoc(user.id)}>Delete</button>
                
              </div>
            ))}
          </div>
        )}
      </div>
  )
}

export default Cards
