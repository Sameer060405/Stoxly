import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5'>
                <h1 className='fs-3'>To create a ticket , select a relevant topic.</h1>
                <div className='col-4 p-5 mt-5 mb-5'>
                    <h4 className=''><i className="fa fa-plus-circle" aria-hidden="true"></i>Account Opening.</h4>
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Resident individual</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Minor</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Non Resident Indian (NRI)</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Company, Partnership, HUF and LLP</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Glossary</a>
                </div>
                <div className='col-4 mt-5 mb-5 p-5'>
                    <h4 className=''><i className="fa fa-user" aria-hidden="true"></i>
                        Your Stoxly Account</h4>
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Your Profile</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Account modification</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Nomination</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Transfer and conversion of securities</a>


                </div>
                <div className='col-4 p-5 mt-5 mb-5'>
                    <h4 className=''><i class="fa fa-circle-o" aria-hidden="true"></i>

                        Coin</h4>
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Mutual funds</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>National Pension Scheme (NPS)</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Fixed Deposit (FD)</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Features on Coin</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Payments and Orders</a>

                </div>
            </div>
            <div className='row'>
                <div className='col-4 p-5 mb-5'>
                    <h4 className=''><i class="fa fa-circle" aria-hidden="true"></i>Console</h4>
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Portfolio</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Corporate actions</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Funds statement</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Reports</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Segments</a>
                </div>
                <div className='col-4 mb-5 p-5'>
                    <h4 className=''><i class="fa fa-inr" aria-hidden="true"></i>

                        Funds</h4>
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Add money</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Withdraw money</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Add bank accounts</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>eMandates</a><br />


                </div>
                <div className='col-4 p-5 mb-5'>
                    <h4 className=''><i class="fa fa-circle-o" aria-hidden="true"></i>

                        Coin</h4>
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Mutual funds</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>National Pension Scheme (NPS)</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Fixed Deposit (FD)</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Features on Coin</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: "2.5" }}>Payments and Orders</a>

                </div>
            </div>
        </div>
    );
}

export default CreateTicket;