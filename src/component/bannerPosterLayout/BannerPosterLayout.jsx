import React from 'react'
import Banner from '../banner/Banner'
import Poster from '../poster/Poster'


const BannerPosterLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="lg:w-2/3 w-full">
        <Banner/>
      </div>
      <div className="lg:w-1/3 w-full">
        <Poster />
      </div>
    </div>  )
}

export default BannerPosterLayout