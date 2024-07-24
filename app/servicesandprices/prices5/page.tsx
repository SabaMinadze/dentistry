import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'
import PriceCard from '@/app/components/PriceCard/PriceCard'

function page() {
  return (
    <>
        <br/>
        <PriceCard txt="ფირფიტა: 300₾ - 450₾"/>
        <br/>
        <PriceCard txt="ბრეკეტი: 350₾ - 600₾"/>
        <br/>
        <PriceCard txt="ელაინერი: 4500₾ დან"/>
        <br/>


    </>
  )
}

export default page