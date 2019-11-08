import React from 'react';
import Coverflow from 'react-coverflow';
import Music from './Music.png'
import InfiniteCarousel from 'react-leaf-carousel';
import { Navbar,Carousel } from 'react-bootstrap';
import Movie from './Movie'
import Spoong from './Spoong.jpg'
import Gumball from './Gumball.png'
import dora from './dora.jpg'
import Nemo from './Nemo.jpg'
import goofy from './goofy.jpg'
import disney from './disney.jpg'
import hz from './hz.jpg'
import Dor_annd from './Dor_annd.jpg'
import Aladdin from './Aladdin.jpg'
import lionking from './lionking.jpg'
import specton from './specton.jpg'
import b7 from './b7.png'
import b6 from './b6.jpg'
import b5 from './b5.jpeg'
import b4 from './b4.jpeg'
import b3 from './b3.jpg'
import b2 from './b2.jpeg'
import b1 from './b1.jpg'
import m7 from './m7.jpg'
import m6 from './m6.jpg'
import m5 from './m5.jpg'
import m4 from './m4.jpg'
import m3 from './m3.jpg'
import m2 from './m2.jpeg'
import m1 from './m1.jpg'
import mv1 from './mv1.png'
import mv2 from './mv2.jpg'
import mv3 from './mv3.jpg'
import mv4 from './mv4.jpeg'
import mv5 from './mv5.jpeg'
import mv6 from './mv6.jpeg'
import mv7 from './mv7.jpeg'




const Test = function () {
 
  return ( 
      <div >

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Dor_annd}
      alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={lionking}
      alt="Third slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Aladdin }
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand >C A R T O O N </Navbar.Brand>
  
  
  </Navbar>
  
</>

<InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=''
        src={Gumball}
      />
    </div>
    <div>
    <a href = './Movie'  >  <img
        alt=''
        src= {Spoong}
      />  </a>  
    </div>
    <div>
      <img
        alt=''
        src={dora}
      />
    </div>
    <div>
      <img
        alt=''
        src={Nemo}
      />
    </div>
    <div>
      <img
        alt=''
        src={goofy}
      />
    </div>
    <div>
      <img
        alt=''
        src={disney}
      />
    </div>
    <div>
      <img
        alt=''
        src={hz}
      />
    </div>
  
  </InfiniteCarousel>

  <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand >M O V I E</Navbar.Brand>
  
  
  </Navbar>
  
</>
  <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=''
        src={mv1}
      />
    </div>
    <div>
    <a href = './Movie'  >  <img
        alt=''
        src= {mv2}
      />  </a>  
    </div>
    <div>
      <img
        alt=''
        src={mv3}
      />
    </div>
    <div>
      <img
        alt=''
        src={mv4}
      />
    </div>
    <div>
      <img
        alt=''
        src={mv5}
      />
    </div>
    <div>
      <img
        alt=''
        src={mv6}
      />
    </div>
    <div>
      <img
        alt=''
        src={mv7}
      />
    </div>
  
  </InfiniteCarousel>
  <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand >M U S I C</Navbar.Brand>
  
  
  </Navbar>
  
</>

  <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=''
        src={m1}
      />
    </div>
    <div>
    <a href = './Movie'  >  <img
        alt=''
        src= {m2}
      />  </a>  
    </div>
    <div>
      <img
        alt=''
        src={m3}
      />
    </div>
    <div>
      <img
        alt=''
        src={m4}
      />
    </div>
    <div>
      <img
        alt=''
        src={m5}
      />
    </div>
    <div>
      <img
        alt=''
        src={m6}
      />
    </div>
    <div>
      <img
        alt=''
        src={m7}
      />
    </div>
  
  </InfiniteCarousel>
  <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand >B O O K S</Navbar.Brand>
  
  
  </Navbar>
  
</>

  <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=''
        src={b1}
      />
    </div>
    <div>
    <a href = './Movie'  >  <img
        alt=''
        src= {b2}
      />  </a>  
    </div>
    <div>
      <img
        alt=''
        src={b3}
      />
    </div>
    <div>
      <img
        alt=''
        src={b4}
      />
    </div>
    <div>
      <img
        alt=''
        src={b5}
      />
    </div>
    <div>
      <img
        alt=''
        src={b6}
      />
    </div>
    <div>
      <img
        alt=''
        src={b7}
      />
    </div>
  
  </InfiniteCarousel>


  </div>
  )
    }



export default Test
