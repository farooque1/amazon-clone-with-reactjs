import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Sponsor from './Sponsor';

const Slide = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          paritialVisibilityGutter: 60,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      const images = [
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      ];


    return (
        <div className='container-fluid mt-5 mb-5'>
         <hr />   
         <p className='text-center fs-4'>Up to 50% off on electronic products | Small businesses</p>   
        <hr />
        <Carousel 
        itemClass="image-item"
        responsive={responsive}>
        <div><img src="./image/pro2.jpg" style={{width:'250px'}} alt='image'/></div>
        <div><img src="./image/pro3.jpg" style={{width:'250px'}} alt='image'/></div>
        <div><img src="./image/pro4.jpg" style={{width:'250px'}} alt='image'/></div>
        <div><img src="./image/pro5.jpg" style={{width:'250px'}} alt='image'/></div>
        <div><img src="./image/pro6.jpg" style={{width:'250px'}} alt='image'/></div>
        <div><img src="./image/pro7.jpg" style={{width:'250px'}} alt='image'/></div>
        <div><img src="./image/pro8.jpg" style={{width:'250px'}} alt='image'/></div>
        <div><img src="./image/pro9.jpg" style={{width:'250px'}} alt='image'/></div>
        <div><img src="./image/pro10.jpg" style={{width:'250px'}} alt='image'/></div>
        <div><img src="./image/pro1.jpg" style={{width:'250px'}} alt='image'/></div>
      </Carousel>
      <hr />

      <Sponsor />
        </div>

    )
}

export default Slide;