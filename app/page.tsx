import React from 'react'
import Subnav from './components/Subnav/Subnav'
import Burgernav from './components/Burgenav/Burgernav'
import styles from './page.module.css'

function page() {
  return (
    <>
      <div className={styles.box}>
          <Subnav/>
          <Burgernav/>
      </div>
    </>
  )
}

export default page