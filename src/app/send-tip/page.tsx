import Image from 'next/image'
import styles from '../signup/page.module.css'
import TipForm from '../components/tip-form/tip-form'


export default function LogIn() {
  return (
    <main className={styles.container}>
      <Image src="/tippers-logo.png" alt="tippers" width={270} height={100} />
      <TipForm />
    </main>
  )
}