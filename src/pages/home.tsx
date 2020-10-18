import React from 'react';
import { Image } from '../components/image';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Image name="background.png" path="images" alt="Age of Empires" />
    </div>
  );
};

export default Home;
