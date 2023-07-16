'use client'
import React, { FC } from 'react';
// import useSWR from 'swr';
// import fetcher from '../utils/fetcher';
import { Avatar, Button, List, ListItem, ListItemAvatar,ListItemText} from '@mui/material';
import styles from './history-list.module.css';



const data = [
  {
    avatar: "???",
    name: "staff1",
    ammountOfDeal: 300,
  },
  {
    avatar: "???",
    name: "staff2",
    ammountOfDeal: 500,
  },
  {
    avatar: "???",
    name: "staff3",
    ammountOfDeal: 100,
  },
  {
    avatar: "???",
    name: "staff4",
    ammountOfDeal: 200,
  }
]

const HistoryList: React.FC<HistoryListProps> = (): JSX.Element => {
  // const { data, error } = useSWR<User[]>('/api/users', fetcher);

  // if (error) return <div>Error...</div>;
  // if (!data) return <div>Loading...</div>;
  
  const date = new Date();
  const month = date.getMonth()+1;
  const day = date.getDate();

  return (
    <div className={styles.container}>
      {data.map((staff,index) =>(
        <List key={index} component="nav" aria-label="mailbox folders">
          <ListItem sx={{backgroundColor:'#616367',borderRadius: '20px',}}>
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="" />
          </ListItemAvatar>
          <ListItemText primary={staff.name} />
          <h2 className={styles.ammount}>￥{staff.ammountOfDeal}</h2>
        </ListItem>
        </List>
      ))} 
    </div>
  );
};

export default HistoryList;
