import React from 'react';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner/Banner';
import Featurebanner from './Featurebanner/Featurebanner';
import Offerbanner from './Offerbanner/Offerbanner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Offerbanner></Offerbanner>
            <Products></Products>
            <Featurebanner></Featurebanner>
            <Reviews></Reviews>
        </>
    );
};

export default Home;