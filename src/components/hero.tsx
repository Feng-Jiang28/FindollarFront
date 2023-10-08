import React from 'react';
import { useRef } from 'react';
import { Carousel, Button} from 'antd';
import 'antd/dist/reset.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import imageSrc from '/img/heroSlide.svg';



const Hero: React.FC = () => {
  const carouselRef = useRef(null);
  const size: SizeType = 'large';
  return (
    <div className="relative">
      <Carousel ref={carouselRef}>
        <div>
          <div
            className="w-screen h-screen text-white flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${imageSrc})` }}
          >
            <h1 className="mt-4 text-4xl font-bold">Online market for Students</h1>
            <h3>We Know how students want to trade their unneeded stuff</h3>
            <Button type="primary" size={size} className="bg-blue-500 hover:bg-blue-700">
              Start Now
            </Button>
          </div>
        </div>
        <div>
          <div
            className="w-screen h-screen text-white flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${imageSrc})` }}
          >
            <h1 className="mt-4 text-4xl font-bold">Online market for Students</h1>
            <h3>We Know how students want to trade their unneeded stuff</h3>
            <Button type="primary" size={size} className="bg-blue-500 hover:bg-blue-700">
              Start Now
            </Button>
          </div>
        </div>
      </Carousel>
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer"
        onClick={() => {
          carouselRef.current.prev();
        }}
      >
        <LeftOutlined className="text-white hover:text-gray-400" />
      </div>
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
        onClick={() => {
          carouselRef.current.next();
        }}
      >
        <RightOutlined className="text-white hover:text-gray-400" />
      </div>
    </div>
  );

};

export default Hero;
