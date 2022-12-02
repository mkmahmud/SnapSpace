import React, { useContext } from 'react';
import { UserAuth } from '../../Context/AuthContext/AuthContext';
import Banar from './Banar/Banar';
import Content from './Content/Content';
import Steps from './Steps/Steps';

const Home = () => {

  return (
    <div>
      <Banar></Banar>
      <Content></Content>
      <Steps></Steps>
    </div>
  );
};

export default Home;