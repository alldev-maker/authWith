import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';

export function AvartarInfo() {
  return (
    <div style={{ display: 'flex', color: 'rgba(187, 202, 191, 0.85)', background: '#0E1218', alignItems: 'center', padding: '0px 20px', justifyContent: 'space-between' }}>
      <Avatar alt="Olivia" src="../img/Avatar_user.png" />
      <UserInfo />
      <LogoutIcon style={{ color: "#667085" }} />
    </div>
  )
}
function UserInfo() {
  return (
    <div style={{ padding: '12.5px 0' }}>
      <p style={{
        fontFamily: 'Urbanist',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '0px',
        color: '#9097A1',
      }}>
        Olivia Rhye
      </p>
      <a href="mailto:'olivia@untitiledui.com'" style={{
        fontFamily: 'Urbanist',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '22px',
        color: 'rgba(123, 142, 170, 0.78)',
        textDecoration: "none"
      }}>
        olivia@untitiledui.com
      </a>
    </div>
  )
}