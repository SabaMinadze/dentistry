import React from 'react'
import styles from './PriceCard.module.css'

function PriceCard(props:any) {
  return (
    <div className={styles.box}>
      <h1 className={styles.txt}>{props.txt}</h1>


    </div>
  )
}

export default PriceCard
