import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Offerbanner from './Offerbanner/Offerbanner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Offerbanner></Offerbanner>
            <Products></Products>
        </>
    );
};

export default Home;