
import { createTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';


const theme = createTheme();
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    marginBottom: "25px",
    backgroundColor: theme.palette.mode === 'light' ? "#F2F2F2" : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 14,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export { BootstrapInput, theme }