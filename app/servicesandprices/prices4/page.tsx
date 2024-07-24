import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'
import PriceCard from '@/app/components/PriceCard/PriceCard'

function page() {
  return (
    <>
        <br/>
        <PriceCard txt="პროთეზირება: 250₾ - 700₾"/>
        <br/>
        <PriceCard txt="ცირკონოკერამიკა: 450₾ - 600₾"/>
        <br/>
        <PriceCard txt="მეტალოკერამიკა: 180₾ - 250₾"/>
        <br/>

    </>
  )
}

export default page