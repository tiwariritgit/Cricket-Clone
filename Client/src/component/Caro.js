import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import '../Design/Caro.css';

const data = [
  {
   image: require('../Images/image4.jpg'), 
   caption:"M.S Dhoni",
   description:"Former Indian WC Winner Captain"
  },
  {
    image:require('../Images/image5.jpg'), 
    caption:"Virat Kohli",
    description:"India's Best Test Captain."
   },
   {
    image:require('../Images/image6.jpg'), 
    caption:"Rohit Sharma",
    description:"Present Indian Captain."
   },
   {
    image:require('../Images/image7.jpg'), 
    caption:"World Cup Trophy",
    description:"ICC Men's Cricket World Cup 2023"
   },
   {
    image:require('../Images/image10.jpg'), 
    caption:"India",
    description:"CWC 2011 Winner"
   },
   {
    image:require('../Images/image8.jpg'), 
    caption:"India",
    description:"CWC 1983 Winner"
   }
]


function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>  
            <div className="Abhi">
          <img
          className="Abhi"
          src={slide.image}
          alt="slider image"
        />
         </div>    
        <Carousel.Caption>
          <h3 className="caption">{slide.caption}</h3>
          <p className="disc">{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
    
  );
}
export default HomeCarousel;