import React from 'react'
import BannerPosterLayout from '../../component/bannerPosterLayout/BannerPosterLayout'
import BrowseByCategory from '../../component/browseByCategory/BrowseByCategory'
import Newsletter from '../../component/newsletter/Newsletter'
import CTA from '../../component/cta/CTA'
import HomeContent from '../../component/homeContent/HomeContent'

const Home = () => {
  return (
    <div className=' bg-white'>
      <BannerPosterLayout/>
      <CTA/>
      <BrowseByCategory/>
      <HomeContent/>
      <Newsletter/>
    </div>
  )
}

export default Home