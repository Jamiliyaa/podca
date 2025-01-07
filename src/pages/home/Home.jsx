import React from 'react';
import style from '../home/Home.module.scss';
import Layout from '../../components/common/layout/Layout';
import Sectioneone from './components/sectioneone/Sectioneone';
import Behindmicrofon from './components/behindmicrofon/Behindmicrofon';
import Guests from './components/guests/Guests';
import Subscribe from './components/subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Layout>
                <Sectioneone />
                <Behindmicrofon />
                <Guests />
                <Subscribe/>
            </Layout>
        </div>
    )
}

export default Home