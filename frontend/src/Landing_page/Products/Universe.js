import React from 'react';

function 
Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <h2 className='text-center mb-4'>The Stoxly Universe</h2>
                <p className='text-center'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src = 'media/smallcaseLogo.png'/>
                    <p className='text-small text-muted'>Thematics Investing Platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src = 'media/sensibullLogo.svg' style = {{width:"40%"}}/>
                    <p className='text-small text-muted p-3'>Options trading platform that lets you<br/>create strategies,analyze positions.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src = 'media/zerodhaFundhouse.png'style = {{width:"40%"}}/>
                    <p className='text-small text-muted p-3'>Our asset management venture that is creating simple and transparent index funds to help.</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width : "30%" , margin: "0 auto"}}> 
                SignUp Now
            </button>
                
            </div>
        </div>
     );
}

export default 
Universe;