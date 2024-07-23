import React from 'react'
import styles from './Card2.module.css'
import Image from 'next/image'

function Card2(props:any) {
  return (
    <>
    <div className={styles.cardBox}>
      <h1 className={styles.txt}>{props.name}</h1>
      <p className={styles.txt2}>{props.prof}</p>
      <p className={styles.txt2}>{props.prof2}</p>
      <div className={styles.img}>{props.img}</div>
      <ul className={styles.list}>
        <li className={styles.list1}>{props.duty1}</li>
        <li className={styles.list2}>{props.duty2}</li>
        <li className={styles.list3}>{props.duty3}</li>
        <li className={styles.list4}>{props.duty4}</li>
        <li className={styles.list4}>{props.duty5}</li>
      </ul>
        <center><div>
          <h2 className={styles.txt3}>დენტისტრი</h2>
          <h2 className={styles.txt4}>551 10 19 20</h2>
          <h3 className={styles.txt5}>პეკინის ქუჩა 1711111, Tbilisi, Georgia</h3>
        </div></center>

    </div>
    </>
  )
}

export default Card2