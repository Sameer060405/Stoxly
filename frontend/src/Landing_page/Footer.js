import React from 'react';

export default function Footer() {
    return (
        <footer className="container border-top mt-5">
                <div className="row mt-5">
                    <div className="col">
                        <img src="media/stoxly.png" style={{ width: '160px', height: 'auto', display: 'block' }} alt="Stoxly logo" />
                        <div style={{ marginTop: 8 }}>
                            <div style={{ fontWeight: 700 }}>Stoxly</div>
                            <div style={{ fontSize: 12, color: '#666' }}>Investing made simple</div>
                        </div>
                    </div>

                <div className="col" style={{ textDecoration: 'none' }}>
                    <p>Company</p>
                    <a href="" style={{ textDecoration: 'none' }}>About</a>
                    <br />
                    <a href="" style={{ textDecoration: 'none' }}>Products</a>
                    <br />
                    <a href="" style={{ textDecoration: 'none' }}>Pricing</a>
                    <br />
                    <a href="" style={{ textDecoration: 'none' }}>Education</a>
                    <br />
                    <a href="" style={{ textDecoration: 'none' }}>Press & Media</a>
                    <br />
                </div>

                <div className="col">
                    <p>Support</p>
                    <a href="" style={{ textDecoration: 'none' }}>Contact Us</a>
                    <br />
                    <a href="" style={{ textDecoration: 'none' }}>Support portal</a>
                    <br />
                    <a href="" style={{ textDecoration: 'none' }}>Z Connect Blog</a>
                    <br />
                    <a href="" style={{ textDecoration: 'none' }}>List of Charges</a>
                    <br />
                    <a href="" style={{ textDecoration: 'none' }}>Downloads and Resources</a>
                    <br />
                </div>

                <div className="col">
                    <p>Account</p>
                    <a href="" style={{ textDecoration: 'none' }}>Open an Account</a>
                    <br />
                    <a href="" style={{ textDecoration: 'none' }}>Fund Transfer</a>
                    <br />
                    <a href="" style={{ textDecoration: 'none' }}>60 day Challenge</a>
                    <br />
                </div>

                <div className="mt-5 fs-8">
                    <p className="text-muted">
                        Stoxly Inc. is a demo project and not a regulated broker. This site is provided for educational and demo purposes only. Replace this paragraph with your company's legal and regulatory information for production use.
                    </p>
                    <p className="text-muted">
                        Procedure to file a complaint: For real deployments, include contact details and complaint filing procedures relevant to your jurisdiction.
                    </p>
                    <p className="text-muted">
                        Attention investors: This demo does not perform real trades. Always verify financial actions with your broker.
                    </p>
                </div>
            </div>
        </footer>
    );
}