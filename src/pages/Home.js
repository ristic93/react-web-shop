import React from 'react';
import FeaturedItems from '../components/FeaturedItems';
import HeroHeader from '../components/HeroHeader';
import Info from '../components/Info';
import Newsletter from '../components/Newsletter';

const Home = () => {
    
    return (
        <>
            <HeroHeader></HeroHeader>
            <FeaturedItems></FeaturedItems>
            <Newsletter></Newsletter>
            <Info></Info>
        </>
    );
};

export default Home;