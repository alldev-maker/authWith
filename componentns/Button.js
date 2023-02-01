import { Button } from "@mui/material"

export function CreateButton({ onClick, style, ...props }) {
  return <Button variant="contained" onClick={onClick} style={{
    padding: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 2px',
    gap: '8px',
    width: '160px',
    height: '43px',
    background: '#0E1218',
    border: '1px solid #0B1016',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '8px',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    fontFamily: 'Urbanist',
    fontStyle: 'normal',
    fontHize: '14px',
    lineHeight: '19px',
    color: '#E1FFE9',
    ...style
  }} {...props} />
}