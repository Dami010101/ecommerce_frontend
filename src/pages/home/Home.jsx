import React from 'react'
import Products from '../products/Products'
import BannerPosterLayout from '../../component/bannerPosterLayout/BannerPosterLayout'
import BrowseByCategory from '../../component/browseByCategory/BrowseByCategory'

const Home = () => {
  return (
    <div>
      <BannerPosterLayout/>
      <BrowseByCategory/>
      <Products/>
    </div>
  )
}

export default Home