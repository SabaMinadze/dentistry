import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'
import PriceCard from '@/app/components/PriceCard/PriceCard'

function page() {
  return (
    <>
        <br/>
        <PriceCard txt="პარადონტოლოგიური წმენდა: 180₾ - 250₾"/>
        <br/>
        <PriceCard txt="ვექტორ-თერაპია: 450₾ - 700₾"/>
        <br/>
        <PriceCard txt="გინგიგო-პლასტიკა: 150₾ დან"/>
        <br/>
        <PriceCard txt="ღიმილის ხაზის კორექცია: 1200₾ დან"/>
        <br/>
        <PriceCard txt="ღიმილის ხაზის კორექცია: 1200₾ დან"/>
      
    </>
  )
}

export default page