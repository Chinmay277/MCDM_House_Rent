import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

var CityJson = require("../CityName/cities.json");
var StateJson = require("../CityName/state.json");

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function Properties({ filterData }) {
  const [relativeMatrix, setRelativeMatrix] = React.useState({
    rvd: 1,
    rvt: 1,
    rvf: 1,
    dvt: 1,
    dvf: 1,
    tvf: 1,
  });

  const [params, setParams] = React.useState({
    rent: [10000, 50000],
    deposite: [10000, 50000],
    floor: [1, 12],
  });
  const [types, setTypes] = React.useState({
    type1: [true, 1],
    type2: [true, 2],
    type3: [true, 3],
    type4: [true, 4],
    type5: [true, 5],
  });

  const filter = (e) => {
    e.preventDefault();
    console.log("filter", relativeMatrix, types, params);
    filterData(
      Object.keys(relativeMatrix).map((val) => parseInt(relativeMatrix[val])),
      Object.keys(types)
        .map((val, indx) => [indx, parseInt(types[val][1])])
        .filter((i) => i[1] !== 0),
      Object.keys(params).map((val) => [
        parseInt(parseInt(params[val][0])),
        parseInt(parseInt(params[val][1])),
      ])
    );
  };

  const handleRelativeMatrixChange = (e) => {
    setRelativeMatrix({ ...relativeMatrix, [e.target.id]: e.target.value });
  };

  const handleTypeStateChange = (e) => {
    console.log(e.target.id, e.target.value, types);
    setTypes({
      ...types,
      [e.target.id]: [!types[e.target.id][0], types[e.target.id][1]],
    });
  };

  const handleTypeValueChange = (e) => {
    console.log(e.target.id, e.target.value, types);
    setTypes({
      ...types,
      [e.target.id]: [types[e.target.id][0], e.target.value],
    });
  };

  const handleRentChange = (event, newValue) => {
    //console.log(event, newValue);
    setParams({ ...params, rent: newValue });
  };
  const handleDepositeChange = (event, newValue) => {
    //console.log(event, newValue);
    setParams({ ...params, deposite: newValue });
  };
  const handleFloorChange = (event, newValue) => {
    //console.log(event, newValue);
    setParams({ ...params, floor: newValue });
  };
  return (
    <>
      <div
        className="home-lager-shearch"
        style={{
          backgroundColor: "rgb(252, 252, 252)",
          paddingTop: 25,
          marginTop: "-125px",
        }}
      >
        <div className="container">
          <div
            className="col-md-12 large-search"
            style={{ margin: "8rem 0px 0px -21px" }}
          >
            <div className="search-form wow pulse animated">
              <form action className=" form-inline">
                {false ? (
                  <div className="col-md-12">
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Key word"
                      />
                    </div>
                    <div className="col-md-4">
                      <div className="btn-group bootstrap-select">
                        <div
                          className="dropdown-menu open"
                          style={{
                            maxHeight: 335,
                            overflow: "hidden",
                            minHeight: 161,
                          }}
                        >
                          <div className="bs-searchbox">
                            <input
                              type="text"
                              className="form-control"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <select
                          id="lunchBegins"
                          className="selectpicker"
                          data-live-search="true"
                          data-live-search-style="begins"
                          title="Select your city"
                          tabIndex={-98}
                          onChange={this.cityandstate}
                        >
                          <option
                            className="bs-title-option"
                            value={this.state.City}
                          >
                            Select your city
                          </option>
                          {(CityJson || []).map((user, index) =>
                            this.state.State === "" ||
                            this.state.State === user.state ? (
                              <option
                                value={[user.state, user.name]}
                                id={user.name}
                              >
                                {() => {
                                  debugger;
                                }}
                                {user.name}
                              </option>
                            ) : null
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <select
                        id="basic"
                        className="selectpicker show-tick form-control"
                        value={this.state.State}
                        onChange={this.SetStateName}
                      >
                        {(StateJson || []).map((user, index) => (
                          <option value={user.name} id={user.name}>
                            {user.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="col-md-12 ">
                  <div className="search-row">
                    <div className="col-sm-4">
                      <label htmlFor="price-range">Rent ($):</label>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        min={5000}
                        max={60000}
                        value={params.rent}
                        onChange={handleRentChange}
                      />
                      <div style={{ textAlign: "center" }}>
                        <b className="color">
                          {params.rent[0]}$ - {params.rent[1]}$
                        </b>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="price-range">Deposite ($):</label>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        min={5000}
                        max={60000}
                        value={params.deposite}
                        onChange={handleDepositeChange}
                      />
                      <div style={{ textAlign: "center" }}>
                        <b className="color">
                          {params.deposite[0]}$ - {params.deposite[1]}$
                        </b>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="property-geo">Building Floor :</label>
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        value={params.floor}
                        min={1}
                        max={12}
                        onChange={handleFloorChange}
                      />
                      <div style={{ textAlign: "center" }}>
                        <b className="color">
                          {params.floor[0]} - {params.floor[1]}
                        </b>
                      </div>
                    </div>
                  </div>

                  <div className="row" style={{ marginTop: "3em" }}>
                    <div className="col-sm-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          onChange={(e) => console.log("changed!")}
                        />
                        <label
                          class="form-check-label mr-2"
                          for="type1"
                          style={{ marginRight: "1em", marginLeft: "1em" }}
                        >
                          Type1
                        </label>
                        <select
                          id="type1"
                          class="form-select mr-2"
                          aria-label="Default select example"
                          value={types.type1[1]}
                          onChange={handleTypeValueChange}
                          disabled={types.type1[0] ? false : true}
                        >
                          {[0, 1, 2, 3, 4, 5].map((val, index) => (
                            <option
                              key={val.toString() + "_" + index.toString()}
                              value={val}
                            >
                              {val}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="type2"
                          checked={types.type2 ? true : false}
                          onChange={handleTypeStateChange}
                        />
                        <label
                          class="form-check-label mr-2"
                          for="type2"
                          style={{ marginRight: "1em", marginLeft: "1em" }}
                        >
                          Type2
                        </label>
                        <select
                          id="type2"
                          class="form-select mr-2"
                          aria-label="Default select example"
                          value={types.type2[1]}
                          onChange={handleTypeValueChange}
                        >
                          {[0, 1, 2, 3, 4, 5].map((val, index) => (
                            <option
                              key={val.toString() + "_" + index.toString()}
                              value={val}
                            >
                              {val}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="type3"
                          checked={types.type3[0] ? true : false}
                          onChange={handleTypeStateChange}
                        />
                        <label
                          class="form-check-label mr-2"
                          for="type3"
                          style={{ marginRight: "1em", marginLeft: "1em" }}
                        >
                          Type3
                        </label>
                        <select
                          id="type3"
                          class="form-select mr-2"
                          aria-label="Default select example"
                          value={types.type3[1]}
                          onChange={handleTypeValueChange}
                        >
                          {[0, 1, 2, 3, 4, 5].map((val, index) => (
                            <option
                              key={val.toString() + "_" + index.toString()}
                              values={val}
                            >
                              {val}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="type4"
                          checked={types.type4[0] ? true : false}
                          onChange={handleTypeStateChange}
                        />
                        <label
                          class="form-check-label mr-2"
                          for="type4"
                          style={{ marginRight: "1em", marginLeft: "1em" }}
                        >
                          Type4
                        </label>
                        <select
                          id="type4"
                          class="form-select mr-2"
                          aria-label="Default select example"
                          value={types.type4[1]}
                          onChange={handleTypeValueChange}
                        >
                          {[0, 1, 2, 3, 4, 5].map((val, index) => (
                            <option
                              key={val.toString() + "_" + index.toString()}
                              value={val}
                            >
                              {val}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="type5"
                          checked={types.type5[0] ? true : false}
                          onChange={handleTypeStateChange}
                        />
                        <label
                          class="form-check-label mr-2"
                          for="type5"
                          style={{ marginRight: "1em", marginLeft: "1em" }}
                        >
                          Type5
                        </label>
                        <select
                          id="type5"
                          class="form-select mr-2"
                          aria-label="Default select example"
                          value={types.type5[1]}
                          onChange={handleTypeValueChange}
                        >
                          {[0, 1, 2, 3, 4, 5].map((val, index) => (
                            <option
                              key={val.toString() + "_" + index.toString()}
                              value={val}
                            >
                              {val}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row" style={{ marginTop: "3em" }}>
                    <div className="col-sm-4">
                      <div class="form-select">
                        <label
                          class="form-check-label mr-2"
                          for="flexCheckChecked"
                          style={{ marginRight: "1em" }}
                        >
                          Rent vs Deposite
                        </label>
                        <select
                          id="rvd"
                          class="form-control mr-2"
                          aria-label="Default select example"
                          value={relativeMatrix.rvd}
                          onChange={handleRelativeMatrixChange}
                        >
                          {[1, 3, 5, 7, 9].map((val, index) => (
                            <option
                              key={val.toString() + "_" + index.toString()}
                              value={val}
                            >
                              {val}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div class="form-select">
                        <label
                          class="form-check-label mr-2"
                          for="flexCheckChecked"
                          style={{ marginRight: "1em" }}
                        >
                          Rent vs Type
                        </label>
                        <select
                          id="rvt"
                          class="form-control mr-2"
                          aria-label="Default select example"
                          value={relativeMatrix.rvt}
                          onChange={handleRelativeMatrixChange}
                        >
                          {[1, 3, 5, 7, 9].map((val, index) => (
                            <option
                              key={val.toString() + "_" + index.toString()}
                              value={val}
                            >
                              {val}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div class="form-select">
                        <label
                          class="form-check-label mr-2"
                          for="flexCheckChecked"
                          style={{ marginRight: "1em" }}
                        >
                          Rent vs Floor
                        </label>
                        <select
                          id="rvf"
                          class="form-control mr-2"
                          aria-label="Default select example"
                          value={relativeMatrix.rvf}
                          onChange={handleRelativeMatrixChange}
                        >
                          {[1, 3, 5, 7, 9].map((val, index) => (
                            <option
                              key={val.toString() + "_" + index.toString()}
                              value={val}
                            >
                              {val}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div class="form-select">
                        <label
                          class="form-check-label mr-2"
                          for="flexCheckChecked"
                          style={{ marginRight: "1em" }}
                        >
                          Deposite vs Type
                        </label>
                        <select
                          id="dvt"
                          class="form-control mr-2"
                          aria-label="Default select example"
                          value={relativeMatrix.dvt}
                          onChange={handleRelativeMatrixChange}
                        >
                          {[1, 3, 5, 7, 9].map((val, index) => (
                            <option
                              key={val.toString() + "_" + index.toString()}
                              value={val}
                            >
                              {val}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div class="form-select">
                        <label
                          class="form-check-label mr-2"
                          for="flexCheckChecked"
                          style={{ marginRight: "1em" }}
                        >
                          Deposite vs Floor
                        </label>
                        <select
                          id="dvf"
                          class="form-control mr-2"
                          aria-label="Default select example"
                          value={relativeMatrix.dvf}
                          onChange={handleRelativeMatrixChange}
                        >
                          {[1, 3, 5, 7, 9].map((val, index) => (
                            <option
                              key={val.toString() + "_" + index.toString()}
                              value={val}
                            >
                              {val}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div class="form-select">
                        <label
                          class="form-check-label mr-2"
                          for="flexCheckChecked"
                          style={{ marginRight: "1em" }}
                        >
                          Type vs Floor
                        </label>
                        <select
                          id="tvf"
                          class="form-control mr-2"
                          aria-label="Default select example"
                          value={relativeMatrix.tvf}
                          onChange={handleRelativeMatrixChange}
                        >
                          {[1, 3, 5, 7, 9].map((val, index) => (
                            <option
                              key={val.toString() + "_" + index.toString()}
                              value={val}
                            >
                              {val}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="center">
                  <input
                    type="button"
                    defaultValue=""
                    className="btn btn-default btn-lg-sheach"
                    onClick={filter}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
