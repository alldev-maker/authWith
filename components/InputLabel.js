import {InputLabel} from "@mui/material"

const MyInputLabel = ({children, style, ...props}) => {
  return (
    <InputLabel
      style={{
        ...style,
        fontSize: '14px',
        lineHeight: '16.8px',
        fontWeight: '400',
        fontFamily: 'Urbanist',
        color: '#5f5f5f',
      }}
      {...props}
    >
      {children}
    </InputLabel>
  );
};

export default MyInputLabel;