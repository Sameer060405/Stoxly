import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-5 mt-4'>

                <h1 className='text-center '>People</h1>

            </div>
            <div className='row p-5 mt-2 text-muted fs-6'>
                <div className='col-6 p-5 text-center'>
                    <img src = "media/nithinKamath.jpg" style = {{borderRadius: "100%",width:"50%"}}/>
                    <h4 className='mt-4'>Nithin Kamath</h4>
                    <h5>Founder,CEO</h5>
                </div>
                <div className='col-6 p-5'>
                    <p>Nithin bootstrapped and founded Stoxly in 2010 to overcome the<br/> hurdles he faced during his decade long stint as a trader. Today,<br/> Stoxly has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee<br/> (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href ='' style = {{textdecoration:"none"}}>HomePage</a> / <a href ="" style = {{textDecoration:"none"}}>TradingQnA</a> / <a href ="" style={{textdecoration:"none"}}>Twitter</a></p>

                </div>
            </div>
        </div>
    );
}

export default Team;