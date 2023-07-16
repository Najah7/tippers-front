import React, { FC } from 'react';
import Button from '@mui/material/Button';
import styles from './detail-button.module.css';

interface DetailButtonProps {
  onClick: () => void;
}

const DetailButton: React.FC<DetailButtonProps> = ({ onClick }) => {
  return (
    <Button sx={{backgroundColor: '#565656', '&:hover': {backgroundColor: '#565656'}, borderRadius: '50px', width: '50%', height: '10%', margin: "0.2vh auto 1vh auto"}} variant="contained" onClick={onClick}>もっと見る</Button>
  );
};

export default DetailButton;