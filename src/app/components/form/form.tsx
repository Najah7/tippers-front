'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react';
import styles from './form.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface FormProps {
    headerText: string
    firstInputName: string
    secondInputName: string
    redirectUrl: string
}

const Form: React.FC<FormProps> = ({ headerText, firstInputName, secondInputName, redirectUrl }: FormProps) => {
    const router = useRouter();
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

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        // TODO: Add form validation and submit logic here

        // Redirect to the provided URL
        router.push(redirectUrl);
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
                    <TextField id="outlined-basic" sx={{width: '90%', margin: '10px auto 0px auto'}} label={firstInputName} variant="outlined" name="firstInput" value={firstInput} onChange={handleInputChange}  />
                    <h2 className={styles.password}>{secondInputName}</h2>
                    <TextField id="outlined-basic" sx={{width: '90%', margin: '10px auto 0px auto'}} label={secondInputName} variant="outlined" name="secondInput" value={secondInput} onChange={handleInputChange} type="password" />
                    <Button sx={{backgroundColor: '#a083bb', '&:hover': {backgroundColor: '#a083bb'}, borderRadius: '50px',}} variant="contained" onClick={handleFormSubmit}>{headerText}</Button>
                </div>
                <div className={`${styles.box} ${styles.box_back}`}>
                    <h1 className={styles.header_text}>{headerText}</h1>
                </div>
            </div>
        </div>
    )
}

export default Form