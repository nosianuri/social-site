import React from 'react';
import BannerBody from './BannerBody/BannerBody';
import CoreFeature from './CoreFeature/CoreFeature';
import Faqs from './Faq/Faqs';
import Group from './group/Group';
import GroupTitle from './group/GroupTitle';
import Projects from './Projects/Projects';
import img1 from "../../assets/imgpsh_fullsize (1).png";
import img2 from "../../assets/imgpsh_fullsize (2).png";
import Trafic from './traffic/Trafic';
import Advertiser from './traffic/Advertiser';
import Featured from './traffic/Featured';
import Navbar from '../../shared/Navbar/Navbar';
// import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';



const Home = () => {
    return (
        <div>
            <Navbar />
            <BannerBody />
            <CoreFeature />
            <Trafic />
            <Advertiser />
            <img src={img1} alt="" />
            <Projects />
            <img className='' src={img2} alt="" />
            <Featured />
            <Faqs />
            <GroupTitle />
            <Group />
            <Footer />
            
        </div>
    )
}

export default Home