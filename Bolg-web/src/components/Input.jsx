import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({ label ,type , name , handler , value}) {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" 
      label={label}
       variant="outlined"
       type={type}
       value={value}
       name={name}
       onChange = {(e)=>(handler(name,e.target.value ))}

       />
      
    </Box>
  );
}
