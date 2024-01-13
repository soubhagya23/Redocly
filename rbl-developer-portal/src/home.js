
import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import APIDetails from './api_details'
import { Link } from 'react-router-dom';




export default function(props) {

  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    dotsClass: "slider-dots"
    
  };
  const [toggle, setToggle] = useState(false)
  const [expand, setExpand] = useState(false);

return (
<>
  <meta charSet="utf-8" />
  <link rel="canonical" href="https://www.rblbank.com/" />
  <link rel="shortlink" href="https://www.rblbank.com/" />
  <meta
    name="description"
    content="Wide range of Online Banking, Personal Banking services including Credit cards, personal loans, fixed deposits, savings account & insurance for all your personal needs."
  />
  <meta property="og:site_name" content="RBL Bank" />
  <meta property="og:url" content="https://www.rblbank.com/" />
  <meta
    property="og:title"
    content="Personal Banking, Online Banking Services | RBL Bank"
  />
  <meta
    property="og:description"
    content="Wide range of Online Banking, Personal Banking services including Credit cards, personal loans, fixed deposits, savings account & insurance for all your personal needs."
  />
  <meta name="Generator" content="Drupal 9 (https://www.drupal.org)" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <link
    rel="icon"
    href="pages/core/misc/favicon.ico"
    type="image/vnd.microsoft.icon"
  />
  <title>RBL Bank</title>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  />
  <link
    rel="stylesheet"
    media="all"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/modules/contrib/tb_megamenu/css/tb_megamenu.bootstrap.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/modules/contrib/tb_megamenu/css/tb_megamenu.base.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/modules/contrib/tb_megamenu/css/tb_megamenu.default.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/modules/contrib/tb_megamenu/css/tb_megamenu.compatibility.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/libraries/font-awesome-4.7.0/css/font-awesome.min.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/libraries/bootstrap/css/bootstrap.min.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/css/menu.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/libraries/slick-1.8.1/slick/slick.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/css/style.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/css/colors.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/libraries/aos/aos.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/libraries/owl/owl.carousel.min.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/libraries/owl/owl.theme.default.min.css?s4wcaz"
  />
  <link
    rel="stylesheet"
    media="all"
    href="pages/themes/custom/rbl_bank/css/newcss.css"
  />
  
 
  <a href="#main-content" className="visually-hidden focusable skip-link">
    Skip to main content
  </a>

  <Header />

  <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
    <div id="page-wrapper">
    <div>

      <Slider {...settings}>
        <div>
          <h3> <div className="field__item">
      
      <section
        className="common-section banner-section home-page-banner"
        id="data-section1"
      >
        <div
          className="banner-img banner-img-wrap w-100"
          data-aos="fade-up"
          data-aos-delay={300}
          data-aos-anchor="#data-section1"
        >
          <div
            className="banner-img-desktop imgback1"
          
          />
          <div
            className="banner-img-mobile imgback1"
           
          />
          <video width={320} height={240} controls="">
            <source src="" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row align-items-center banner-row">
            <div className="col-12">
              <div
                className="banner-info left-wrap"
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-anchor="#data-section1"
            
              >
                <h2 className="mb">
 
                  <div className="clearfix text-formatted field field--name-field-banner-description field--type-text-long field--label-hidden field__item a3">
                   




                    <div className="banner-info-inner xs-text-center">
                      <h2 className="text-white">
                        Partner with us to create <br />
                        Incredible customer experiencess
                      </h2>
                      <div
                        className="aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-anchor="#data-section1"
                        data-aos-delay={900}
                      >
                        <a
                       
                          className="btn common-btn-blue"
                          href="https://digital.rblbank.com/fe-dsa/savings/go-
account?utm_source=website&utm_medium=website-hp-go-a
ccount-banner&utm_term=hp-go-account-spot1&utm_campaign=website-go-account"
                          id="hp-hero-banner-go-ac
count"
                          target="_blank"
                        >
                          Explore API
                        </a>
                      </div>
                    </div>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div></h3>


        </div>
        <div>
          <h3> <div className="field__item">
      
                      <section
                        className="common-section banner-section home-page-banner"
                        id="data-section1"
                      >
                        <div
                          className="banner-img banner-img-wrap w-100"
                          data-aos="fade-up"
                          data-aos-delay={300}
                          data-aos-anchor="#data-section1"
                        >
                          <div
                            className="banner-img-desktop imgback2"
                           
                          />
                          <div
                            className="banner-img-mobile imgback2"
                           
                          />
                          <video width={320} height={240} controls="">
                            <source src="" type="video/mp4" />
                          </video>
                        </div>
                        <div className="container">
                          <div className="row align-items-center banner-row">
                            <div className="col-12">
                              <div
                                className="banner-info left-wrap"
                                data-aos="fade-up"
                                data-aos-delay={600}
                                data-aos-anchor="#data-section1"
                              
                              >
                                <h2 className="mb">
                 
                                  <div className="clearfix text-formatted field field--name-field-banner-description field--type-text-long field--label-hidden field__item a3">
                                 




                                    <div className="banner-info-inner xs-text-center">
                                      <h2 className="text-white">
                                     Go Account
                                      </h2>
                                      <div
                                        className="aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-anchor="#data-section1"
                                        data-aos-delay={900}
                                      >
                                        <a
                                        
                                          className="btn common-btn-blue"
                                          href="https://digital.rblbank.com/fe-dsa/savings/go-
 account?utm_source=website&utm_medium=website-hp-go-a
 ccount-banner&utm_term=hp-go-account-spot1&utm_campaign=website-go-account"
                                          id="hp-hero-banner-go-ac
 count"
                                          target="_blank"
                                        >
                                          Explore API
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div></h3>
        </div>
        <div>
         <h3> <div className="field__item">
      
                      <section
                        className="common-section banner-section home-page-banner"
                        id="data-section1"
                      >
                        <div
                          className="banner-img banner-img-wrap w-100"
                          data-aos="fade-up"
                          data-aos-delay={300}
                          data-aos-anchor="#data-section1"
                        >
                          <div
                            className="banner-img-desktop imgback3"
                          
                          />
                          <div
                            className="banner-img-mobile imgback3"
                           
                          />
                          <video width={320} height={240} controls="">
                            <source src="" type="video/mp4" />
                          </video>
                        </div>
                        <div className="container">
                          <div className="row align-items-center banner-row">
                            <div className="col-12">
                              <div
                                className="banner-info left-wrap"
                                data-aos="fade-up"
                                data-aos-delay={600}
                                data-aos-anchor="#data-section1"
                               
                              >
                                <h2 className="mb">
                 
                                  <div className="clearfix text-formatted field field--name-field-banner-description field--type-text-long field--label-hidden field__item a3">
                                   




                                    <div className="banner-info-inner xs-text-center">
                                      <h2 className="text-white">
                                      Credit Card Bill Payment Options
                                      </h2>
                                      <div
                                        className="aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-anchor="#data-section1"
                                        data-aos-delay={900}
                                      >
                                        <a
                                          
                                          className="btn common-btn-blue"
                                          href="https://digital.rblbank.com/fe-dsa/savings/go-
 account?utm_source=website&utm_medium=website-hp-go-a
 ccount-banner&utm_term=hp-go-account-spot1&utm_campaign=website-go-account"
                                          id="hp-hero-banner-go-ac
 count"
                                          target="_blank"
                                        >
                                          Explore API
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div></h3>
        </div>
        <div>
        <h3> <div className="field__item">
      
      <section
        className="common-section banner-section home-page-banner"
        id="data-section1"
      >
        <div
          className="banner-img banner-img-wrap w-100"
          data-aos="fade-up"
          data-aos-delay={300}
          data-aos-anchor="#data-section1"
        >
          <div
            className="banner-img-desktop imgback2"
           
          />
          <div
            className="banner-img-mobile imgback2"
            
          />
          <video width={320} height={240} controls="">
            <source src="" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row align-items-center banner-row">
            <div className="col-12">
              <div
                className="banner-info left-wrap"
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-anchor="#data-section1"
               
              >
                <h2 className="mb">
 
                  <div className="clearfix text-formatted field field--name-field-banner-description field--type-text-long field--label-hidden field__item a3">
                 




                    <div className="banner-info-inner xs-text-center">
                      <h2 className="text-white">
                      Hurry! Pay your Advance Tax
                      </h2>
                      <div
                        className="aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-anchor="#data-section1"
                        data-aos-delay={900}
                      >
                        <a
                          
                          className="btn common-btn-blue"
                          href="https://digital.rblbank.com/fe-dsa/savings/go-
account?utm_source=website&utm_medium=website-hp-go-a
ccount-banner&utm_term=hp-go-account-spot1&utm_campaign=website-go-account"
                          id="hp-hero-banner-go-ac
count"
                          target="_blank"
                        >
                          Explore API
                        </a>
                      </div>
                    </div>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div></h3>
        </div>
      </Slider>
    </div>



      <div id="page">
        <div className="highlighted">
          <aside className="container section clearfix" role="complementary">
          </aside>
        </div>
        <div id="main-wrapper" className="layout-main-wrapper clearfix">
          <div id="main">
            <div className="row-offcanvas row-offcanvas-left clearfix">
              <main className="main-content col" id="content" role="main">
                <section className="section">
                  <a id="main-content" tabIndex={-1} />
             
                 <div data-drupal-messages-fallback="" className="hidden" />
            
               


                  
                  <div className="home-banner-wrapper ">
             
                   
                   
                   
                  </div>
                </section>
              </main>
            </div>
          </div>
       
          <div
            id="block-cardoffers"
            className="block block-block-content block-block-content5bcaf945-d833-4c9a-876f-6f0703fb1564"
          >
            <div className="content"></div>
          </div>
          <div
            id="block-rblmobileapp"
            className="block block-block-content block-block-content39d3403e-81eb-4d01-ba8c-e150ab085d80"
          >
            <div className="content">
              <section
                className=""
                id="data-mobank-app"
                
              >
              </section>
              <div className="block block-block-content block-block-content1d752ca4-2ff5-4def-8d8a-ed70563765f0">
                <div className="content">
                  <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item a3">
                    <section
                      className=" related-blog-section bg-gray-c"
                      id="data-related-blog"
                      
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div
                              className="rbl-myapp-card"
                            
                              data-aos-anchor="#data-mobank-app"
                            >
                              <div className="rbl-myapp-left">
                            
                                <img
                                  src="img/Exceed_Global_Elite.png"
                                  alt="RBL MoBank App"
                                  className="img-fluid-width"
                                 
                                />
                              </div>
                              <div className="clearfix text-formatted field field--name-field-rbl-mobank-app field--type-text-long field--label-hidden field__item a3">
                                <div className="div-width" >
                                  <h3
                                    className="h3"
                                   
                                  >
                                    Why choose RBL Bank API?
                                  </h3>
                                  <h5
                                    className="h5"
                                   
                                  >
                                    Accuracy and reliability are core to
                                    everything we do.
                                  </h5>
                                  <div className=" p20">
                                    <div className="product-list row">
                                      <div
                                        className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 remove-padding-left"
                                        
                                      >
                                        <div
                                          className="remove-border"
                                         
                                        >
                                          <div className="fa fa-user"
                                            
                                          />
                                          <h4
                                           
                                          >
                                            Extensive product range
                                          </h4>
                                          <div
                                            className="title-block-text"
                                           
                                          >
                                            With more than 200+ APIs of diverse
                                            banking products, we enable you to
                                            create advanced solutions for
                                            customer needs.{" "}
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 remove-padding-left"
                                       
                                      >
                                        <div
                                          className="remove-border"
                                         
                                        >
                                          <div
                                           className="fa fa-user"
                                         
                                          />
                                          <h4
                                            
                                          >
                                            Higher Security
                                          </h4>
                                          <div
                                            className="title-block-text"
                                           
                                          >
                                            Give your customers a seamless
                                            experienc with latest security
                                            standards and OAuth 2.0.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="product-list row">
                                      <div
                                        className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 remove-padding-left"
                                        
                                      >
                                        <div
                                          className="remove-border"
                                         
                                        >
                                          <div
                                          className="fa fa-user"
                                         
                                          />
                                          <h4
                                           
                                          >
                                            Value-added APIs
                                          </h4>
                                          <div
                                            className="title-block-text"
                                           
                                          >
                                            Value-added APIs like eKYC, PAN
                                            verification API, currency rates
                                            API, and credit score API create
                                            aone-shop solution for APIs.
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 remove-padding-left"
                                       
                                      >
                                        <div
                                         className="remove-border"
                                         
                                        >
                                          <div
                                         className="fa fa-user"
                                        
                                          />
                                          <h4
                                          
                                          >
                                            Fully Automated
                                          </h4>
                                          <div
                                            className="title-block-text"
                                          
                                          >
                                            A fully-automated banking service
                                            platform for enterprise use.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div>
                              <div>
                                <h2
                                  className="reg-text-center"
                                 
                                >
                                  How to get started?
                                </h2>
                                <h5
                                  className="reg-sub-text-center"
                                 
                                >
                                  Incorporate RBL Bank APIs in just 3 easy
                                  steps!
                                </h5>
                                <div>&nbsp;</div>
                                <div className="category_landing">
                                  <div className="with-buttons offers-page">
                                    <div className="product-list row">
                                      <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 remove-padding-left">
                                        <div
                                          className="product-wrapper"
                                         
                                        >
                                          <div className="img-holder">
                                            <img
                                              alt="samsung pay"
                                              src="img/Frame1.png"
                                            />
                                          </div>
                                          <h4 
                                            
                                             
                                          >
                                            Register
                                          </h4>
                                          <div
                                            className="title-block-text"
                                           
                                          >
                                            Register with simple steps to start
                                            your API journey with us. Complete
                                            online application form with
                                            necessary details and submit.{" "}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 remove-padding-left">
                                        <div
                                          className="product-wrapper"
                                          
                                        >
                                          <div className="img-holder">
                                            <img
                                              alt="samsung pay"
                                              src="img/Frame2.png"
                                            />
                                          </div>
                                          <h4
                                           
                                          >
                                            Subscribe &amp; Test
                                          </h4>
                                          <div
                                            className="title-block-text"
                                          
                                          >
                                            After your sign up request is
                                            approved, you will receive an
                                            activation link on your registered
                                            email address. You need to select
                                            APIs you want to try an understand
                                            more about it{" "}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 remove-padding-left">
                                        <div
                                          className="product-wrapper"
                                         
                                        >
                                          <div className="img-holder">
                                            <img
                                              alt="samsung pay"
                                              src="img/Frame3.png"
                                            />
                                          </div>
                                          <h4
                                           
                                          >
                                           Subscribe & Go Live
                                          </h4>
                                          <div
                                            className="title-block-text"
                                            
                                          >
                                            Create your application (APPS) with
                                            Client ID &amp; Client Secret. Post
                                            your NDA with us, you can Go-live
                                            with production environment.{" "}
                                          </div>
                                        </div>
                                      </div>
                                      <p
                                        className="partner-text-center"
                                       
                                      >
                                        <a
                                          className="btn common-btn-blue a-attention-link-add-script"
                                          href="https://developer.rblbank.com/products"
                                          id="hp-cc-banner-slot"
                                          target="_blank"
                                        
                                        >
                                          Become Partner
                                        </a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <section
                        className="common-section  saving-acc-adv-section blue_back"
                        id="data-section2"
                      
                      >
                        <br />
                        <br />
                        <h2
                          className="main-text-center"
                          
                        >
                          API Products
                        </h2>
                        <h5
                          className="API-text-center"
                         
                        >
                          Features that set us apart
                        </h5>
                        <br />
                        <div className="tab-wrap-outer-height ">
                          <div
                            className="productmain-tabs"
                           
                          >
                            <div className="container">
                              <div className="row align-items-center">
                                <div className="col-12">
                                  <div className="common-tab-wrap">
                                    <nav>
                                      <div
                                        className="nav nav-tabs hide-after text-center fixed-nav-adj producttabs"
                                        id="nav-tab"
                                        role="tablist"
                                       
                                      >
                                        <a
                                          className="nav-item nav-link a-attention-link-add-script active producttabs-div"
                                         
                                          id="nav-Whyus-tab"
                                          data-bs-toggle="tab"
                                          href="#nav-Whyus"
                                          role="tab"
                                          aria-controls="nav-Whyus"
                                          aria-selected="true"
                                        >
                                          All Products
                                        </a>
                                        <a
                                          className="nav-item nav-link a-attention-link-add-script producttabs-div"
                                         
                                          id="nav-quicklink-tab"
                                          data-bs-toggle="tab"
                                          href="#nav-quicklink"
                                          role="tab"
                                          aria-controls="nav-quicklink"
                                          aria-selected="false"
                                          tabIndex={-1}
                                        >
                                          Deposits
                                        </a>
                                        <a
                                          className="nav-item nav-link a-attention-link-add-script producttabs-div"
                                        
                                          id="nav-quicklink-tab1"
                                          data-bs-toggle="tab"
                                          href="#nav-quicklink1"
                                          role="tab"
                                          aria-controls="nav-quicklink1"
                                          aria-selected="false"
                                          tabIndex={2}
                                        >
                                          Payments
                                        </a>
                                        <a
                                          className="nav-item nav-link a-attention-link-add-script producttabs-div"
                                          
                                          id="nav-quicklink-tab2"
                                          data-bs-toggle="tab"
                                          href="#nav-quicklink2"
                                          role="tab"
                                          aria-controls="nav-quicklink2"
                                          aria-selected="false"
                                          tabIndex={3}
                                        >
                                          Accounts
                                        </a>
                                        <a
                                          className="nav-item nav-link a-attention-link-add-script producttabs-div"
                                           
                                          id="nav-quicklink-tab3"
                                          data-bs-toggle="tab"
                                          href="#nav-quicklink3"
                                          role="tab"
                                          aria-controls="nav-quicklink3"
                                          aria-selected="false"
                                          tabIndex={4}
                                        >
                                          Shared Services
                                        </a>
                                      </div>
                                    </nav>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container" >
                          <div className="row align-items-center">
                            <div className="col-12">
                              <div className="common-tab-wrap">
                                <div
                                  className="tab-content"
                                  id="nav-tabContent"
                                >
                                  <div
                                    className="tab-pane fade active show"
                                    id="nav-Whyus"
                                    role="tabpanel"
                                    aria-labelledby="nav-Careers-tab"
                                  >
                                    <div className="tab-pane-inner">
                                      <div className="row">
                                        <div className="col-lg-4 padding9">
                                          <div className="field__item a2 col-lg-12">
                                            <div className="card mb-2">
                                              <div className="">
                                                <div
                                                  className=" card-main-div  "
                                                 
                                                >
                                                  <div
                                                    className="cards-body"
                                                   
                                                  >
                                                    <div className="cards-body_align"
                                                    
                                                    >
                                                      <h6 className="cards-body-h6"
                                                       
                                                      >
                                                        Upi-collection-of-api-product
                                                      </h6>
                                                      <p
                                                        className="cards-font"
                                                       
                                                      >
                                                        UPI Collections API
                                                      </p>
                                                      <br />
                                                      <a
                                                        className="btn common-btn-blue a-attention-link-add-script"
                                                        href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-
	up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_
	campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                        id="hp-cc-banner-slot"
                                                        target="_blank"
                                                      >
                                                        Explore
                                                      </a>
                                                      <br />
                                                      <br />
                                                      <br />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 padding9">
                                          <div className="field__item a2 col-lg-12">
                                            <div className="card mb-2">
                                              <div className="">
                                                <div
                                                  className="card-main-div  "
                                                 
                                                >
                                                  <div
                                                    className="cards-body"
                                                  
                                                  >
                                                    <div className="cards-body_align"
                                                   
                                                    >
                                                      <h6 className="cards-body-h6"
                                                       
                                                      >
                                                       Jocata-api-product
                                                      </h6>
                                                      <p
                                                        className="cards-font"
                                                       
                                                      >
                                                        AML Check API
                                                      </p>
                                                      <br />
                                                      <a
                                                        className="btn common-btn-blue a-attention-link-add-script"
                                                        href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                        id="hp-cc-banner-slot"
                                                        target="_blank"
                                                      >
                                                        Explore
                                                      </a>
                                                      <br />
                                                      <br />
                                                      <br />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 padding9">
                                          <div className="field__item a2 col-lg-12">
                                            <div className="card mb-2">
                                              <div className="">
                                                <div
                                                  className="  card-main-div "
                                                  
                                                >
                                                  <div
                                                    className="cards-body"
                                                   
                                                  >
                                                    <div className="cards-body_align"
                                                     
                                                    >
                                                      <h6 className="cards-body-h6"
                                                       
                                                      >
                                                        Ekyc-requery-api-product
                                                      </h6>
                                                      <p
                                                        className="cards-font"
                                                       
                                                      >
                                                        eKYC Requery API
                                                      </p>
                                                      <br />
                                                      <a
                                                        className="btn common-btn-blue a-attention-link-add-script"
                                                        href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                        id="hp-cc-banner-slot"
                                                        target="_blank"
                                                      >
                                                        Explore
                                                      </a>
                                                      <br />
                                                      <br />
                                                      <br />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-lg-4 padding9"
                                         
                                        >
                                          <div className="field__item a2 col-lg-12">
                                            <div className="card mb-2">
                                              <div className="">
                                                <div
                                                  className="  card-main-div "
                                                 
                                                >
                                                  <div
                                                    className="cards-body"
                                                   
                                                  >
                                                    <div className="cards-body_align"
                                                  
                                                    >
                                                      <h6 className="cards-body-h6"
                                                       
                                                      >
                                                        upi-payment-api-product
                                                      </h6>
                                                      <p
                                                        className="cards-font"
                                                       
                                                      >
                                                       Payment through VPA
                                                      </p>
                                                      <br />
                                                      <a
                                                        className="btn common-btn-blue a-attention-link-add-script"
                                                        href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                        id="hp-cc-banner-slot"
                                                        target="_blank"
                                                      >
                                                        Explore
                                                      </a>
                                                      <br />
                                                      <br />
                                                      <br />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-lg-4 padding9"
                                         
                                        >
                                          <div className="field__item a2 col-lg-12">
                                            <div className="card mb-2">
                                              <div className="">
                                                <div
                                                  className="  card-main-div "
                                                 
                                                >
                                                  <div
                                                    className="cards-body"
                                                  
                                                  >
                                                    <div className="cards-body_align"
                                                     
                                                    >
                                                      <h6 className="cards-body-h6"
                                                       
                                                      >
                                                        Account-statement-api-product
                                                      </h6>
                                                      <p
                                                        className="cards-font"
                                                        
                                                      >
                                                        Account Statement API
                                                      </p>
                                                      <br />
                                                      <a
                                                        className="btn common-btn-blue a-attention-link-add-script"
                                                        href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                        id="hp-cc-banner-slot"
                                                        target="_blank"
                                                      >
                                                        Explore
                                                      </a>
                                                      <br />
                                                      <br />
                                                      <br />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-lg-4 padding9"
                                         
                                        >
                                          <div className="field__item a2 col-lg-12">
                                            <div className="card mb-2">
                                              <div className="">
                                                <div
                                                  className=" card-main-div  "
                                                
                                                >
                                                  <div
                                                    className="cards-body"
                                                   
                                                  >
                                                    <div className="cards-body_align"
                                                     
                                                    >
                                                      <h6 className="cards-body-h6"
                                                        
                                                      >
                                                       Agent-consent-status-api-product
                                                      </h6>
                                                      <p
                                                        className="cards-font"
                                                       
                                                      >
                                                      Agent Consent API
                                                      </p>
                                                      <br />
                                                      <a
                                                        className="btn common-btn-blue a-attention-link-add-script"
                                                        href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-
	up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_
	campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                        id="hp-cc-banner-slot"
                                                        target="_blank"
                                                      >
                                                        Explore
                                                      </a>
                                                      <br />
                                                      <br />
                                                      <br />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                
                                  <div
                                    className="tab-pane fade"
                                    id="nav-quicklink"
                                    role="tabpanel"
                                    aria-labelledby="nav-quicklink-tab"
                                  >
                                    <div className="tab-pane-inner">
                                      <div
                                        className="field field--name-field-convenience-quick-link field--type-entity-reference field--label-hidden field__items 
	  quick-link-slider slick-initialized slick-slider"
                                      >
                                        <div className="slick-list draggable">
                                          <div
                                            className="slick-track"
                                            
                                          >
                                            <div
                                              className="field__item a2  slick-current slick-active"
                                              data-slick-index={1}
                                              aria-hidden="false"
                                              tabIndex={1}
                                            >
                                              <div className="tab-pane-inner">
                                                <div className="row">
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                    <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan42
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />             <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                    <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan22
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />
                                                                <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className="tab-pane fade"
                                    id="nav-quicklink1"
                                    role="tabpanel"
                                    aria-labelledby="nav-quicklink-tab"
                                  >
                                    <div className="tab-pane-inner">
                                      <div
                                        className="field field--name-field-convenience-quick-link field--type-entity-reference field--label-hidden field__items 
	  quick-link-slider slick-initialized slick-slider"
                                      >
                                        <div className="slick-list draggable">
                                          <div
                                            className="slick-track"
                                         
                                          >
                                            <div
                                              className="field__item a2  slick-current slick-active"
                                              data-slick-index={1}
                                              aria-hidden="false"
                                              tabIndex={1}
                                            >
                                              <div className="tab-pane-inner">
                                                <div className="row">
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                    <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan22
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />             <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                    <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan33
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />
                                                                <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="nav-quicklink2"
                                    role="tabpanel"
                                    aria-labelledby="nav-quicklink-tab"
                                  >
                                    <div className="tab-pane-inner">
                                      <div
                                        className="field field--name-field-convenience-quick-link field--type-entity-reference field--label-hidden field__items 
	  quick-link-slider slick-initialized slick-slider"
                                      >
                                        <div className="slick-list draggable">
                                          <div
                                            className="slick-track"
                                           
                                          >
                                            <div
                                              className="field__item a2  slick-current slick-active"
                                              data-slick-index={2}
                                              aria-hidden="false"
                                              tabIndex={2}
                                            >
                                              <div className="tab-pane-inner">
                                                <div className="row">
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                    <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan22
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />             <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                    <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan22
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />
                                                                <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="nav-quicklink3"
                                    role="tabpanel"
                                    aria-labelledby="nav-quicklink-tab"
                                  >
                                    <div className="tab-pane-inner">
                                      <div
                                        className="field field--name-field-convenience-quick-link field--type-entity-reference field--label-hidden field__items 
	  quick-link-slider slick-initialized slick-slider"
                                      >
                                        <div className="slick-list draggable">
                                          <div
                                            className="slick-track"
                                           
                                          >
                                            <div
                                              className="field__item a2  slick-current slick-active"
                                              data-slick-index={3}
                                              aria-hidden="false"
                                              tabIndex={3}
                                            >
                                              <div className="tab-pane-inner">
                                                <div className="row">
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                      <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className=" card-main-div  "
                                                           
                                                          >
                                                            <div
                                                              className="cards-body"
                                                             
                                                            >
                                                              <div className="cards-body_align"
                                                               
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                 
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan22
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                 
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />
                                                                <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-4">
                                                    <div className="field__item a2 col-lg-12">
                                                      <div className="card mb-2">
                                                        <div className="">
                                                          <div
                                                            className="card-main-div"
                                                            
                                                          >
                                                            <div
                                                              className="cards-body"
                                                              
                                                            >
                                                              <div className="cards-body_align"
                                                              
                                                              >
                                                                <h6 className="cards-body-h6"
                                                                  
                                                                >
                                                                  Aadhaar
                                                                  Authentication
                                                                  API Plan
                                                                </h6>
                                                                <p
                                                                  className="cards-font"
                                                                  
                                                                >
                                                                  Viewing
                                                                  documentation
                                                                  for a
                                                                  collection can
                                                                  view
                                                                </p>
                                                                <br />
                                                                <a
                                                                  className="btn common-btn-blue a-attention-link-add-script"
                                                                  href="https://www.rblbank.com/apply-credit-card/appform?cardId=16&cs=website-pop-up-world-safari&cg=creditcard&sg=101&sc=WEB01&fc=FF&ofc=NIL&itm_campaign=CreditCard&itm_medium=website&itm_source=website-pop-up-world-safari"
                                                                  id="hp-cc-banner-slot"
                                                                  target="_blank"
                                                                >
                                                                  Explore
                                                                </a>
                                                                <br />
                                                                <br />
                                                                <br />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <br />
                              <div className="view_all_div"
                               
                              >
                                <a
                                 
                                  className="btn common-btn-blue a-attention-link-add-script view_all"
                                  href="https://developer.rblbank.com/products"
                                  id="hp-cc-banner-slot"
                                  target="_blank"
                                >
                                  View All
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div className="block block-block-content block-block-content1d752ca4-2ff5-4def-8d8a-ed70563765f0">
                        <div className="content">
                          <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item a3">
                            <section
                              className="common-section related-blog-section bg-gray-c"
                              id="data-related-blog"
                            >
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div>
                                      <h2 className="common-section-heading">
                                        Blogs
                                      </h2>
                                      <div className="related-blog-slick mb30">
                                        {/* 1 */}
                                        <div className="item">
                                          <div className="csr-cate-card-wrap mb0">
                                            <div
                                              className="csr-cate-card-wrap-bg blogimg1"
                                             
                                            >
                                              &nbsp;
                                            </div>
                                            <div className="csr-cate-card-wrap-inner">
                                              <p className="p12 date">
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/manage-money-on-the-go-bank-smart-for-your-next-trip/"
                                                  id="hp-blog-know-spot1"
                                                  target="_blank"
                                                >
                                                  Feb 1, 2022
                                                </a>
                                              </p>
                                              <h6>
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/manage-money-on-the-go-bank-smart-for-your-next-trip/"
                                                  id="hp-blog-manage-money-on-the-go"
                                                  target="_blank"
                                                >
                                                  Features and Benefits of API
                                                  banking
                                                </a>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                        {/* 2 */}
                                        <div className="item">
                                          <div className="csr-cate-card-wrap mb0">
                                            <div
                                              className="csr-cate-card-wrap-bg blogimg2"
                                              
                                            >
                                              &nbsp;
                                            </div>
                                            <div className="csr-cate-card-wrap-inner">
                                              <p className="p12 date">
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/open-zero-balance-savings-account-and-experience-seamless-digital-banking/"
                                                  id="hp-blog-know-spot2"
                                                  target="_blank"
                                                >
                                                  Feb 1, 2022
                                                </a>
                                              </p>
                                              <h6>
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/open-zero-balance-savings-account-and-experience-seamless-digital-banking/"
                                                  id="hp-blog-open-zero-balance-savings-account"
                                                  target="_blank"
                                                >
                                                  How to apply for API banking
                                                  services
                                                </a>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                        {/* 3 */}
                                        <div className="item">
                                          <div className="csr-cate-card-wrap mb0">
                                            <div
                                              className="csr-cate-card-wrap-bg blogimg3"
                                              
                                            >
                                              &nbsp;
                                            </div>
                                            <div className="csr-cate-card-wrap-inner">
                                              <p className="p12 date">
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/what-is-voice-cloning-fraud-how-to-safeguard-yourself-from-voice-cloning-fraud/"
                                                  id="hp-blog-know-spot3"
                                                  target="_blank"
                                                >
                                                  Feb 1, 2022
                                                </a>
                                              </p>
                                              <h6>
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/what-is-voice-cloning-fraud-how-to-safeguard-yourself-from-voice-cloning-fraud/"
                                                  id="hp-blog-what-is-voice-cloning-fraud"
                                                  target="_blank"
                                                >
                                                  What is API Banking Services
                                                  and how it works
                                                </a>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                        {/* 4 */}
                                        <div className="item">
                                          <div className="csr-cate-card-wrap mb0">
                                            <div
                                              className="csr-cate-card-wrap-bg blogimg4"
                                             
                                            >
                                              &nbsp;
                                            </div>
                                            <div className="csr-cate-card-wrap-inner">
                                              <p className="p12 date">
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/how-to-make-the-best-use-of-credit-cards-this-festive-season/"
                                                  id="hp-blog-know-spot4"
                                                  target="_blank"
                                                >
                                                  Nov 02, 2023
                                                </a>
                                              </p>
                                              <h6>
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/how-to-make-the-best-use-of-credit-cards-this-festive-season/"
                                                  id="hp-blog-best-use-of-credit-cards-festive"
                                                  target="_blank"
                                                >
                                                  Five types of cash
                                                  transactions that may land you
                                                  in trouble.
                                                </a>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                        {/* 5 */}
                                        <div className="item">
                                          <div className="csr-cate-card-wrap mb0">
                                            <div
                                              className="csr-cate-card-wrap-bg blogimg5"
                                            
                                            >
                                              &nbsp;
                                            </div>
                                            <div className="csr-cate-card-wrap-inner">
                                              <p className="p12 date">
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/safeguarding-your-identity-a-roadmap-to-theft-prevention/"
                                                  id="hp-blog-safeguarding-your-identity"
                                                  target="_blank"
                                                >
                                                  Feb 1, 2022
                                                </a>
                                              </p>
                                              <h6>
                                                <a
                                                  className="text-white"
                                                  href="https://blog.rblbank.com/safeguarding-your-identity-a-roadmap-to-theft-prevention/"
                                                  id="hp-blog-know-spot5"
                                                  target="_blank"
                                                >
                                                  Safeguarding Your Identity: A
                                                  Roadmap to Theft Prevention
                                                </a>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                     
                                      <div className="text-center">
                                        <a
                                          className="btn common-btn-outline"
                                          href="https://blog.rblbank.com/"
                                          id="hp-blog-read-more"
                                          target="_blank"
                                        >
                                          Read More
                                        </a>
                                       
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            
                            </section>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   
  </div>
  <Footer />
  
  
</>
)
}
