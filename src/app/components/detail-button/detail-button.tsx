import React, { FC } from 'react';
import Button from '@mui/material/Button';
import styles from './detail-button.module.css';



const DetailButton: React.FC = (): JSX.Element => {
  return (
    <Button sx={{backgroundColor: '#565656', '&:hover': {backgroundColor: '#565656'}, borderRadius: '50px', width: '50%', margin: "2vh auto 0 auto"}} variant="contained">もっと見る</Button>
  );
};

export default DetailButton;