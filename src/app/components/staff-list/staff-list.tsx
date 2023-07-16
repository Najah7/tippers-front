'use client'
import { FC } from 'react';
// import useSWR from 'swr';
// import fetcher from '../utils/fetcher';
import { Avatar, Button, List, ListItem, ListItemAvatar,ListItemText} from '@mui/material';
import styles from './staff-list.module.css';
import { useRouter } from 'next/navigation';

const data = [
  {
    avatar: "???",
    name: "staff1",
  },
  {
    avatar: "???",
    name: "staff2",
  },
  {
    avatar: "???",
    name: "staff3",
  },
  {
    avatar: "???",
    name: "staff4",
  },
  {
    avatar: "???",
    name: "staff5",
  },
]

const StaffList: FC = () => {
  // const { data, error } = useSWR<User[]>('/api/users', fetcher);

  // if (error) return <div>Error...</div>;
  // if (!data) return <div>Loading...</div>;
  const router = useRouter();
  
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
          <ListItemText style={{ color: "white" }} primary={staff.name} />
          <Button onClick={() => router.push('/send-tip')} sx={{backgroundColor: '#a083bb','&:hover': {backgroundColor: '#a083bb'},borderRadius: '50px',}} variant="contained">チップを渡す</Button>
        </ListItem>
        </List>
      ))} 
    </div>
  );
};

export default StaffList;
