import React, { useContext } from 'react';
import { UserAuth } from '../../Context/AuthContext/AuthContext';
import Banar from './Banar/Banar';

const Home = () => {


  const { demo } = useContext(UserAuth)

  console.log(demo)

  return (
    <div>
      <Banar></Banar>
    </div>
  );
};

export default Home;