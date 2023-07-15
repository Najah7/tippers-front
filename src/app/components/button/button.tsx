import React from 'react'
import styles from './button.module.css'
import Image from 'next/image'

interface ButtonProps {
    text: string
}

const Button: React.FC<ButtonProps> = ({ text }): JSX.Element => {
    return (
        <button className={styles.button}>{text}</button>
    )
}

export default Button