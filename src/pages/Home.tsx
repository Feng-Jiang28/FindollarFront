import React from 'react';
import PopularCategories from "@/components/PopularCategories";
import Hero from "@/components/Hero"

const TopSection = () => <div className="p-6 bg-blue-200">Navbar</div>
const HeroSection = () => <div className="p-6 bg-green-200">hero</div>

const Recommendation = () => <div className="p-6 bg-gray-200">Recommendation</div>
const Footer = () => <div className="p-6 bg-yellow-200">Footer</div>
const Home = () => {

  return(
    <div className="bg-gray-100 min-h-screen p-8">

      {/*Xiaoshu*/}
      <TopSection/>
      {/*Xiaoshu*/}
      {/*jiawen*/}
      <Hero />
      {/*jiawen*/}
      {/*Feng*/}
      <PopularCategories/>
      {/*Feng*/}
      <Recommendation/>
      <Footer/>
    </div>
);

};

export default Home;
