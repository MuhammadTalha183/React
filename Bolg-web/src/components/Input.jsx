// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function Input({ label ,type , name , handler , value}) {
//   return (
//     <Box
//       component="form"
//       sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField 
//       id="outlined-basic" 
//       label={label}
//        variant="outlined"
//        type={type}
//        value={value}
//        name={name}
//        onChange = {(e) => handler(name, type === "file" ? e.target.files[0] : e.target.value)}

//        />
      
//     </Box>
//   );
// }
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({ label, type, name, handler, value }) {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id={`outlined-${name}`} // Unique ID instead of hardcoded 'outlined-basic'
        label={label}
        variant="outlined"
        type={type}
        // CRITICAL: File inputs cannot have a controlled value string in React
        {...(type !== "file" ? { value: value || "" } : {})}
        name={name}
        onChange={(e) => handler(name, type === "file" ? e.target.files[0] : e.target.value)}
      />
    </Box>
  );
}

