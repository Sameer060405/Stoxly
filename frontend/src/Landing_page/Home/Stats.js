import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust With Confidence</h1>

                    <h2 className='fs-4'>Customer first-always</h2>
                    <p className='text-muted'>Thats why 1.3 crore+ customers trust Stoxly.</p>

                    <h2 className='fs-4'>No Spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam , "gamification",or annoying push notifications.High quality apps that you use at your pace,the way you like</p>

                    <h2 className='fs-4'>The Stoxly Universe</h2>
                    <p className='text-muted'>Not just an app,but a whole ecosystem.Our investments in 30+ fintech startups offer you tailored services specified to your needs.</p>

                    <h2 className='fs-4'>Do better with Money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we dont just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-6 p-5'>
                    <img src ='media/ecosystem.png' style = {{width: "90%"}} />
                    <div className='text-center'>
                        <a href='' className='mx-5' style = {{textDecoration:"none"}}>Explore Our Products</a>
                        <a href ='' className='mx-5' style = {{textDecoration:"none"}}>Try Kite Demo</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;