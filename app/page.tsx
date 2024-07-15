import React from 'react'
import Subnav from './components/Subnav/Subnav'
import Burgernav from './components/Burgenav/Burgernav'
import styles from './page.module.css'
import Content1st from './components/Content1st/Content1st'
import Image from 'next/image'

function page() {
  return (
    <>
      <div className={styles.box}> 
        <div>    
          <Subnav/>
        </div> 
        <Content1st/>
        <div className={styles.nav}>
          <Burgernav/>
        </div>
      </div>
    </>
  )
}

export default page