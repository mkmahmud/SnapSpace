import React, { useContext } from 'react';
import { UserAuth } from '../../Context/AuthContext/AuthContext';
import Banar from './Banar/Banar';
import Content from './Content/Content';

const Home = () => {

  return (
    <div>
      <Banar></Banar>
      <Content></Content>
    </div>
  );
};

export default Home;