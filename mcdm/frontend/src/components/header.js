import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Header extends Component {
    render() {
        return (
            <div>

                <div className="header-connect">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-8  col-xs-12">
                                <div className="header-half header-call">
                                    <p>
                                        <span><i className="pe-7s-call"></i> +1 234 567 7890</span>
                                        <span><i className="pe-7s-mail"></i> your@company.com</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2 col-md-offset-5  col-sm-3 col-sm-offset-1  col-xs-12">
                                <div className="header-half header-social">
                                    <ul className="list-inline">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-vine"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-default ">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to={`/`}><img src="assets/img/logo.png" alt="" /></Link>
                        </div>

                        <div className="collapse navbar-collapse yamm" id="navigation">
                            <div className="button navbar-right">
                                <Link to={`/Register`}> <button className="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button> </Link>
                                <Link to={`/Register`}> <button className="navbar-btn nav-button wow fadeInRight" data-wow-delay="0.48s">Submit</button></Link>
                            </div>
                            <ul className="main-nav nav navbar-nav navbar-right">
                                <li className="dropdown ymm-sw " data-wow-delay="0.1s">
                                    <Link to={`/`}>Home </Link>
                                </li>

                                <li className="wow fadeInDown" data-wow-delay="0.1s" onClick={() => window.location.reload(false)}><Link to={`/properties`}>Properties</Link></li>
                                {/* <li className="wow fadeInDown" data-wow-delay="0.1s" ><Link to={`/Register`} >Property</Link></li> */}

                                <li className="wow fadeInDown" data-wow-delay="0.4s"><Link to={`/contact`}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
