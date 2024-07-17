import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'

function Card(props:any) {
  return (
    <>
    <div className={styles.cardBox}>
      <h1 className={styles.txt}>ზაურ ზარიძე</h1>
      <p className={styles.txt2}>ექიმი ორთოპენდი</p>
      <p className={styles.txt2}>ქირურგი იმპლანტოლოგი</p>
      <div className={styles.img}><Image
          src="/eqimi.jpg"
          width={150}
          height={200}
          alt="Picture of the author"
        /></div>
      <ul className={styles.list}>
        <li>იმპლანტაცია</li>
        <li>ესთეტიური სტომატოლოგია</li>
        <li>ღრძილების ქირურგიული პლასტიკა</li>
        <li>კარიესის მკურნალობა</li>
      </ul>
        <center><div>
          <h2 className={styles.txt3}>დენტისტრი</h2>
          <h2 className={styles.txt4}>551 10 19 20</h2>
          <h3 className={styles.txt5}>პეკინის ქუჩა 17, Tbilisi, Georgia</h3>
        </div></center>

    </div>
    </>
  )
}

export default Card