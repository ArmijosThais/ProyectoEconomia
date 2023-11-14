import Carousel from 'react-bootstrap/Carousel';

const images = [
  'https://www.finesa.com.co/media/tendencias-de-seguros-finanprimas.jpeg',
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
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DarkVariantExample;
