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
      <Button className='btn' variant="contained" size="small">
          <span className='btn-text'>Yes</span>
        </Button>
        <Button className='btn' variant="contained" size="small">
          <span className='btn-text'>No</span>
        </Button>
    </Stack>
    </div>
  );
}

