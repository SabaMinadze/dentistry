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
      <br/>
        <div className={styles.img}><Image
          src="/kaci.jpg"
          width={410}
          height={550}
          alt="Picture of the author"
        /></div>

        <div>
          <br/>
          <div className={styles.img2}><Image
          src="/operacia.jpg"
          width={410}
          height={467}
          alt="Picture of the author"
        /></div>
        <br/>

        <div className={styles.img3}><Image
          src="/zura.jpg"
          width={410}
          height={450}
          alt="Picture of the author"
        /></div>
         <div className={styles.img3}><Image
          src="/kacurikaci.jpg"
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