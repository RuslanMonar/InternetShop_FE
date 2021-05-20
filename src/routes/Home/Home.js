import React from 'react';

import Header from './../../modules/Navigation/Header';
import  Footer  from './../../modules/Navigation/Footer';
import MainPage from './Main';

const Home = () => {
    return (
        <div>
            <Header />
           
            <MainPage />
            <Footer />
        </div>
    )
}

export default Home