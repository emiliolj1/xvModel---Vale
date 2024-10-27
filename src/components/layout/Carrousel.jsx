import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function Carrousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/qYnVbiZ.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/97Wwhkm.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/KT4UVeF.png'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/abAdWqz.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/CzWBhRt.jpeg'/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className='carrousel' src='https://i.imgur.com/vpkBHkt.jpeg'/>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Carrousel;