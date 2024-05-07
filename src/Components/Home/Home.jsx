import React from 'react';
import './Home.css'; 
import Photo from '../../Image/myphoto.jpg';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to my react app!</h1>
      <h2>Hello I am Asim Ghimire</h2>
      <img src={Photo} alt="Your Photo" />
    </div>
  );
}

export default Home;
