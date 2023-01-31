import React from 'react'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { LoremContentTypo, DashboardTitleTypo } from "../../styled/typhos";
export function DocsPageHeader() {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <DashboardTitleTypo>
          Docs
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
          <TextField id="outlined-basic"
            placeholder="Search the docs"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                marginRight: "20px",
                display: 'flex',
                flexDirection: 'row',
                padding: '10px 14px',
                gap: '8px',
                width: '320px',
                height: '43px',
                background: '#FFFFFF',
                border: ' 1px solid #D0D5DD',
                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                borderRadius: '8px',
              }
            }}
          />
        </Box>
      </div>
      <LoremContentTypo>
        Lorem ipsum dolor sit, amet consectetur ipsum fermentum porttittoe enim
      </LoremContentTypo>

    </>
  )
}