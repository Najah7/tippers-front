"use client";
import React, { useEffect } from 'react';
import styles from '../form/form.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import { useRouter } from 'next/navigation';

const TipForm: React.FC = () => {
  const router = useRouter();
  const [rating, setRating] = React.useState<number | null>(2);
  const [ammountOfTips, setAmmountOfTips] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'ammountOfTips':
        setAmmountOfTips(value);
        break;
      case 'rating':
        setRating(Number(value));
        break;
      default:
        console.log("something wrong with input change");
        break;
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleButtonClick = () => {
    // ここにボタンをクリックしたときの処理を記述する（例：APIへのリクエストなど）
    handleOpen();

    // FOR DEBUG👇
    console.log('Tipボタンがクリックされました');
    console.log('Tip額：', ammountOfTips);
    console.log('評価：', rating);

    setTimeout(() => {
      router.push('/waiters');  // ページ遷移処理を3秒遅延させる
    }, 3000);
  };

  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={`${styles.box} ${styles.box_front}`}>
          <h2 className={styles.email}>Tip額</h2>
          <TextField
            id="ammout-tip"
            sx={{ width: '90%', margin: '10px auto 0px auto' }}
            label="いくら？（￥/円）"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            name="ammountOfTips"
            value={ammountOfTips}
            onChange={handleInputChange}
          />
          <h2 className={styles.password}>評価</h2>
          <Rating
            name="rating"
            sx={{ width: '90%', margin: '10px auto 0px 50px' }}
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Button
            sx={{
              backgroundColor: '#a083bb',
              '&:hover': { backgroundColor: '#a083bb' },
              borderRadius: '50px',
            }}
            variant="contained"
            onClick={handleButtonClick}
          >
            Giving tip
          </Button>

          <Modal
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundColor: 'rgba(197,190,108, 0.7)',
              color: 'white',
              position: 'absolute',
            }}
            open={open}
            // NOTE(Najah):リダイレクトする予定なので、Closeボタンは不要と思ったのでコメントアウト
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <>
              <h1 style={{fontSize: '1.5rem'}}>Thank you for your tip！</h1>
              <h2>Tip額：{ammountOfTips}</h2>
              <h2>評価：{rating}</h2>
            </>
          </Modal>
        </div>
        <div className={`${styles.box} ${styles.box_back}`}>
          <h1 className={styles.header_text}>Tipを渡す</h1>
        </div>
      </div>
    </div>
  );
};

export default TipForm;
