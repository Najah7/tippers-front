import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'

const Header: React.FC = (): JSX.Element => {
    return (
        <div className={styles.header}>
            <Image className={styles.menu_bar} src="/icon/menu_bar.png" alt="menu_bar" width={35} height={35} />
            <Image className={styles.logo} src="/tippers-logo.png" alt="tippers" width={230} height={60} />
            <Image className={styles.notification} src="/icon/notification2.png" alt="notification" width={35} height={35} />
        </div>
    )
}

export default Header