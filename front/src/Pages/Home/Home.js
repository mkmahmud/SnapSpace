import React, { useContext } from 'react';
import { UserAuth } from '../../Context/AuthContext/AuthContext';

const Home = () => {


    const {demo} = useContext(UserAuth)
 
    console.log(demo)

    return (
        <div>
          Home  
        </div>
    );
};

export default Home;