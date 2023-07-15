import Image from 'next/image'
import Button from '../components/button/button'
import styles from './page.module.css'
import DashBoard from '../components/dash-board/dash-board'
import HistoryList from '../components/history-list/history-list'
import DetailButton from '../components/detail-button/detail-button'

export default function Activity() {
  return (
    <main className={styles.container}>
      <DashBoard month={7} ammountOfTips={500}/>
      <HistoryList amountOfDeal={3000}/>
      <DetailButton />
    </main>
  )
}