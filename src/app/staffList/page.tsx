'use client'
import { FC } from 'react';
// import useSWR from 'swr';
// import fetcher from '../utils/fetcher';
import { Avatar, Button, List, ListItem, ListItemAvatar,ListItemText} from '@mui/material';

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
  }
]

const UsersListPage: FC = () => {
  // const { data, error } = useSWR<User[]>('/api/users', fetcher);

  // if (error) return <div>Error...</div>;
  // if (!data) return <div>Loading...</div>;
  
  const date = new Date();
  const month = date.getMonth()+1;
  const day = date.getDate();

  return (
    <div className="test">
      <h1>staff {month}/{day}</h1>
      {data.map((staff,index) =>(
        <List key={index} component="nav" aria-label="mailbox folders">
          <ListItem sx={{backgroundColor:'#616367',borderRadius: '20px',}}>
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="" />
          </ListItemAvatar>
          <ListItemText style={{ color: "white" }} primary={staff.name} />
          <Button sx={{backgroundColor: '#a083bb','&:hover': {backgroundColor: '#a083bb'},borderRadius: '50px',}} variant="contained">チップを渡す</Button>
        </ListItem>
        </List>
      ))} 
    </div>
  );
};

export default UsersListPage;
