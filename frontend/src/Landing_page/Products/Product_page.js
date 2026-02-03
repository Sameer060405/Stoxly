import React from 'react';
import Hero from './Hero';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Universe from './Universe';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Pricing_Page() {
    return (
        <>
            <Hero />
            <LeftImage imageURL='media/kite.png' productName='Kite' productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' tryDemo='' learnMore='' googlePlay='' appStore='' />
            <RightImage imageURL='media\kiteconnect.png' productName='Console' productDescription= 'The central dashboard for your Stoxly account. Gain insights into your trades and investments with in-depth reports and visualisations.' learnMore= ''/>
            <LeftImage imageURL='media/coin.png' productName='Coin' productDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.' tryDemo='' learnMore='' googlePlay='' appStore='' />
            <RightImage imageURL='media/kiteconnect.png' productName='Kite Connect API' productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.

' learnMore=''/>
            <LeftImage imageURL='media/varsity.png' productName='Varsity mobile' productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' tryDemo='' learnMore='' googlePlay='' appStore='' />
            <p className='text-center fs-4'>Want to know more about our technology stack? Check out the <a href =''style = {{textDecoration:"none"}}>Stoxly.tech</a> blog.</p>
            <Universe />
        </>
    );
}

export default Pricing_Page;