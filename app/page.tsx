import React from 'react'
import Subnav from './components/Subnav/Subnav'
import Burgernav from './components/Burgenav/Burgernav'
import styles from './page.module.css'

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
      </div>
    </>
  )
}

export default page