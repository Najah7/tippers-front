'use client'
import Image from 'next/image'
import Button from '../components/button/button'
import styles from './page.module.css'
import DashBoard from '../components/dash-board/dash-board'
import HistoryList from '../components/history-list/history-list'
import DetailButton from '../components/detail-button/detail-button'
import StaffList from '../components/staff-list/staff-list'
import LocationBoard from '../components/locationBoard/locationBoard'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { useRouter } from 'next/navigation'


export default function Waiters() {
  const router = useRouter()
  const handleButtonClick = () => {
    router.push("/send-tip")
  }

  return (
    <main className={styles.container}>
      <Header />
      <LocationBoard address='東京都渋谷区' name='A店 Coffee'/>
      <StaffList />
      <DetailButton onClick={handleButtonClick} />
      <Footer />
    </main>
  )
}