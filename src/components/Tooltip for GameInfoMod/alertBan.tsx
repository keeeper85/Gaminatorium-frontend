import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './index.css'

export default function DescriptionAlerts() {
  return (
    <div className='mr-4 mb-4 fixed absolute'>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        Are you sure you want to ban this user?

      </Alert>
      <Button variant="contained" size="small">
          Yes
        </Button>
        <Button variant="contained" size="small">
          No
        </Button>
    </Stack>
    </div>
  );
}

