import React from 'react'
import BannerItem from './BannerItem'

function BannerList() {
    return (
        <div>
      <section className="slider_section">
  <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="first-slide" src="images/banner2.jpg" alt="First slide" />
        <div className="container">
         <BannerItem haeding="products" description="latest eader will be distracted by the readable content of a page

" ntn="getQuaote"/>
        </div>
      </div>

    </div>

  </div>
</section>


        </div>
    )
}

export default BannerList
