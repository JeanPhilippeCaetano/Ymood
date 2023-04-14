import React from 'react';
import Navbar from '../components/navbar';
import Presentation from '../components/presentation';
import Team from '../components/team';
import Visu from '../components/visuels';
import Links from '../components/links';

function Home() {
  return (
    <div>
      <Navbar />
      <Presentation/>
      <Team/>
      <Visu/>
      <Links/>
    </div>
  )
};


export default Home;