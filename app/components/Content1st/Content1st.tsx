import React from 'react'
import styles from './Content1st.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../Card/Card'
import KitxvadaTema from '../KitxvadaTema/KitxvadaTema'

function Content1st() {
  return (
    <>
    <div className={styles.dzaanbigbox}>
    <center><Link href="/">
                <Image src="/dentistrylogo.jpg"
                height={170} 
                width={170} 
                alt="eror" 
                className={styles.logo}/>
              </Link></center>
            <div className={styles.content}>
              <div className={styles.box}>
              <center><h1 className={styles.maintxt}>დენრტისტრი</h1></center>
              <br/><br/><br/>
              <KitxvadaTema/>     
      </div>
 
            <br/>
              <h1 className={styles.txt}>მოგესალმებით ჩვენ ვართ ნომერ პირველი და მთავარი წამყვანი სტომატოლგიური კლინიკა 
                მთელ საქართველოში</h1>
      
              
              <h1 className={styles.saba}>ჩვენი ექიმები:</h1>
            </div>
      </div>
    </>
  )
}

export default Content1st