import React from 'react';
import Categories from '../../components/Categories/Categories';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="Feature" />
      <Categories />
      <FeaturedProducts type="Trending" />
    </div>
  );
}

export default Home;
