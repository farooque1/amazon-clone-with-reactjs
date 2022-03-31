import React from 'react'
import Product from './Product'
export default function Sponsor() {
  return (
    <div className='container'>

<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="./image/banner6.jpg" class="d-block w-100" alt="..." />
        Sponsored.
    </div>
  </div>
</div>

        <div className='container-fluide'>
        <hr />
        <Product />
        </div>
        <hr />
    </div>
  )
}
