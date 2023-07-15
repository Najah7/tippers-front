"use client"
import React, { useEffect } from 'react'
import styles from './searchBar.module.css'
import Image from 'next/image'

interface searchBarProps {
    placeHolder?: string
}

const searchBar: React.FC<searchBarProps> = ({ placeHolder }: searchBarProps) => {    

    const [search, setSearch] = React.useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    // NOTE(Najah): For debugging. Please remove this later.
    useEffect(() => {
        console.log(search)
    }, [search])


    return (
        <div className={styles.container}>
            <Image className={styles.icon} src="/icon/search.png" alt="search" width={30} height={30} />
            <input className={styles.input} type="text" placeholder={placeHolder} value={search} onChange={handleChange} />
        </div>
    )
}

export default searchBar