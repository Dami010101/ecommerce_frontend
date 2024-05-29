import React from 'react'
import Products from '../products/Products'
import BannerPosterLayout from '../../component/bannerPosterLayout/BannerPosterLayout'
import BrowseByCategory from '../../component/browseByCategory/BrowseByCategory'
import Newsletter from '../../component/newsletter/Newsletter'
import CTA from '../../component/cta/CTA'

const Home = () => {
  return (
    <div className=' bg-white'>
      <BannerPosterLayout/>
      <CTA/>
      <BrowseByCategory/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default Home