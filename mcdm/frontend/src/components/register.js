import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Toastify imports
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_URL } from "../global";
import { App } from "../App";

const axios = require("axios");

export default class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: null,
      email: null,
      address: null,
      password: null,
      confirmPassword: null,
      isAuthenticatedStatus: false,
    };
  }

  register = () => {
    let url = API_URL;
    const query = `INSERT INTO users(name, email, address, password) VALUES('${this.state.name}', '${this.state.email}', '${this.state.address}', '${this.state.password}')`;
    let data = {
      crossDomain: true,
      crossOrigin: true,
      query: query,
    };

    var config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        toast.success("New user registered successfully !");
        console.log("user details added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  validateLogin1(data) {
    console.log("login data", data);
    if (data[0]["count"] > 0) {
      toast.success("User logged in successfully !");
      this.setState({ isAuthenticatedStatus: true });
    } else {
      toast.error("Login failed! Please enter valid credentials");
    }
  }

  validateLogin(data) {
    console.log("login data", data["result"][0][0]);
    if (data["result"][0][0] > 0) {
      toast.success("User logged in successfully !");
      this.setState({ isAuthenticatedStatus: true });
    } else {
      toast.error("Login failed! Please enter valid credentials");
    }
  }

  isAuthenticated() {
    if (this.state.isAuthenticatedStatus) {
      localStorage.setItem("5tg_webservice_realestate_1234321", "true");
      window.location.reload();
      return <Redirect to={`/userProfile/${this.state.email}`} />;
    } else {
      return null;
    }
  }

  login = () => {
    let url = API_URL;
    const query = `SELECT COUNT(*) AS count FROM users WHERE email='${this.state.email}' AND password='${this.state.password}';`;
    let data = {
      crossDomain: true,
      crossOrigin: true,
      query: query,
    };

    var config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        console.log("login data fetched successfully");
        this.validateLogin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {this.isAuthenticated()}

        <div className="page-head">
          <div className="container">
            <div className="row">
              <div className="page-head-content">
                <h1 className="page-title">Home New account / Sign in </h1>
              </div>
            </div>
          </div>
        </div>

        <div
          className="register-area"
          style={{ backgroundColor: "rgb(249, 249, 249)" }}
        >
          <div className="container">
            <div className="col-md-6">
              <div className="box-for overflow">
                <div className="col-md-12 col-xs-12 register-blocks">
                  <h2>New account : </h2>
                  <div>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={(e) => {
                          this.setState({ name: e.target.value });
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <br />
                      <textarea
                        className="form-control"
                        rows="5"
                        onInput={(e) => {
                          this.setState({ address: e.target.value });
                        }}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="password"
                        onChange={(e) => {
                          this.setState({ password: e.target.value });
                        }}
                      />
                      <br />
                      <input
                        type="password"
                        className="form-control "
                        id="confirmPpassword"
                        placeholder="confirm password"
                        onChange={(e) => {
                          this.setState({ confirmPassword: e.target.value });
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-default"
                        onClick={() => {
                          this.register();
                        }}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="box-for overflow">
                <div className="col-md-12 col-xs-12 login-blocks">
                  <h2>Login : </h2>
                  <div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={(e) => {
                          this.setState({ password: e.target.value });
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-default"
                        onClick={() => {
                          this.login();
                        }}
                      >
                        Log in
                      </button>
                    </div>
                  </div>
                  <br />

                  <h2>Social login : </h2>

                  <p>
                    <a className="login-social" href="#">
                      <i className="fa fa-facebook"></i>&nbsp;Facebook
                    </a>
                    <a className="login-social" href="#">
                      <i className="fa fa-google-plus"></i>&nbsp;Gmail
                    </a>
                    <a className="login-social" href="#">
                      <i className="fa fa-twitter"></i>&nbsp;Twitter
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-area">
          <div className=" footer">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                  <div className="single-footer">
                    <h4>About us </h4>
                    <div className="footer-title-line"></div>

                    <img
                      src="assets/img/footer-logo.png"
                      alt=""
                      className="wow pulse"
                      data-wow-delay="1s"
                    />
                    <p>
                      Lorem ipsum dolor cum necessitatibus su quisquam
                      molestias. Vel unde, blanditiis.
                    </p>
                    <ul className="footer-adress">
                      <li>
                        <i className="pe-7s-map-marker strong"> </i> 9089 your
                        adress her
                      </li>
                      <li>
                        <i className="pe-7s-mail strong"> </i>{" "}
                        email@yourcompany.com
                      </li>
                      <li>
                        <i className="pe-7s-call strong"> </i> +1 908 967 5906
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                  <div className="single-footer">
                    <h4>Quick links </h4>
                    <div className="footer-title-line"></div>
                    <ul className="footer-menu">
                      <li>
                        <a href="properties.html">Properties</a>{" "}
                      </li>
                      <li>
                        <a href="#">Services</a>{" "}
                      </li>
                      <li>
                        <a href="submit-property.html">Submit property </a>
                      </li>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                      <li>
                        <a href="faq.html">fqa</a>{" "}
                      </li>
                      <li>
                        <a href="faq.html">Terms </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                  <div className="single-footer">
                    <h4>Last News</h4>
                    <div className="footer-title-line"></div>
                    <ul className="footer-blog">
                      <li>
                        <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                          <a href="single.html">
                            <img src="assets/img/demo/small-proerty-2.jpg" />
                          </a>
                          <span className="blg-date">12-12-2016</span>
                        </div>
                        <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                          <h6>
                            {" "}
                            <a href="single.html">Add news functions </a>
                          </h6>
                          <p>Lorem ipsum dolor sit amet, nulla ...</p>
                        </div>
                      </li>

                      <li>
                        <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                          <a href="single.html">
                            <img src="assets/img/demo/small-proerty-2.jpg" />
                          </a>
                          <span className="blg-date">12-12-2016</span>
                        </div>
                        <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                          <h6>
                            {" "}
                            <a href="single.html">Add news functions </a>
                          </h6>
                          <p>Lorem ipsum dolor sit amet, nulla ...</p>
                        </div>
                      </li>

                      <li>
                        <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                          <a href="single.html">
                            <img src="assets/img/demo/small-proerty-2.jpg" />
                          </a>
                          <span className="blg-date">12-12-2016</span>
                        </div>
                        <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                          <h6>
                            {" "}
                            <a href="single.html">Add news functions </a>
                          </h6>
                          <p>Lorem ipsum dolor sit amet, nulla ...</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                  <div className="single-footer news-letter">
                    <h4>Stay in touch</h4>
                    <div className="footer-title-line"></div>
                    <p>
                      Lorem ipsum dolor sit amet, nulla suscipit similique
                      quisquam molestias. Vel unde, blanditiis.
                    </p>

                    <form>
                      <div className="input-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="E-mail ... "
                        />
                        <span className="input-group-btn">
                          <button
                            className="btn btn-primary subscribe"
                            type="button"
                          >
                            <i className="pe-7s-paper-plane pe-2x"></i>
                          </button>
                        </span>
                      </div>
                    </form>

                    <div className="social pull-right">
                      <ul>
                        <li>
                          <a
                            className="wow fadeInUp animated"
                            href="https://twitter.com/kimarotec"
                          >
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="wow fadeInUp animated"
                            href="https://www.facebook.com/kimarotec"
                            data-wow-delay="0.2s"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="wow fadeInUp animated"
                            href="https://plus.google.com/kimarotec"
                            data-wow-delay="0.3s"
                          >
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="wow fadeInUp animated"
                            href="https://instagram.com/kimarotec"
                            data-wow-delay="0.4s"
                          >
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="wow fadeInUp animated"
                            href="https://instagram.com/kimarotec"
                            data-wow-delay="0.6s"
                          >
                            <i className="fa fa-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copy text-center">
            <div className="container">
              <div className="row">
                <div className="pull-left">
                  <span>
                    {" "}
                    (C) <a href="https://5techg.com/">5TechGIT</a> , All rights
                    reserved 2020{" "}
                  </span>
                </div>
                <div className="bottom-menu pull-right">
                  <ul>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="#"
                        data-wow-delay="0.2s"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="#"
                        data-wow-delay="0.3s"
                      >
                        Property
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="#"
                        data-wow-delay="0.4s"
                      >
                        Faq
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp animated"
                        href="#"
                        data-wow-delay="0.6s"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
