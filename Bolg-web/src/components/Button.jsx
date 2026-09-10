import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ buttontext , handler}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handler}>{buttontext}</Button>
    </Stack>
  );
}
