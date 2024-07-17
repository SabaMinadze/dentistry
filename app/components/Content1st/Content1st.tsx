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
      <div className={styles.content}>
        <div className={styles.box}>
          <h1>მოგესალმებით ჩვენ ვართ ნომერ პირველი და მთავარი წამყვანი სტომატოლგიური კლინიკა 
            მთელ ამიერ და იმიერ კავკასიას შორის</h1>
            <h2>ჩვენთნ თქვენ შეგიძლიან ისწავლოთ ფეხბურთის თამაში ბებიას მოტეხილი კბილით</h2>
            <h2>ჩვენთნ თქვენ ყველა სპორტულ და სექსუალურ სურვილს აიხდენთ</h2>
          <h2>ფეხბურთის მწვრთნელი:</h2>
          
          <h1 className={styles.saba}>საბა მინაძე</h1>

          <div className={styles.img3}><Image
          src="/saba.jpg"
          width={410}
          height={300}
          alt="Picture of the author"
        /></div>
        </div>

        

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
        <br/>
         <div className={styles.img3}><Image
          src="/kacurikaci.jpg"
          width={410}
          height={450}
          alt="Picture of the author"
        /></div>
        <br/>
        <div className={styles.img3}><Image
          src="/gimili.jpg"
          width={410}
          height={450}
          alt="Picture of the author"
        /></div>
        <br/>
         <div className={styles.img3}><Image
          src="/salami.jpg"
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