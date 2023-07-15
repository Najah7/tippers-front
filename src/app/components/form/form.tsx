"use client";
import React, { useEffect } from 'react';
import styles from './form.module.css'
import Button from '../button/button';

interface FormProps {
    headerText: string
    firstInputName: string
    secondInputName: string
}



const Form: React.FC<FormProps> = ({ headerText, firstInputName, secondInputName }: FormProps) => {
    const [firstInput, setFirstInput] = React.useState('')
        const [secondInput, setSecondInput] = React.useState('')

        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target
            if (name === 'firstInput') {
                setFirstInput(value)
            } else {
                setSecondInput(value)
            }
        }

        // Najah(2023-07-15): This is for debugging purposes only. Plesase remove this when you are done.
        useEffect(() => {
            console.log('First Input:', firstInput);
          }, [firstInput]);

    return (
        <div className={styles.outer}>
            <div className={styles.container}>
                <div className={`${styles.box} ${styles.box_front}`}>
                    <h2 className={styles.email}>{firstInputName}</h2>
                    <input className={styles.input} type="text" placeholder={firstInputName} name="firstInput" value={firstInput} onChange={handleInputChange}/>
                    <h2 className={styles.password}>{secondInputName}</h2>
                    <input className={styles.input} type="text" placeholder={secondInputName} name="secondInput" value={secondInput} onChange={handleInputChange}/>
                    <Button text={headerText} />
                </div>
                <div className={`${styles.box} ${styles.box_back}`}>
                    <h1 className={styles.header_text}>{headerText}</h1>
                </div>
            </div>
        </div>
    )
}

export default Form