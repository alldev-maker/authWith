import React from 'react'
import Box from '@mui/material/Box';
import { LoremContentTypo, DashboardTitleTypo } from "../../styled/typhos";
import { SessionModal } from "./SessionsModal";
export function SessionsPageHeader() {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <DashboardTitleTypo>
          Sessions
        </DashboardTitleTypo>
        <Box
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
          noValidate
          autoComplete="off"
        >
          <SessionModal />
        </Box>
      </div>
      <LoremContentTypo>
        Lorem ipsum dolor sit, amet consectetur ipsum fermentum porttittoe enim
      </LoremContentTypo>

    </>
  )
}