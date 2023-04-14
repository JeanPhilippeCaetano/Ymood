import React from 'react';
import Navbar from '../components/navbar';
import Presentation from '../components/presentation';
import Team from '../components/team';
import Visu from '../components/visuels';
import Links from '../components/file';

function Home() {
  return (
    <div>
      <Navbar />
      <Presentation/>
      <Team/>
      <Visu/>
      <Links/>

      <hr />
      <div class="text-center mb-3">
        Fait avec 😴 pour le Challenge 48h
      </div>
    </div>

  )
};


export default Home;