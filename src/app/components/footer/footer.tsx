'use client';
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Footer: React.FC = (): JSX.Element => {
    const router: NextRouter = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.currentTarget.id);
        console.log('clicked');
        e.preventDefault();
        if (e.currentTarget.id === 'tip') 
        {
            router.push('/waiters')
        }
        else if (e.currentTarget.id === 'search') 
        {
            router.push('/restaurants')
        }
        else if (e.currentTarget.id === 'activity') 
        {
            router.push('/activity')
        }
    }

    
    return (
        <div className={styles.container}>
            <div className={styles.left_end}></div>
            <div className={styles.middle}>
                {/* NOTE: hover時に黄色に変更を実装するのあり */}
                {/* <Image className={styles.icon} src="/icon/home.png" alt="home" width={50} height={50}/> */}
                <Image id='tip' className={styles.icon} src="/icon/tip.png" alt="tip" width={50} height={50} onClick={handleClick}/>
                <Image id='search' className={styles.icon} src="/icon/search.png" alt="search" width={50} height={50} onClick={handleClick}/>
                <Image id='activity' className={styles.icon} src="/icon/activity.png" alt="activity" width={50} height={50} onClick={handleClick}/>
            </div>
            <div className={styles.right_end}></div>
        </div>
    )
}

export default Footer;