import React from 'react'
import styles from './locationBoard.module.css'
import Image from 'next/image'

const LocationBoard: React.FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Image className={styles.icon} src="/icon/location.png" alt="location" width={30} height={30} />
            <div className={styles.location}>
                <h2 className={styles.address}>東京都</h2>
                <p className={styles.restaurant_name}>A支店</p>
            </div>
            
        </div>
    )
}

export default LocationBoard