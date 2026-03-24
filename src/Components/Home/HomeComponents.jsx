import React from 'react'
import FeatureProperties from './FeatureProperties'
import RecentSales from './RecentSales'
import HowWeWorks from './HowWeWorks'
import WhoWeAre from './WhoWeAre'

const HomeComponents = () => {
  return (
    <div>
      <WhoWeAre/>
      <FeatureProperties/>
      <HowWeWorks/>
      <RecentSales/>

    </div>
  )
}

export default HomeComponents