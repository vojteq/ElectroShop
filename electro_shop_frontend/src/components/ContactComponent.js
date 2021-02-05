import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        Krakowska 15<br/>
                        Cracow, LesserPoland<br/>
                        Poland<br/>
                        <i className="fa fa-phone"/>: +48 123 123 123<br/>
                        <i className="fa-envelope" />: <a href="mailto:electroShop@gmail.com">electroShop@gmail.com</a><br/>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of Our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn-primary" href="tel:+48123123123">
                            <i className="fa fa-phone"/> Call
                        </a>
                        <a role="button" className="btn-info">
                            <i className="fa fa-skype"/> Skype
                        </a>
                        <a role="button" className="btn-success" href="mailto:electroShop@gmail.com">
                            <i className="fa-envelope"/> Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;