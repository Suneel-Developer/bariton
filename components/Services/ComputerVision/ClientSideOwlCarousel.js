import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel3'), {
  ssr: false,
});

export default OwlCarousel;
