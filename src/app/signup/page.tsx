import Form from '../components/form/form'
import Image from 'next/image'
import styles from './page.module.css'


export default function SignUp() {
  return (
    <main className={styles.container}>
      <Image src="/tippers-logo.png" alt="tippers" width={270} height={100} />
      <Form headerText='Sign Up' firstInputName='Email' secondInputName='New Password' />
    </main>
  )
}