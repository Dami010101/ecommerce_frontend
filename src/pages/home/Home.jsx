import React from 'react'
import Products from '../products/Products'
import BannerPosterLayout from '../../component/bannerPosterLayout/BannerPosterLayout'
import BrowseByCategory from '../../component/browseByCategory/BrowseByCategory'
import Newsletter from '../../component/newsletter/Newsletter'

const Home = () => {
  return (
    <div className=' bg-white'>
      <BannerPosterLayout/>
      <BrowseByCategory/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default Home