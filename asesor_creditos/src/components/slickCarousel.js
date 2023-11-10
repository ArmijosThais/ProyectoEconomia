// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import FaArrowRight from '../icons/FaArrowRight';
// import FaArrowLeft from '../icons/FaArrowLeft';

// const Carousel = () => {
//   const images = [
//     'https://www.pichincha.com/content/published/api/v1.1/assets/CONTFE1D2042C989452AB6687796A01DEB80/native?cb=_cache_0468&channelToken=712a6518832146c488cdf196228d8c00',
//     'https://www.pichincha.com/content/published/api/v1.1/assets/CONTE515BE9D4FB548C29B73094F87B752E0/native?cb=_cache_0468&channelToken=712a6518832146c488cdf196228d8c00',
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const arrowButtonStyle = {
//     position: 'absolute',
//     top: '210px',
//     transform: 'translateY(-50%)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '40px',
//     width: '40px',
//     borderRadius: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.2)',
//     cursor: 'pointer',
//     margin: '0px 75px',
//   };

//   let sliderRef;

//   const handlePrevious = () => {
//     console.log('Previous clicked');
//     sliderRef && sliderRef.slickPrev();
//   };

//   const handleNext = () => {
//     console.log('Next clicked');
//     sliderRef && sliderRef.slickNext();
//   };

//   return (
//     <div>
//       <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img
//               src={image}
//               alt={`Imagen ${index + 1}`}
//               style={{ objectFit: 'cover', width: '100%', height: '300px' }}
//             />
//           </div>
//         ))}
//       </Slider>
//       <div
//         style={{
//           ...arrowButtonStyle,
//           left: '10px',
//         }}
//         onClick={handlePrevious}
//       >
//         <FaArrowLeft style={{ cursor: 'pointer' }} />
//       </div>
//       <div
//         style={{
//           ...arrowButtonStyle,
//           right: '10px',
//         }}
//         onClick={handleNext}
//       >
//         <FaArrowRight style={{ cursor: 'pointer' }} />
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import Carousel from 'react-bootstrap/Carousel';

const images = [
  'https://www.pichincha.com/content/published/api/v1.1/assets/CONTFE1D2042C989452AB6687796A01DEB80/native?cb=_cache_0468&channelToken=712a6518832146c488cdf196228d8c00',
  'https://www.pichincha.com/content/published/api/v1.1/assets/CONTE515BE9D4FB548C29B73094F87B752E0/native?cb=_cache_0468&channelToken=712a6518832146c488cdf196228d8c00',
];

function DarkVariantExample() {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ objectFit: 'cover', width: '100%', height: '300px' }}
          />
          <Carousel.Caption>
            <h5>{`Slide ${index + 1} label`}</h5>
            <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Slide ${
              index + 1
            }`}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DarkVariantExample;
