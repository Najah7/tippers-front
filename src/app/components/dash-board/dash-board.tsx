import React from 'react'
import styles from './dash-board.module.css'
import Image from 'next/image'

interface DashBoardProps {
    month: number;
    ammountOfTips: number;
}

const DashBoard: React.FC<DashBoardProps> = ({month, ammountOfTips}: DashBoardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image className={styles.menu_bar} src="/icon/menu_bar.png" alt="menu_bar" width={35} height={35}/>
                <Image className={styles.logo} src="/tippers-logo.png" alt="tippers" width={230} height={60} />
                <Image className={styles.notification} src="/icon/notification2.png" alt="notification" width={35} height={35} />
            </div>
            <div className={styles.dashboard}>
                <h3>{month} 月のTips</h3>
                <h2>￥{ammountOfTips}</h2>
            </div>
        </div>
    )
}

export default DashBoard