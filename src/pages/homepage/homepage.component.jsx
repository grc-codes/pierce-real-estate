import React from 'react';
import Hero from '../../components/hero/hero.component';
import Services from '../../components/services/services.component';
import Featured from '../../components/featured/featured.component';

const HomePage = () => (
    <div className='home-page'>
        <Hero />
        <Services />
        <Featured />
    </div>
);

export default HomePage;