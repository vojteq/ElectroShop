function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a className="my-link" href="/home">Home</a></li>
                            <li><a className="my-link" href="/products">Products</a></li>
                            <li><a className="my-link" href="/aboutus">About</a></li>
                            <li><a className="my-link" href="/contactus">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br/>
                            Clear Water Bay, Kowloon<br/>
                            HONG KONG<br/>
                            <i className="fa fa-phone fa-lg"/>: +852 1234 5678<br/>
                            <i className="fa fa-fax fa-lg"/>: +852 8765 4321<br/>
                            <i className="fa fa-envelope fa-lg"/>: <a className="my-link" href="mailto:electroShop@gmail.com">electroShop@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google footer-icon" href="http://google.com/+"><i
                                className="fa fa-google-plus"/></a>
                            <a className="btn btn-social-icon btn-facebook footer-icon"
                               href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"/></a>
                            <a className="btn btn-social-icon btn-linkedin footer-icon"
                               href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"/></a>
                            <a className="btn btn-social-icon btn-twitter footer-icon" href="http://twitter.com/"><i
                                className="fa fa-twitter"/></a>
                            <a className="btn btn-social-icon btn-google footer-icon" href="http://youtube.com/"><i
                                className="fa fa-youtube"/></a>
                            <a className="btn btn-social-icon footer-icon" href="mailto:"><i
                                className="fa fa-envelope-o"/></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2021 ElectroShop</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;