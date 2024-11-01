import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import mountain from '../PICS/mountain.jpg';
import s1 from '../PICS/s1.png';
import s2 from '../PICS/s2.png';
import s3 from '../PICS/s3.png';
import s4 from '../PICS/s4.png';
import s5 from '../PICS/s5.png';
import s6 from '../PICS/s6.png';
import s7 from '../PICS/s7.png';

const Slideshow = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(1);


  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > images.length) newIndex = 1;
      if (newIndex < 1) newIndex = images.length;
      return newIndex;
    });
  };

  const showSlides = (index) => {
    const slides = document.getElementsByClassName('mySlides');
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('fade');
      slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";
    slides[index - 1].classList.add('fade');
  };

  return (
    <div className="mountain-roler">
      {images.map((image, i) => (
        <div key={i} className="mySlides">
          <img src={image} alt={`Slide ${i + 1}`} className="mountain" />
        </div>
      ))}
      <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
      <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
    </div>
  );
};

const PlayPicture = () => {
  const images1 = [

    s2, s1, s3, s4, s5,s6,s7, mountain,
  ];

  return (
    <div>
      <Slideshow images={images1} />
    </div>
  );
};

export default PlayPicture;
