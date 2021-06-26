import React, { Component } from 'react'
import { Helmet } from "react-helmet";

export default class SubmitProperty extends Component {

    constructor(props){
        super(props);
        this.state ={
            email: this.props.match.params.email
        }
    }
    render() {
        return (
            <div>

<div>
 
  <div className="page-head"> 
    <div className="container">
      <div className="row">
        <div className="page-head-content">
          <h1 className="page-title">Submit new property</h1>               
        </div>
      </div>
    </div>
  </div>
  {/* End page header */}
  {/* property area */}
  <div className="content-area submit-property" style={{backgroundColor: '#FCFCFC'}}>&nbsp;
    <div className="container">
      <div className="clearfix"> 
        <div className="wizard-container"> 
          <div className="wizard-card ct-wizard-orange" id="wizardProperty">
            <form action method>                        
              <div className="wizard-header">
                <h3>
                  <b>Submit</b> YOUR PROPERTY <br />
                  <small>Submit your own property to list</small>
                </h3>
              </div>
              <ul>
                <li><a href="#step1" data-toggle="tab">Step 1 </a></li>
                <li><a href="#step2" data-toggle="tab">Step 2 </a></li>
                <li><a href="#step3" data-toggle="tab">Step 3 </a></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane" id="step1">
                  <div className="row p-b-15  ">
                    <h4 className="info-text"> Let's start with the basic information (with validation)</h4>
                    <div className="col-sm-4 col-sm-offset-1">
                      <div className="picture-container">
                        <div className="picture">
                          <img src="assets/img/default-property.jpg" className="picture-src" id="wizardPicturePreview" title />
                          <input type="file" id="wizard-picture" />
                        </div> 
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Property name <small>(required)</small></label>
                        <input name="propertyname" type="text" className="form-control" placeholder="Super villa ..." />
                      </div>
                      <div className="form-group">
                        <label>Property rent <small>(required)</small></label>
                        <input name="propertyrent" type="text" className="form-control" placeholder={3330000} />
                      </div> 
                      <div className="form-group">
                        <label>Property deposit <small>(required)</small></label>
                        <input name="propertydeposit" type="text" className="form-control" placeholder={3330000} />
                      </div>
                      <div className="form-group">
                        <label>Property maintenance <small>(required)</small></label>
                        <select id="propertymaintenance" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select maintenance type" name="propertyMaintenance">
                          <option value="including">Including maintenance</option>
                          <option value="excluding">Excluding maintenance</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>BHK Type <small>(required)</small></label>
                        <select id="bhktype" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select BHK type" name="propertyType">
                          <option value="1rk">1 RK</option>
                          <option value="1bhk">1 BHK</option>
                          <option value="2bhk">2 BHK</option>
                          <option value="3bhk">3 BHK</option>
                          <option value="4bhk">4 BHK</option>
                          <option value="4pbhk">4+ BHK</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Select floor<small>(required)</small></label>
                        <select id="floor" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select Floor" name="floor">
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option><option>
                          </option><option value={10}>10</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Property age <small>(required)</small></label>
                        <select id="propertyAge" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select BHK Type" name="propertyType">
                          <option value="uc">Under construction</option>
                          <option value="lty">Less that a year</option>
                          <option value="1_3">1 to 3 years</option>
                          <option value="3_5">3 to 5 years</option>
                          <option value="5_10">5 to 10 years</option>
                          <option value="mt10">More than 10 years</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Telephone <small>(empty if you wanna use default phone number)</small></label>
                        <input name="phone" type="text" className="form-control" placeholder="+1 473 843 7436" />
                      </div>
                    </div>
                  </div>
                </div>
                {/*  End step 1 */}
                <div className="tab-pane" id="step2">
                  <h4 className="info-text"> Provide rental details </h4>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Preferred tenants <small>(required)</small></label>
                          <select id="preferredTenant" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select Tenant Type" name="tenantType">
                            <option value="dm">Doesn't matter</option>
                            <option value="fm">Family</option>
                            <option value="bach">Bachelors</option>
                            <option value="cmp">Commercial</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Furnishing <small>(required)</small></label>
                          <select id="furnishing" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select Furnishing Type" name="furnishingType">
                            <option value="fullyFurnished">Fully furnished</option>
                            <option value="semiFurnished">Semi furnished</option>
                            <option value="unfurnished">Unfurnished</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Available from <small>(required)</small></label>
                          <input type="date" className="form-control" id="availableFrom" name="availableFrom" /> 
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Parking <small>(required)</small></label>
                          <select id="furnishing" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select Furnishing Type" name="furnishingType">
                            <option value="fullyFurnished">Bike</option>
                            <option value="semiFurnished">Car</option>
                            <option value="unfurnished">Bike + Car</option>
                            <option value="unfurnished">None</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="step3">
                  <h4 className="info-text"> How much your Property is Beautiful ? </h4>
                  <div className="row">
                    <div className="col-sm-12"> 
                      <div className="col-sm-12"> 
                        <div className="form-group">
                          <label>Property Description :</label>
                          <textarea name="description" className="form-control" defaultValue={""} />
                        </div> 
                      </div> 
                    </div>
                    <div className="col-sm-12 padding-top-15">                                                   
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label htmlFor="min-bed">Total bed :</label>
                          <input type="text" name="minbed" className="form-control" />                                                     
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label htmlFor="minbath">Total bathrooms :</label>
                          <input type="text" name="minbath" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label htmlFor="minbath">Balcony :</label>
                          <input type="text" name="balcony" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Water supply <small>(required)</small></label>
                          <select id="waterSupply" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select Watersupply Type" name="waterSupplyType">
                            <option value="Corporation">Corporation</option>
                            <option value="Borewell">Borewell</option>
                            <option value="CorporationBorewell">Corporation + Borewell</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>GYM <small>(required)</small></label>
                          <select id="gym" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select GYM status" name="gym">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Gated security <small>(required)</small></label>
                          <select id="gsecurity" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select Gated security status" name="gym">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 padding-top-15">
                      <h5 className>Select available amenities :</h5>
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Lift
                        </label>
                      </div>
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Air Conditioner
                        </label>
                      </div>
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Intercom
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Children play area
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Servent room
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Gas pipeline
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Rain water harvesting
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> House Keeping
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Visitior parking
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Internet services
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Club house
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Swimming pool
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Fire safety
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Shopping center
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Park
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Sewage treatment plant
                        </label>
                      </div> 
                      <div className="col-sm-3 form-check-inline">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultValue /> Power backup
                        </label>
                      </div> 
                    </div>
                    <div className="col-sm-12 padding-top-15">
                      <h5 className>Select Property address :</h5>
                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Property State :</label>
                          <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your state" name="propertyState">
                            <option>Maharashtra</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Property City :</label>
                          <select id="lunchBegins" className="selectpicker" data-live-search="true" data-live-search-style="begins" title="Select your city" name="propertyCity">
                            <option>Sangli</option>
                            <option>Kolhapur</option>
                            <option>Pune</option>
                            <option>Solapur</option>
                            <option>Satara</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 padding-top-15">
                    </div>
                    <br />
                  </div>
                </div>
                {/* End step 2 */}
              </div>
              <div className="wizard-footer">
                <div className="pull-right">
                  <input type="button" className="btn btn-next btn-primary" name="next" defaultValue="Next" />
                  <input type="button" className="btn btn-finish btn-primary " name="finish" defaultValue="Finish" />
                </div>
                <div className="pull-left">
                  <input type="button" className="btn btn-previous btn-default" name="previous" defaultValue="Previous" />
                </div>
                <div className="clearfix" />                                            
              </div>	
            </form>
          </div>
          {/* End submit form */}
        </div> 
      </div>
    </div>
  </div>
</div>

<Helmet>
    <script src="assets/js/modernizr-2.6.2.min.js"></script>

<script src="assets/js/jquery-1.10.2.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/bootstrap-select.min.js"></script>
<script src="assets/js/bootstrap-hover-dropdown.js"></script>

<script src="assets/js/easypiechart.min.js"></script>
<script src="assets/js/jquery.easypiechart.min.js"></script>

<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/wow.js"></script>

<script src="assets/js/icheck.min.js"></script>
<script src="assets/js/price-range.js"></script>

<script src="assets/js/main.js"></script>

<script src="assets/js/jquery.bootstrap.wizard.js" type="text/javascript"></script>
<script src="assets/js/jquery.validate.min.js"></script>
<script src="assets/js/wizard.js"></script>
      </Helmet>



            </div>
        );
    }
}



