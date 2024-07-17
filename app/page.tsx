import React from 'react'
import Subnav from './components/Subnav/Subnav'
import Burgernav from './components/Burgenav/Burgernav'
import styles from './page.module.css'
import Content1st from './components/Content1st/Content1st'
import Image from 'next/image'
import Card from './components/Card/Card'

function page() {
  return (
    <>
      <div className={styles.box}>
        <div>    
          <Subnav/>
        </div> 
        <div className={styles.nav}>
          <Burgernav/>
        </div>

          <div className={styles.content1st}>
            <Content1st/>
          </div>
            <div className={styles.box7}>
              <Card/>
            </div>
      </div>
    </>
  )
}

export default page