import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import MenuIcon from '../menu/menu'
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const Header: React.FC = (): JSX.Element => {
    return (
        <div className={styles.header}>
            {/* <Image className={styles.menu_bar} src="/icon/menu_bar.png" alt="menu_bar" width={35} height={35}/> */}
            <MenuIcon />
            <Image className={styles.logo} src="/tippers-logo.png" alt="tippers" width={230} height={60} />
            {/* <Badge badgeContent={4} color="primary" sx={{width: "50px", height: "50px", margin: "2vw"}}>
                <NotificationsNoneIcon color="action" sx={{width: "50px", height: "50px", margin: "2vw"}}/>
            </Badge> */}
            <Image className={styles.notification} src="/icon/notification2.png" alt="notification" width={35} height={35} />
        </div>
    )
}

export default Header