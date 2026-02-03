import React from 'react';

function Hero() {
    return ( 
            <div className='container'>
            
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1>Pricing</h1>
                <h5 className='text-muted'>Free equity investments and flat ₹20 traday and F&O trades. </h5>
                </div>
            <div className='row p-5 mt-5 border-bottom'>
                <div className='col-4 p-5'>
                    <img src='media/pricingEquity.svg' />
                    <h1 style={{marginLeft:20}}>Free Equity Delivery</h1>
                    <p style={{marginLeft:20}} className='text-muted'>All equity delivery investments(NSE ,BSE),<br/>are absolutely free - ₹ 0 brokerage. </p>

                </div>
                <div className='col-4 p-5'>
                    <img src='media/intradayTrades.svg' />
                    <h1 style={{marginLeft:20}}>Free Equity Delivery</h1>
                    <p style={{marginLeft:20}}>All equity delivery investments(NSE ,BSE),<br/>are absolutely free - ₹ 0 brokerage. </p>
                    
                </div>
                <div className='col-4 p-5'>
                    <img src='media/pricingEquity.svg' />
                    <h1 style={{marginLeft:20}}>Free Equity Delivery</h1>
                    <p className='text-muted' style = {{marginLeft:20}}>All equity delivery investments(NSE ,BSE),<br/>are absolutely free - ₹ 0 brokerage. </p>
                    
                </div>
                <h1 className='mt-2 text-center  border-top mt-5'>
                Open a Stoxly Account
            </h1>
            <p className='text-center'>
                Modern Platforms and apps , in 0 Ruppees investments, and flat 20 ruppees intraday and F&0 trades.
            </p>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width : "20%" , margin: "0 auto"}}> 
                SignUp Now
            </button>
                
                
            
            </div>
        </div>
     );
}

export default Hero;