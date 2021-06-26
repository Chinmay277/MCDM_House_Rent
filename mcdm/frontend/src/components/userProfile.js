import React, { Component } from 'react'

export default class UserProfile extends Component {

    constructor(props){
        super(props);
        this.state ={
            email: this.props.match.params.email
        }
    }
    render() {
        return (
            <div>
               

                <div class="page-head"> 
                    <div class="container">
                        <div class="row">
                            <div class="page-head-content">
                                <h1 class="page-title">Hello : <span class="orange strong">{this.state.email}</span></h1>               
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content-area user-profiel" style={{backgroundColor: "#FCFCFC"}}>
                    <div class="container">   
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 profiel-container">

                                <form action="" method="">
                                    <div class="profiel-header">
                                        <h3>
                                            <b>BUILD</b> YOUR PROFILE <br/>
                                            <small>This information will let us know more about you.</small>
                                        </h3>
                                        <hr/>
                                    </div>

                                    <div class="clear">
                                        <div class="col-sm-3 col-sm-offset-1">
                                            <div class="picture-container">
                                                <div class="picture">
                                                    <img src="assets/img/avatar.png" class="picture-src" id="wizardPicturePreview" title=""/>
                                                    <input type="file" id="wizard-picture"/>
                                                </div>
                                                <h6>Choose Picture</h6>
                                            </div>
                                        </div>

                                        <div class="col-sm-3 padding-top-25">

                                            <div class="form-group">
                                                <label>First Name <small>(required)</small></label>
                                                <input name="firstname" type="text" class="form-control" placeholder="Andrew..."/>
                                            </div>
                                            <div class="form-group">
                                                <label>Last Name <small>(required)</small></label>
                                                <input name="lastname" type="text" class="form-control" placeholder="Smith..."/>
                                            </div> 
                                            <div class="form-group">
                                                <label>Email <small>(required)</small></label>
                                                <input name="email" type="email" class="form-control" placeholder="andrew@email@email.com.com"/>
                                            </div> 
                                        </div>
                                        <div class="col-sm-3 padding-top-25">
                                            <div class="form-group">
                                                <label>Password <small>(required)</small></label>
                                                <input name="Password" type="password" class="form-control"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Confirm password : <small>(required)</small></label>
                                                <input type="password" class="form-control"/>
                                            </div>
                                        </div>  

                                    </div>

                                    <div class="clear">
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <div class="col-sm-5 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>Facebook :</label>
                                                <input name="Facebook" type="text" class="form-control" placeholder="https://facebook.com/user"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Twitter :</label>
                                                <input name="Twitter" type="text" class="form-control" placeholder="https://Twitter.com/@user"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Website :</label>
                                                <input name="website" type="text" class="form-control" placeholder="https://yoursite.com/"/>
                                            </div>
                                        </div>  

                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label>Public email :</label>
                                                <input name="p-email" type="email" class="form-control" placeholder="p-email@rmail.com"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Phone :</label>
                                                <input name="Phone" type="text" class="form-control" placeholder="+1 9090909090"/>
                                            </div>
                                            <div class="form-group">
                                                <label>FAX :</label>
                                                <input name="FAX" type="text" class="form-control" placeholder="+1 9090909090"/>
                                            </div>
                                        </div>
        
                                    </div>
                            
                                    <div class="col-sm-5 col-sm-offset-1">
                                        <br/>
                                        <input type='button' class='btn btn-finish btn-primary' name='finish' value='Finish' />
                                    </div>
                                    <br/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="footer-area">
                        <div class=" footer">
                            <div class="container">
                                <div class="row">

                                    <div class="col-md-3 col-sm-6 wow fadeInRight animated">
                                        <div class="single-footer">
                                            <h4>About us </h4>
                                            <div class="footer-title-line"></div>

                                            <img src="assets/img/footer-logo.png" alt="" class="wow pulse" data-wow-delay="1s"/>
                                            <p>Lorem ipsum dolor cum necessitatibus su quisquam molestias. Vel unde, blanditiis.</p>
                                            <ul class="footer-adress">
                                                <li><i class="pe-7s-map-marker strong"> </i> 9089 your adress her</li>
                                                <li><i class="pe-7s-mail strong"> </i> email@yourcompany.com</li>
                                                <li><i class="pe-7s-call strong"> </i> +1 908 967 5906</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 wow fadeInRight animated">
                                        <div class="single-footer">
                                            <h4>Quick links </h4>
                                            <div class="footer-title-line"></div>
                                            <ul class="footer-menu">
                                                <li><a href="properties.html">Properties</a>  </li> 
                                                <li><a href="#">Services</a>  </li> 
                                                <li><a href="submit-property.html">Submit property </a></li> 
                                                <li><a href="contact.html">Contact us</a></li> 
                                                <li><a href="faq.html">fqa</a>  </li> 
                                                <li><a href="faq.html">Terms </a>  </li> 
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 wow fadeInRight animated">
                                        <div class="single-footer">
                                            <h4>Last News</h4>
                                            <div class="footer-title-line"></div>
                                            <ul class="footer-blog">
                                                <li>
                                                    <div class="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                                        <a href="single.html">
                                                            <img src="assets/img/demo/small-proerty-2.jpg"/>
                                                        </a>
                                                        <span class="blg-date">12-12-2016</span>

                                                    </div>
                                                    <div class="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                                        <h6> <a href="single.html">Add news functions </a></h6> 
                                                        <p >Lorem ipsum dolor sit amet, nulla ...</p>
                                                    </div>
                                                </li> 

                                                <li>
                                                    <div class="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                                        <a href="single.html">
                                                            <img src="assets/img/demo/small-proerty-2.jpg"/>
                                                        </a>
                                                        <span class="blg-date">12-12-2016</span>

                                                    </div>
                                                    <div class="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                                        <h6> <a href="single.html">Add news functions </a></h6> 
                                                        <p >Lorem ipsum dolor sit amet, nulla ...</p>
                                                    </div>
                                                </li> 

                                                <li>
                                                    <div class="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                                        <a href="single.html">
                                                            <img src="assets/img/demo/small-proerty-2.jpg"/>
                                                        </a>
                                                        <span class="blg-date">12-12-2016</span>

                                                    </div>
                                                    <div class="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                                        <h6> <a href="single.html">Add news functions </a></h6> 
                                                        <p >Lorem ipsum dolor sit amet, nulla ...</p>
                                                    </div>
                                                </li> 


                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 wow fadeInRight animated">
                                        <div class="single-footer news-letter">
                                            <h4>Stay in touch</h4>
                                            <div class="footer-title-line"></div>
                                            <p>Lorem ipsum dolor sit amet, nulla  suscipit similique quisquam molestias. Vel unde, blanditiis.</p>

                                            <form>
                                                <div class="input-group">
                                                    <input class="form-control" type="text" placeholder="E-mail ... "/>
                                                    <span class="input-group-btn">
                                                        <button class="btn btn-primary subscribe" type="button"><i class="pe-7s-paper-plane pe-2x"></i></button>
                                                    </span>
                                                </div>
                                            </form> 

                                            <div class="social pull-right"> 
                                                <ul>
                                                    <li><a class="wow fadeInUp animated" href="https://twitter.com/kimarotec"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a class="wow fadeInUp animated" href="https://www.facebook.com/kimarotec" data-wow-delay="0.2s"><i class="fa fa-facebook"></i></a></li>
                                                    <li><a class="wow fadeInUp animated" href="https://plus.google.com/kimarotec" data-wow-delay="0.3s"><i class="fa fa-google-plus"></i></a></li>
                                                    <li><a class="wow fadeInUp animated" href="https://instagram.com/kimarotec" data-wow-delay="0.4s"><i class="fa fa-instagram"></i></a></li>
                                                    <li><a class="wow fadeInUp animated" href="https://instagram.com/kimarotec" data-wow-delay="0.6s"><i class="fa fa-dribbble"></i></a></li>
                                                </ul> 
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="footer-copy text-center">
                            <div class="container">
                                <div class="row">
                                <div class="pull-left">
                                        <span> (C) <a href="https://5techg.com/">5TechGIT</a> , All rights reserved 2020  </span> 
                                    </div> 
                                    <div class="bottom-menu pull-right"> 
                                        <ul> 
                                            <li><a class="wow fadeInUp animated" href="#" data-wow-delay="0.2s">Home</a></li>
                                            <li><a class="wow fadeInUp animated" href="#" data-wow-delay="0.3s">Property</a></li>
                                            <li><a class="wow fadeInUp animated" href="#" data-wow-delay="0.4s">Faq</a></li>
                                            <li><a class="wow fadeInUp animated" href="#" data-wow-delay="0.6s">Contact</a></li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
