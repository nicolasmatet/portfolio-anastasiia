import { TypographyVariantsOptions } from "@mui/material";



export const typographyCV: TypographyVariantsOptions = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Inter',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  button: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px'
  },
  caption: {
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '24px',
  },
  h4: {
    fontWeight: 700,
    fontSize: '20px',
  },
  h5: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '140%',
  },
  h6: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#C6977D'
  },
  body1: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '140%',
  }
} 