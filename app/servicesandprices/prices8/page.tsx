import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'
import PriceCard from '@/app/components/PriceCard/PriceCard'

function page() {
  return (
    <>
        <br/>
        <PriceCard txt="მხატვრული რესტავრაცია: 200₾ - 250₾"/>
        <br/>
        <PriceCard txt="მერილენდის ხიდი: 300₾ - 350₾"/>
        <br/>
        <PriceCard txt="სკაისი: 150₾ დან"/>
        <br/>
        <PriceCard txt="გათეთრება: 350₾ - 700₾"/>
        <br/>


    </>
  )
}

export default page