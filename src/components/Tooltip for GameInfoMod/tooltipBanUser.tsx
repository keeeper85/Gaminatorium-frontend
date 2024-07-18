import PersonOffIcon from '@mui/icons-material/PersonOff';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import alertBan from './alertBan';

export default function BanUser() {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <PersonOffIcon />
      </IconButton>
    </Tooltip>
  );
}


