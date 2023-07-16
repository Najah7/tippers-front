import Form from '../components/form/form'
import Image from 'next/image'
import styles from '../signup/page.module.css'


export default function LogIn() {
  return (
    <main className={styles.container}>
      <Image src="/tippers-logo.png" alt="tippers" width={270} height={100} />
      <Form headerText='Log In' firstInputName='Email' secondInputName='Password' redirectUrl='/restaurants' />
    </main>
  )
}