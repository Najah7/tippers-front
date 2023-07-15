import React from 'react'
import styles from './dashboard.module.css'
import Image from 'next/image'

interface DashBoardProps {
    message: string;
    ammountOfTips: number;
}

const DashBoard: React.FC<DashBoardProps> = ({message, ammountOfTips}: DashBoardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image className={styles.menu_bar} src="/icon/menu_bar.png" alt="menu_bar" width={35} height={35}/>
                <div className={styles.message}><h1>{message}</h1></div>
                <Image className={styles.notification} src="/icon/notification.png" alt="notification" width={35} height={35} />
            </div>
            <div className={styles.dashboard}>
                <h3>今月のTips</h3>
                <h2>￥{ammountOfTips}</h2>
                <button className={styles.button}>もっと見る</button>
            </div>
        </div>
    )
}

export default DashBoard