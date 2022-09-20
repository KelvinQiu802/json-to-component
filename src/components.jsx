import { Button, Paper } from '@mui/material';

let component = {
  Button: (props) => <Button {...props}>{props.text}</Button>,
  Paper: (props) => <Paper {...props}></Paper>,
};

export default component;
