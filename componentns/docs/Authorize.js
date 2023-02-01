import { CreateButton } from "../Button";
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

export function Authorize() {
  return (
    <div style={{
      background: '#EEF0F4',
      borderRadius: '12px',
      padding: '20px 30px',
    }}>
      <CreateButton>Authorize <HttpsOutlinedIcon /></CreateButton>
    </div>
  )
}