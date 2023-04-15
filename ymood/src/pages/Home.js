import React, { useEffect, useState} from 'react';
import Navbar from '../components/navbar';
import Presentation from '../components/presentation';
import Team from '../components/team';
import Visu from '../components/visuels';
import Links from '../components/links';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

function Home() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    });
    return () => {
      listen();
    }
  }, [])

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