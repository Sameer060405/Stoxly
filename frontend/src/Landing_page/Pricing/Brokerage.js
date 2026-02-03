import React from 'react';
function Brokerage() {
    return (
        <div className='container'>


            <div className='row p-5 mt-5'style = {{marginLeft : "20px"}}>
                <div className='col-8 p-4'>
                    <a href=' ' style={{ textDecoration: 'none'}}><h4>Brokerage Calculator</h4></a>
                    <ul>
                        <li>Securities/Commodities transaction tax</li>

                        <li>Tax by the government when transacting on the exchanges.</li>
                        <li>Charged as above on both buy and sell sides when trading equity delivery.</li>
                        <li>Charged only on selling side when trading intraday or on F&O.</li>

                        <li>When trading on Stoxly, STT/CTT can be a lot more than the brokerage we charge. 
                        Important to keep a tab.</li>

                        <li>Transaction/Turnover Charges</li>

                        <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>

                        <li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016.</li>  
                        
                    </ul>


                </div>
                <div className='col-4 p-4'>
                    <a href='' style={{ textDecoration: 'none' }}><h4>List of Charges</h4></a>


                </div>

            </div>
        </div>
    );
}

export default Brokerage;