import React from 'react'
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';

export function BoardHeader(){
  return(
    <>
    <div style={{display:'flex',
    justifyContent:'space-between',
    alignItems:'center'}}>
      <Typography component="h1" variant="h4" style={{
        width: '135px',
        height: '34px',
        fontFamily: 'Urbanist',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '28px',
        lineHeight: '34px',
      }}>
        Collections
      <Badge
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        style={{
          fontFamily: 'Urbanist',
          width: '100px',
          fontStyle: 'normal',
          fontWeight: '600',
            fontSize: '12px',
            textAlign: 'center',
          color: '#348049',
          backgroundColor: '#E1FFE9',
          borderRadius: '16px',
          padding: '0 13px',
          position: 'absolute',
          height: '25px',
          alignitems: 'center',
          marginTop: '5px',
          marginLeft: '15px',
        }}
      >
      25 collections
      </Badge>
      </Typography>
      <Button variant="contained" style={{
        padding:'0',
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
      }}>Create Collection</Button>
    </div>
    <Typography component="h1" variant="h5" style={{
      fontFamily: 'Urbanist',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '17px',
      color: '#667085',
      }}>
    Lorem ipsum dolor sit, amet consectetur ipsum fermentum porttittoe enim
    </Typography>
    </>
  )
}