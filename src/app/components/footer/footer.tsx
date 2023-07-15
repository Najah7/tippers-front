import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer: React.FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.left_end}></div>
            <div className={styles.middle}>
                {/* NOTE: hover時に黄色に変更を実装するのあり */}
                <Image className={styles.icon} src="/icon/home.png" alt="home" width={50} height={50}/>
                <Image className={styles.icon} src="/icon/tip.png" alt="tip" width={50} height={50} />
                <Image className={styles.icon} src="/icon/search.png" alt="search" width={50} height={50} />
                <Image className={styles.icon} src="/icon/activity.png" alt="activity" width={50} height={50} />
            </div>
            <div className={styles.right_end}></div>
        </div>
    )
}

export default Footer