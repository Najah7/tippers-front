
import { ReactNode } from 'react'
import styles from './layout.module.css';

type Props = {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
        <body className={styles.body}>
            {children}
          <div className={styles.right_angle_triangle}></div>
        </body>
  )
}

export default Layout;