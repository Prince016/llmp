import MuiButton from '@mui/material/Button';
import type { ButtonProps } from '@mui/material';

const Button = ({ ...props }: ButtonProps) => {
  return <MuiButton {...props} />;
};

export default Button;
