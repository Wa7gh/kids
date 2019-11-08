import React from 'react'
import Logo from './logo.png';
import Device from './device.png';
import Fram from './fram.gif'
import Music from './Music.png'
import Read from './Read.png'
import Divbd from './Divbd.png'
import Rainbow from './Rainbow.png'
import Divbd1  from './Divbd copy.png';
import Test from './Test'
import { Carousel, Button, Card } from 'react-bootstrap';



const Home = () => {
    return (
        <div>

     <Card className="main">
     <div className="header">
            {/* <img src={Rainbow} alt='website logo' className="logo" style={{ width: '9rem' }} /> */}
            <a href="./Test"><Button className="rainbow-button"  > <img src={Rainbow} alt='website logo'  style={{ width: '30%' }} /></Button></a> 
     </div>
     <Card.Body className="text" >YOUNG FUTURE WEBSITE </Card.Body>
    </Card>



<Card className="Description">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Divbd1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>M O V I E S</h3>
      <p>We always select the best exclusive Movies for our kids.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Read}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>B O O K S</h3>
      <p>We always select the best Books for our kids.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Music}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>M U S I C </h3>
      <p>We always select the best enjoyable Music for our kids.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Card>





<Card className="Cardsacand"  >
  <Card.Body>
      <div className="middel">
        <img src ={Fram} className="InHome"/>   
        <img  className="ImgHome" src={Device}/>
  </div>
  <Card.Text className="text1">
  Watch everywhere.... <br/>
  On your Phone, Tablet, Laptop, and TV.
    </Card.Text>
 
  </Card.Body>
</Card>

 </div>
    )
}

export default Home
