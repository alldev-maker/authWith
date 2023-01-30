import Typography from '@mui/material/Typography';
import Dashboard from "../pages/users";

export function LoremContentTypo(props) {
  return <Typography component="h1" variant="h5" style={{
    fontFamily: 'Urbanist',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#667085',
  }} {...props} />
}
export function DashboardTitleTypo(props) {
  return <Typography component="h1" variant="h4" style={{
    width: '135px',
    height: '34px',
    fontFamily: 'Urbanist',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '28px',
    lineHeight: '34px',
  }} {...props} />
}