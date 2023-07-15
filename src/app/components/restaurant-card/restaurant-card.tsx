import React from 'react'
import styles from './restaurant-card.module.css'
import Image from 'next/image'
import Button from '../button/button'

interface RestaurantCardProps {
    name: string
    address: string
    open: string
    close: string
    numOfEmployee: number
    imageUrl?: string
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, address, open, close, numOfEmployee, imageUrl }: RestaurantCardProps) => {
    return (
        <div className={styles.card}>
            <Image src={imageUrl? imageUrl: "/sample/others/question-mark.jpg"} alt="restaurant" width={80} height={80} />
            <h2>{name}</h2>
            <h3>{address}</h3>
            <h3>Open: {open}</h3>
            <h3>Close: {close}</h3>
            <p> {numOfEmployee} employee  working</p>
        </div>
    )
}

export default RestaurantCard