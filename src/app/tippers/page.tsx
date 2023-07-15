import Image from 'next/image'
import Button from '../components/button/button'
import styles from './page.module.css'

export default function Tippers() {
  return (
    <main>
      <div>
        <div className={styles.main_visual}>
            <Image src="/tippers-logo.png" alt="tippers" width={320} height={150} />
            <h2>Try to change Japan</h2>
            <h2>By giving tips</h2>
        </div>
        <div className={styles.buttons}>
            <Button text="Log in" />
            <Button text="Sign up" />
        </div>
      </div>
    </main>
  )
}