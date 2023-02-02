import * as React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { UserPageHeader } from '../components/users/UserHeader'
import { LoremContentTypo } from '../styled/typhos'
import UserDataTable from '../components/users/UserTable'
import Container from '../components/Container'

function UsersContent() {
  return (
    <Container>
      <Box
        component="main"
        sx={{
          backgroundColor: 'white',
          flexGrow: 1,
          overflow: 'auto',
          padding: '32px',
          paddingBottom: '0',
        }}
      >
        <UserPageHeader />
        <Divider
          sx={{
            top: '15px',
            position: 'relative',
            borderColor: 'rgba(122, 136, 153, 0.28)',
            marginBottom: '45px',
          }}
        />
        <LoremContentTypo sx={{ width: '260px', marginBottom: '32px' }}>
          Lorem ipsum dolor sit, amet consectetur ipsum fermentum porttittoe
          enim
        </LoremContentTypo>
        <UserDataTable />
        <Divider
          sx={{
            top: '5px',
            position: 'relative',
            borderColor: 'rgba(122, 136, 153, 0.28)',
            marginBottom: '25px',
          }}
        />
        <LoremContentTypo sx={{ width: '260px', marginBottom: '32px' }}>
          Lorem ipsum dolor sit, amet consectetur ipsum fermentum porttittoe
          enim
        </LoremContentTypo>
        <UserDataTable />
      </Box>
    </Container>
  )
}

export default function Users() {
  return <UsersContent />
}
