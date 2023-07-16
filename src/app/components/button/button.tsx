import React from 'react'
import styles from './button.module.css'
import Image from 'next/image'

interface ButtonProps {
    text: string
    onClick?: ()=> void
}

const Button: React.FC<ButtonProps> = ({ text, onClick }): JSX.Element => {
    return (
        <button className={styles.button} onClick={onClick}>{text}</button>
    )
}

export default Button