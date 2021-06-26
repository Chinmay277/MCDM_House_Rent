import React, { Component } from "react";
import { API_URL, api_type } from "../../global";
import axios from "axios";
import "./css.css";
import Filter from "../../components/Filter";
import Demo from "../../img/demo/property-3.jpg";
import { Link } from "react-router-dom";
var newdata = {};

var dataforAPI = JSON.stringify({ query: "select * from property" });
class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      ResultData: [],
      showProperty: {},
      Age: -1,
    };
    this.filterData = this.filterData.bind(this);
  }
  componentDidMount = () => {
    //debugger;
    let url = API_URL;
    const query = `select * from property`;
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
        //debugger;
        newdata = res.data["result"];
        console.log(newdata);
        this.setState({ ResultData: newdata });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  SearchResult = () => {
    let url = API_URL;
    const query = ``;
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
        this.setState({ ResultData: res });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  filterData(mat, types, params) {
    console.log(mat, types, params);
    let url = "http://localhost:8000/get_rank_data/";
    const query = {
      types: types,
      mat: mat,
      rent_min: params[0][0],
      rent_max: params[0][1],
      deposit_min: params[1][0],
      deposit_max: params[1][1],
      floor_min: params[2][0],
      floor_max: params[2][1],
    };

    console.log("query : ", query);
    let data = {
      crossDomain: true,
      crossOrigin: true,
      ...query,
    };
    axios({
      method: "post",
      url: url,
      data: {
        types: types,
        mat: mat,
        rent_min: params[0][0],
        rent_max: params[0][1],
        deposit_min: params[1][0],
        deposit_max: params[1][1],
        floor_min: params[2][0],
        floor_max: params[2][1],
      },
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log("data loaded : ", res);
        newdata = res.data["result"];
        console.log(newdata);
        console.log("this : ", this);
        this.setState({ ResultData: newdata });
      })
      .catch((e) => console.log(e));
  }

  sortByPrice = async (jsonArray) => {
    await jsonArray.sort(function (a, b) {
      var dateA = new Date(a[3]),
        dateB = new Date(b[3]);
      return dateB - dateA;
    });
    return jsonArray;
  };

  sortByDate = async (jsonArray) => {
    console.log(jsonArray);
    await jsonArray.sort(function (a, b) {
      var dateA = new Date(a[8]),
        dateB = new Date(b[8]);
      return dateB - dateA;
    });
    console.log(jsonArray);
    return jsonArray;
  };

  sortByRank = async (jsonArray) => {
    console.log(jsonArray, typeof jsonArray[0][26]);
    await jsonArray.sort(function (a, b) {
      return a[26] - b[26];
    });
    console.log(jsonArray);
    return jsonArray;
  };

  SortData = async (e) => {
    let array = [];
    if (e === "Date") {
      array = await this.sortByDate(this.state.ResultData);
    } else if (e === "Price") {
      array = await this.sortByPrice(this.state.ResultData);
    } else if (e === "Rank") {
      array = await this.sortByRank(this.state.ResultData);
    }
    this.setState({ ResultData: array });
  };
  render() {
    return (
      <>
        <div className="page-head">
          <div className="container">
            <div className="row">
              <div className="page-head-content">
                <div className="page-title ">ABC</div>
              </div>
            </div>
          </div>
        </div>
        {/* End page header */}
        {/* property area */}
        <div
          className="properties-area recent-property"
          style={{ backgroundColor: "#FFF" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12  pr0 padding-top-40 properties-page">
                <div className="col-md-12 clear">
                  <div id="list-type" className="proerty-th">
                    <Filter filterData={this.filterData} />
                    <div
                      className="col-md-12 clear"
                      style={{ margin: "10px 0px 10px 0px" }}
                    >
                      <div
                        className="col-xs-10 page-subheader sorting pl0 "
                        style={{ marginTop: "3em", marginBottom: "2em" }}
                      >
                        <ul className="sort-by-list">
                          <li className="active">
                            <button
                              onClick={() => this.SortData("Date")}
                              className="order_by_date"
                              data-orderby="property_date"
                              data-order="ASC"
                            >
                              Property Date
                              <i className="fa fa-sort-amount-asc" />
                            </button>
                          </li>
                          <li className="">
                            <button
                              onClick={() => this.SortData("Price")}
                              className="order_by_price"
                              data-orderby="property_price"
                              data-order="DESC"
                            >
                              Property Price
                              <i className="fa fa-sort-numeric-desc" />
                            </button>
                          </li>
                          <li className="">
                            <button
                              onClick={() => this.SortData("Rank")}
                              className="order_by_price"
                              data-orderby="property_price"
                              data-order="DESC"
                            >
                              Property Rank
                              <i className="fa fa-sort-numeric-asc" />
                            </button>
                          </li>
                        </ul>
                        {/*/ .sort-by-list*/}
                        <div
                          className="items-per-page"
                          style={{ marginLeft: 200 }}
                        >
                          <label htmlFor="items_per_page">
                            <b>Property per page :</b>
                          </label>
                          <div className="sel">
                            <select
                              id="items_per_page"
                              onChange={(e) =>
                                this.setState({ Age: e.target.value })
                              }
                              name="per_page"
                            >
                              <option value={0}>0</option>
                              <option value={3}>3</option>
                              <option value={6}>6</option>
                              <option value={9}>9</option>
                              <option value={12}>12</option>
                              <option value={15}>15</option>
                              <option value={30}>30</option>
                              <option value={45}>45</option>
                              <option value={60}>60</option>
                            </select>
                          </div>
                          {/*/ .sel*/}
                        </div>
                        {/*/ .items-per-page*/}
                      </div>
                      <div className="col-xs-2 layout-switcher">
                        <a className="layout-list" href="javascript:void(0);">
                          {" "}
                          <i className="fa fa-th-list" />
                        </a>
                        <a
                          className="layout-grid active"
                          href="javascript:void(0);"
                        >
                          {" "}
                          <i className="fa fa-th" />{" "}
                        </a>
                      </div>
                      {/*/ .layout-switcher*/}
                    </div>
                    {/*console.log("result data : ", this.state.ResultData)*/}

                    {(this.state.ResultData || []).map(
                      (user, index) =>
                        parseInt(user[8]) > this.state.Age && (
                          <div
                            key={"property" + index.toString()}
                            className="col-sm-6 col-md-3 p0"
                            id="test1"
                            onClick={() =>
                              this.props.setSinglePropertyData(user)
                            }
                          >
                            <Link to="/properties/information">
                              <div className="box-two proerty-item">
                                <img
                                  src={Demo}
                                  // src={require("../../img/demo/property-3.jpg")}
                                />

                                <div className="item-entry overflow">
                                  <h5>
                                    <a> {user[1]} </a>
                                    <b>{user[26]}</b>
                                  </h5>

                                  <div className="dot-hr"></div>
                                  <span className="pull-left">
                                    {/*console.log("area : ", user[2])*/}
                                    <b> Area :</b> {user[2]}{" "}
                                  </span>
                                  <span className="proerty-price pull-right">
                                    {" "}
                                    {/*console.log("rent : ", user[3])*/}
                                    <b>Deposite :</b> {user[3]}{" "}
                                  </span>
                                  <p style={{ display: "none" }}>
                                    {/*console.log("descrition : ", user[14])*/}
                                    {user[14]}
                                  </p>
                                  <div className="property-icon">
                                    <img
                                      // src={require("../../img/icon/bed.png")}
                                      src="assets/img/icon/bed.png"
                                    />
                                    <img
                                      // src={require('../../img/icon/shawer.png')}
                                      src="assets/img/icon/shawer.png"
                                    />
                                    <img
                                      // src={require("../../img/icon/cars.png")}
                                      src="assets/img/icon/cars.png"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                </div>
                {true ? (
                  <>
                    {" "}
                    <div className="col-md-12">
                      <div className="pull-right">
                        <div className="pagination">
                          <ul>
                            <li>
                              <a href="#">Prev</a>
                            </li>
                            <li>
                              <a href="#">1</a>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                            <li>
                              <a href="#">4</a>
                            </li>
                            <li>
                              <a href="#">Next</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                  </>
                ) : (
                  ""
                )}
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
                      alt="propert image"
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
                    (C) <a href="https://5techg.com/">5TechGIT</a> , All rights
                    reserved 2020
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
      </>
    );
  }
}

export default Properties;
