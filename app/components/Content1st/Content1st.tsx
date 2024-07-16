import React from 'react'
import styles from './Content1st.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Content1st() {
  return (
    <>
        <Link href="/">
          <Image src="/algani.png"
          height={170} 
          width={170} 
          alt="eror" 
          className={styles.logo}/>
        </Link>
      <div className={styles.content}>
        <div className={styles.img}><Image
          src="/dentist.jpg"
          width={410}
          height={550}
          alt="Picture of the author"
        /></div>

        <div>
          <h1 className={styles.txt}>ეს არის ჩვენი კლინიკის სამუშაო ადგილი</h1>
          <br/><br/><br/><br/><br/><br/>
          <div className={styles.img2}><Image
          src="/dentist2.jpg"
          width={410}
          height={467}
          alt="Picture of the author"
        /></div>

        <div className={styles.img3}><Image
          src="/wameba.png"
          width={410}
          height={450}
          alt="Picture of the author"
        /></div>
        </div>
      </div>
    </>
  )
}

export default Content1st