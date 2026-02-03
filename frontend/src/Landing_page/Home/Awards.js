import React from 'react';
function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5 mb-5'>
                    <img src = 'media/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock Broker in India</h1>
                    <p className='mb-5'>2+ million Stoxly clients contribute to over 15% of all trading volumes in India daily by trading and investing in: </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                        
                    </ul>
                    </div>
                    <div className='col-6'>
                                            <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt</p>
                        </li>
                        
                    </ul>

                    </div>
                            
                        </div>
                        <img src = 'media/pressLogos.png' style = {{width: "90%"}} />
                    

                </div>
            </div>
        </div>

     );
}

export default Awards;