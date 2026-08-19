// import React from "react";

// const Input = ({placeholder , handler, type}) => {
//   return (
//     <div className="">
//       <input type={type} placeholder={placeholder} onChange={(e) => handler(e.target.value, type)}/>
//     </div>
//   );
// };

// export default Input;

import React from "react";

const Input = ({placeholder , handler, type}) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => handler(e.target.value, type)}
        className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
      />
    </div>
  );
};

export default Input;