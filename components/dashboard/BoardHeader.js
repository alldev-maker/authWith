import React from 'react'
import Badge from '@mui/material/Badge';
import { CollectionModal } from "./CollectionModal";
import { LoremContentTypo, DashboardTitleTypo, ButtonTypo } from "../../styled/typhos";

export function BoardHeader() {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <DashboardTitleTypo>
          Collections
          <Badge
            style={{
              fontFamily: 'Urbanist',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '12px',
              textAlign: 'center',
              color: '#348049',
              backgroundColor: '#E1FFE9',
              borderRadius: '16px',
              padding: '0 13px',
              height: '25px',
              alignItems: 'center',
              marginLeft: '15px',
            }}
          >
            25 collections
          </Badge>
        </DashboardTitleTypo>
        <CollectionModal />
      </div>
      <LoremContentTypo style={{
        marginTop: '5px',
        color: '#667085',
        borderBottom: '1px solid #EAECF0',
        paddingBottom: '20px',
        fontSize: '14px',
        fontWeight: '400',
      }}>
        Lorem ipsum dolor sit, amet consectetur ipsum fermentum porttittoe enim
      </LoremContentTypo>
    </>
  )
}