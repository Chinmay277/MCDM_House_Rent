import React, { Component } from "react";
import { API_URL } from "../../global";
import axios from "axios";
import { Redirect } from "react-router-dom";

import Demo from "../../img/demo/property-3.jpg";
import Profile from "../../img/client-face1.png";
class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      ResultData: this.props.SinglePropertyData,
    };
  }
  BeforeRenderCheckData = () => {
    debugger;
    if (this.props.SinglePropertyData[0] === undefined) {
      document.getElementById("Routetohome").click();
    } else {
      let data = this.props.SinglePropertyData;
    }
  };
  componentDidMount() {
    this.BeforeRenderCheckData();
    debugger;
    let a = this.props.SinglePropertyData;
  }
  componentWillReceiveProps() {
    debugger;
    let a = this.props.SinglePropertyData;
  }
  render() {
    debugger;
    let user = this.props.SinglePropertyData;
    console.log(user);
    return (
      <>
        <div>
          <a
            href="/properties"
            id="Routetohome"
            style={{ display: "none" }}
          ></a>
          <div className="page-head">
            <div className="container">
              <div className="row">
                <div className="page-head-content">
                  <h1 className="page-title"> {user[1]} </h1>
                </div>
              </div>
            </div>
          </div>
          {/* End page header */}
          {/* property area */}
          <div
            className="content-area single-property"
            style={{ backgroundColor: "#FCFCFC" }}
          >
            <div className="container">
              <div className="clearfix padding-top-40">
                <div className="col-md-8 single-property-content ">
                  {/* <div className="row">
                    <div className="light-slide-item">
                      <div className="clearfix">
                        <div className="favorite-and-print">
                          <a className="add-to-fav" href="#login-modal" data-toggle="modal">
                            <i className="fa fa-star-o" />
                          </a>
                          <a className="printer-icon " href="javascript:window.print()">
                            <i className="fa fa-print" />
                          </a>
                        </div>
                        <div className="lSSlideOuter "><div className="lSSlideWrapper usingCss" style={{ transitionDuration: '500ms', transitionTimingFunction: 'ease' }}><ul id="image-gallery" className="gallery list-unstyled lightSlider lsGrab lSSlide" style={{ width: 4320, transform: 'translate3d(-2880px, 0px, 0px)', height: 483, paddingBottom: '0%' }}><li data-thumb="assets/img/property-1/property4.jpg" className="clone left" style={{ width: 720, marginRight: 0 }}>
                          <img src="assets/img/property-1/property4.jpg" />
                        </li>
                          <li data-thumb="assets/img/property-1/property1.jpg" className="lslide" style={{ width: 720, marginRight: 0 }}>
                            <img src={Demo} />
                          </li>
                          <li data-thumb="img/property-1/property2.jpg" className="lslide" style={{ width: 720, marginRight: 0 }}>
                            <img src={Demo} />
                          </li>
                          <li data-thumb="assets/img/property-1/property3.jpg" className="lslide" style={{ width: 720, marginRight: 0 }}>
                            <img src={Demo} />
                          </li>
                          <li data-thumb="assets/img/property-1/property4.jpg" className="lslide active" style={{ width: 720, marginRight: 0 }}>
                            <img src={Demo} />
                          </li>
                          <li data-thumb="assets/img/property-1/property1.jpg" className="clone right" style={{ width: 720, marginRight: 0 }}>
                            <img src={Demo} />
                          </li></ul><div className="lSAction"><a className="lSPrev" /><a className="lSNext" /></div></div><ul className="lSPager lSGallery" style={{ marginTop: 5, transitionDuration: '500ms', width: '322.722px', transform: 'translate3d(0px, 0px, 0px)' }}><li style={{ width: '75.55555555555556px', marginRight: 5 }} className><a href="#"><img src="assets/img/property-1/property1.jpg" /></a></li><li style={{ width: '75.55555555555556px', marginRight: 5 }}><a href="#"><img src="img/property-1/property2.jpg" /></a></li><li style={{ width: '75.55555555555556px', marginRight: 5 }}><a href="#"><img src="assets/img/property-1/property3.jpg" /></a></li><li style={{ width: '75.55555555555556px', marginRight: 5 }} className="active"><a href="#"><img src="assets/img/property-1/property4.jpg" /></a></li></ul></div>
                      </div>
                    </div>
                  </div> */}

                  <div className="row">
                    <div className="light-slide-item">
                      <div className="clearfix">
                        <div className="favorite-and-print">
                          <a
                            className="printer-icon "
                            href="javascript:window.print()"
                          >
                            <i className="fa fa-print" />
                          </a>
                        </div>

                        <ul
                          id="image-gallery"
                          className="gallery list-unstyled cS-hidden"
                        >
                          <li
                            data-thumb="assets/img/property-1/property1.jpg"
                            className="lslide"
                          >
                            <img
                              src={Demo}
                              style={{ width: "100%", marginLeft: -2 }}
                            />
                          </li>
                          {/* <li data-thumb="assets/img/property-1/property3.jpg">
                            <img src={Demo} style={{ width: 720, marginTop: 10 }} />
                          </li>
                          <li data-thumb="assets/img/property-1/property4.jpg">
                            <img src={Demo} style={{ width: 720, marginTop: 10 }} />
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="single-property-wrapper">
                    <div className="single-property-header">
                      <h1 className="property-title pull-left">
                        Villa in Coral Gables
                      </h1>
                      <span className="property-price pull-right">
                        {user[3]}
                      </span>
                    </div>
                    <div className="property-meta entry-meta clearfix ">
                      <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                        <span className="property-info-icon icon-tag">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            style={{ width: "5rem" }}
                          >
                            <path
                              className="meta-icon"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="#FFA500"
                              d="M47.199 24.176l-23.552-23.392c-.504-.502-1.174-.778-1.897-.778l-19.087.09c-.236.003-.469.038-.696.1l-.251.1-.166.069c-.319.152-.564.321-.766.529-.497.502-.781 1.196-.778 1.907l.092 19.124c.003.711.283 1.385.795 1.901l23.549 23.389c.221.218.482.393.779.523l.224.092c.26.092.519.145.78.155l.121.009h.012c.239-.003.476-.037.693-.098l.195-.076.2-.084c.315-.145.573-.319.791-.539l18.976-19.214c.507-.511.785-1.188.781-1.908-.003-.72-.287-1.394-.795-1.899zm-35.198-9.17c-1.657 0-3-1.345-3-3 0-1.657 1.343-3 3-3 1.656 0 2.999 1.343 2.999 3 0 1.656-1.343 3-2.999 3z"
                            />
                          </svg>
                        </span>
                        <span className="property-info-entry">
                          <span className="property-info-label">Status</span>
                          <span className="property-info-value">
                            {user[24] === 1 ? "Sale" : "Rent"}
                          </span>
                        </span>
                      </div>
                      <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                        <span className="property-info icon-area">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            style={{ width: "5rem" }}
                          >
                            <path
                              className="meta-icon"
                              fill="#FFA500"
                              d="M46 16v-12c0-1.104-.896-2.001-2-2.001h-12c0-1.103-.896-1.999-2.002-1.999h-11.997c-1.105 0-2.001.896-2.001 1.999h-12c-1.104 0-2 .897-2 2.001v12c-1.104 0-2 .896-2 2v11.999c0 1.104.896 2 2 2v12.001c0 1.104.896 2 2 2h12c0 1.104.896 2 2.001 2h11.997c1.106 0 2.002-.896 2.002-2h12c1.104 0 2-.896 2-2v-12.001c1.104 0 2-.896 2-2v-11.999c0-1.104-.896-2-2-2zm-4.002 23.998c0 1.105-.895 2.002-2 2.002h-31.998c-1.105 0-2-.896-2-2.002v-31.999c0-1.104.895-1.999 2-1.999h31.998c1.105 0 2 .895 2 1.999v31.999zm-5.623-28.908c-.123-.051-.256-.078-.387-.078h-11.39c-.563 0-1.019.453-1.019 1.016 0 .562.456 1.017 1.019 1.017h8.935l-20.5 20.473v-8.926c0-.562-.455-1.017-1.018-1.017-.564 0-1.02.455-1.02 1.017v11.381c0 .562.455 1.016 1.02 1.016h11.39c.562 0 1.017-.454 1.017-1.016 0-.563-.455-1.019-1.017-1.019h-8.933l20.499-20.471v8.924c0 .563.452 1.018 1.018 1.018.561 0 1.016-.455 1.016-1.018v-11.379c0-.132-.025-.264-.076-.387-.107-.249-.304-.448-.554-.551z"
                            />
                          </svg>
                        </span>
                        <span className="property-info-entry">
                          <span className="property-info-label">Area</span>
                          <span className="property-info-value">
                            {user[2]}
                            <b className="property-info-unit">Sq Ft</b>
                          </span>
                        </span>
                      </div>
                      <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                        <span className="property-info-icon icon-bed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            style={{ width: "5rem" }}
                          >
                            <path
                              className="meta-icon"
                              fill="#FFA500"
                              d="M21 48.001h-19c-1.104 0-2-.896-2-2v-31c0-1.104.896-2 2-2h19c1.106 0 2 .896 2 2v31c0 1.104-.895 2-2 2zm0-37.001h-19c-1.104 0-2-.895-2-1.999v-7.001c0-1.104.896-2 2-2h19c1.106 0 2 .896 2 2v7.001c0 1.104-.895 1.999-2 1.999zm25 37.001h-19c-1.104 0-2-.896-2-2v-31c0-1.104.896-2 2-2h19c1.104 0 2 .896 2 2v31c0 1.104-.896 2-2 2zm0-37.001h-19c-1.104 0-2-.895-2-1.999v-7.001c0-1.104.896-2 2-2h19c1.104 0 2 .896 2 2v7.001c0 1.104-.896 1.999-2 1.999z"
                            />
                          </svg>
                        </span>
                        <span className="property-info-entry">
                          <span className="property-info-label">Bedrooms</span>
                          <span className="property-info-value">
                            {user[15]}
                          </span>
                        </span>
                      </div>
                      <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                        <span className="property-info-icon icon-bath">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            style={{ width: "5rem" }}
                          >
                            <path
                              className="meta-icon"
                              fill="#FFA500"
                              d="M37.003 48.016h-4v-3.002h-18v3.002h-4.001v-3.699c-4.66-1.65-8.002-6.083-8.002-11.305v-4.003h-3v-3h48.006v3h-3.001v4.003c0 5.223-3.343 9.655-8.002 11.305v3.699zm-30.002-24.008h-4.001v-17.005s0-7.003 8.001-7.003h1.004c.236 0 7.995.061 7.995 8.003l5.001 4h-14l5-4-.001.01.001-.009s.938-4.001-3.999-4.001h-1s-4 0-4 3v17.005000000000003h-.001z"
                            />
                          </svg>
                        </span>
                        <span className="property-info-entry">
                          <span className="property-info-label">Bathrooms</span>
                          <span className="property-info-value">
                            {user[16]}
                          </span>
                        </span>
                      </div>
                      <div className="col-xs-3 col-sm-3 col-md-3 p-b-15">
                        <span className="property-info-icon icon-garage">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            style={{ width: "5rem" }}
                          >
                            <path
                              className="meta-icon"
                              fill="#FFA500"
                              d="M44 0h-40c-2.21 0-4 1.791-4 4v44h6v-40c0-1.106.895-2 2-2h31.999c1.106 0 2.001.895 2.001 2v40h6v-44c0-2.209-1.792-4-4-4zm-36 8.001h31.999v2.999h-31.999zm0 18h6v5.999h-2c-1.104 0-2 .896-2 2.001v6.001c0 1.103.896 1.998 2 1.998h2v2.001c0 1.104.896 2 2 2s2-.896 2-2v-2.001h11.999v2.001c0 1.104.896 2 2.001 2 1.104 0 2-.896 2-2v-2.001h2c1.104 0 2-.895 2-1.998v-6.001c0-1.105-.896-2.001-2-2.001h-2v-5.999h5.999v-3h-31.999v3zm8 12.999c-1.104 0-2-.895-2-1.999s.896-2 2-2 2 .896 2 2-.896 1.999-2 1.999zm10.5 2h-5c-.276 0-.5-.225-.5-.5 0-.273.224-.498.5-.498h5c.275 0 .5.225.5.498 0 .275-.225.5-.5.5zm1-2h-7c-.275 0-.5-.225-.5-.5s.226-.499.5-.499h7c.275 0 .5.224.5.499s-.225.5-.5.5zm-6.5-2.499c0-.276.224-.5.5-.5h5c.275 0 .5.224.5.5s-.225.5-.5.5h-5c-.277 0-.5-.224-.5-.5zm11 2.499c-1.104 0-2.001-.895-2.001-1.999s.896-2 2.001-2c1.104 0 2 .896 2 2s-.896 1.999-2 1.999zm0-12.999v5.999h-16v-5.999h16zm-24-13.001h31.999v3h-31.999zm0 5h31.999v3h-31.999z"
                            />
                          </svg>
                        </span>
                        <span className="property-info-entry">
                          <span className="property-info-label">Garages</span>
                          <span className="property-info-value">
                            {user[13]}
                          </span>
                        </span>
                      </div>
                    </div>
                    {/* .property-meta */}
                    <div className="section">
                      <h4 className="s-property-title">Description</h4>
                      <div className="s-property-content">
                        <p>{user[14]}</p>
                      </div>
                    </div>
                    {/* End description area  */}
                    <div className="section additional-details">
                      <h4 className="s-property-title">Additional Details</h4>
                      <ul className="additional-details-list clearfix">
                        <li>
                          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                            availableFrom
                          </span>
                          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                            {user[12]}
                          </span>
                        </li>
                        <li>
                          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                            Age
                          </span>
                          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                            {user[8]}
                          </span>
                        </li>
                        <li>
                          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                            Parking
                          </span>
                          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                            {user[13]}
                          </span>
                        </li>
                        <li>
                          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                            GYM
                          </span>
                          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                            {user[19] === 1 ? "Yes" : "No"}
                          </span>
                        </li>
                        <li>
                          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                            furnishingType
                          </span>
                          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                            {user[11] === 1 ? "Full Furnished" : "NO"}
                          </span>
                        </li>
                        <li>
                          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                            propertyType
                          </span>
                          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                            {user[6]}
                          </span>
                        </li>
                        <li>
                          <span className="col-xs-6 col-sm-4 col-md-4 add-d-title">
                            waterSupplyType
                          </span>
                          <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                            {user[18]}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p0">
                  <aside className="sidebar sidebar-property blog-asside-right">
                    <div className="dealer-widget">
                      <div className="dealer-content">
                        <div className="inner-wrapper">
                          <div className="clear">
                            <div className="col-xs-4 col-sm-4 dealer-face">
                              <a href>
                                <img src={Profile} className="img-circle" />
                              </a>
                            </div>
                            <div className="col-xs-8 col-sm-8 ">
                              <h3 className="dealer-name">
                                <a href>Nathan James</a>
                                <span>Real Estate Agent</span>
                              </h3>
                              <div className="dealer-social-media">
                                <a className="twitter" target="_blank">
                                  <i className="fa fa-twitter" />
                                </a>
                                <a className="facebook" target="_blank">
                                  <i className="fa fa-facebook" />
                                </a>
                                <a className="gplus" target="_blank">
                                  <i className="fa fa-google-plus" />
                                </a>
                                <a className="linkedin" target="_blank">
                                  <i className="fa fa-linkedin" />
                                </a>
                                <a className="instagram" target="_blank">
                                  <i className="fa fa-instagram" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="clear">
                            <ul className="dealer-contacts">
                              <li>
                                <i className="pe-7s-map-marker strong"> </i>{" "}
                                9089 your adress her
                              </li>
                              <li>
                                <i className="pe-7s-mail strong"> </i>{" "}
                                email@yourcompany.com
                              </li>
                              <li>
                                <i className="pe-7s-call strong"> </i> {user[9]}
                              </li>
                            </ul>
                            <p>
                              Duis mollis blandit tempus porttitor curabiturDuis
                              mollis blandit tempus porttitor curabitur , est
                              non…
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          {/* Footer area*/}
          <div className="footer-area">
            <div className=" footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                    <div className="single-footer">
                      <h4>About us </h4>
                      <div className="footer-title-line" />
                      <img
                        src="assets/img/footer-logo.png"
                        alt
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
                          <i className="pe-7s-call strong"> </i> {user[9]}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                    <div className="single-footer">
                      <h4>Quick links </h4>
                      <div className="footer-title-line" />
                      <ul className="footer-menu">
                        <li>
                          <a href="properties.html">Properties</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="submit-property.html">Submit property </a>
                        </li>
                        <li>
                          <a href="contact.html">Contact us</a>
                        </li>
                        <li>
                          <a href="faq.html">fqa</a>
                        </li>
                        <li>
                          <a href="faq.html">Terms </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                    <div className="single-footer">
                      <h4>Last News</h4>
                      <div className="footer-title-line" />
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
                      <div className="footer-title-line" />
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
                              <i className="pe-7s-paper-plane pe-2x" />
                            </button>
                          </span>
                        </div>
                        {/* /input-group */}
                      </form>
                      <div className="social pull-right">
                        <ul>
                          <li>
                            <a
                              className="wow fadeInUp animated"
                              href="https://twitter.com/kimarotec"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a
                              className="wow fadeInUp animated"
                              href="https://www.facebook.com/kimarotec"
                              data-wow-delay="0.2s"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a
                              className="wow fadeInUp animated"
                              href="https://plus.google.com/kimarotec"
                              data-wow-delay="0.3s"
                            >
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                          <li>
                            <a
                              className="wow fadeInUp animated"
                              href="https://instagram.com/kimarotec"
                              data-wow-delay="0.4s"
                            >
                              <i className="fa fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a
                              className="wow fadeInUp animated"
                              href="https://instagram.com/kimarotec"
                              data-wow-delay="0.6s"
                            >
                              <i className="fa fa-dribbble" />
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
                      (C) <a href="https://5techg.com/">5TechGIT</a> , All
                      rights reserved 2020
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
      </>
    );
  }
}

export default Properties;
