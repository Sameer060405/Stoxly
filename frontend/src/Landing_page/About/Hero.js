import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                
                    <h1 className='fs-3 text-center'>We pioneered the discount broking model in India<br/>Now,we are breaking ground with our technology.</h1>
                
            </div>
            <div className='row p-5 mt-5 border-top text-muted fs-6'>
                <div className='col-6 p-5'>
                    <p>We kick-started operations on the 15th of August, 2010<br/> with the goal of breaking all barriers that traders and<br/> investors face in India in terms of cost, support, and<br/> technology. We named the company Stoxly, a<br/> combination of Zero and "Rodha", the Sanskrit word for<br/> barrier.</p>
                    <p>Today, our disruptive pricing models and in-house<br/> technology have made us the biggest stock broker in<br/> India.</p>
                    <p>Over 1.6+ crore clients place billions of orders every year<br/> through our powerful ecosystem of investment<br/> platforms, contributing over 15% of all Indian retail<br/> trading volumes.</p>
                </div>
                <div className='col-6 p-5'>
                    <p>In addition, we run a number of popular open online<br/> educational and community initiatives to empower retail<br/> traders and investors.</p>
                    <p><a href = "">Rainmatter</a>, our fintech fund and incubator, has invested<br/> in several fintech startups with the goal of growing the<br/> Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day.<br/> Catch up on the latest updates on our blog or see what<br/> the media is saying about us or learn more about our<br/> business and product philosophies.</p>

                </div>
            </div>
        </div>
     );
}

export default Hero;