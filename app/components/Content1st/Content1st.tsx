import React from 'react'
import styles from './Content1st.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Content1st() {
  return (
    <>
        <Link href="/">
          <Image src="/dentistrylogo.jpg"
          height={170} 
          width={170} 
          alt="eror" 
          className={styles.logo}/>
        </Link>
      <div className={styles.img}><Image
        src="/dentist.jpg"
        width={1050}
        height={550}
        alt="Picture of the author"
      /></div>

      <div>
        <h1 className={styles.txt}>ეს არის ჩვენი კლინიკის სამუშაო ადგილი</h1>
        <br/>
        <div className={styles.img2}><Image
        src="/dentist2.jpg"
        width={445}
        height={467}
        alt="Picture of the author"
      /></div>

      <div className={styles.img3}><Image
        src="/wameba.png"
        width={1505}
        height={1500}
        alt="Picture of the author"
      /></div>

      </div>
    </>
  )
}

export default Content1st