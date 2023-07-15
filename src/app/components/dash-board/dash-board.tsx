import React from 'react'
import styles from './dash-board.module.css'
import Image from 'next/image'
import Header from '../header/header';

interface DashBoardProps {
    month: number;
    ammountOfTips: number;
}

const DashBoard: React.FC<DashBoardProps> = ({month, ammountOfTips}: DashBoardProps) => {
    return (
        <>
        <Header />
        <div className={styles.container}>
            <div className={styles.dashboard}>
                <h3>{month} 月のTips</h3>
                <h2>￥{ammountOfTips}</h2>
            </div>
        </div>
        </>
        
    )
}

export default DashBoard