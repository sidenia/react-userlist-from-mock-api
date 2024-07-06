import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
    buttonText: string;
    onClick: () => void;
  }

  const ButtonGeneric: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
    return (
      <Button variant="contained" onClick={onClick}>
        {buttonText}
      </Button>
    );
  }
  export default ButtonGeneric;

  // export default function ButtonUsage({ buttonText }: ButtonUsageProps) {
  //   return <Button variant="contained">{buttonText}</Button>;
  // }