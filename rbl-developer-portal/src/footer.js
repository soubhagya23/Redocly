import React, { useState } from 'react'


export default function (footer) {

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
    <footer className="site-footer">
    <div className="footer-common-wrap">
      <footer className="footerStyle">
        <div className="container">
          <div className="site-footer__top clearfix row row1">
            <section className="row col-md-3 footer-col">
              <nav
                role="navigation"
                aria-labelledby="block-footerfirst-menu"
                id="block-footerfirst"
                className="block block-menu navigation menu--footer-first"
              >
                <h2 className="visually-hidden" id="block-footerfirst-menu">
                  Footer First
                </h2>
                <div className="">
                  <h6 className="footer-head">
                    About
                    <span className="underline" />
                    <i aria-hidden="true" className="fa fa-plus footerIcons">
                      ‌
                    </i>
                  </h6>
                  <ul className="clearfix nav list-unstyled">
                    <li>
                      <a
                        href="https://www.rblbank.com/about-us"
                        className="nav-link nav-link--about-us"
                        data-drupal-link-system-path="node/6"
                      >
                        The Bank
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/about-us/board-of-directors"
                        className="nav-link nav-link--about-us-board-of-directors"
                        data-drupal-link-system-path="node/4"
                      >
                        Board of Directors
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/about-us/management-team"
                        className="nav-link nav-link--about-us-management-team"
                        data-drupal-link-system-path="node/40"
                      >
                        Management Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/careers"
                        className="nav-link nav-link--careers"
                        data-drupal-link-system-path="node/2"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/IR - QIP 2019"
                        className="nav-link nav-link--careers"
                        data-drupal-link-system-path="node/2"
                      >
                        IR - QIP 2019
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/social-responsibility"
                        className="nav-link nav-link--social-responsibility"
                        data-drupal-link-system-path="node/10"
                      >
                        Social Responsibility
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </section>
            <section className="row col-md-3 footer-col">
              <nav
                role="navigation"
                aria-labelledby="block-footersecond-menu"
                id="block-footersecond"
                className="block block-menu navigation menu--footer-second"
              >
                <h2 className="visually-hidden" id="block-footersecond-menu">
                  Footer Second
                </h2>
                <div className="">
                  <h6 className="footer-head">
                    Media Center
                    <span className="underline" />
                    <i aria-hidden="true" className="fa fa-plus footerIcons">
                      ‌
                    </i>
                  </h6>
                  <ul className="clearfix nav list-unstyled">
                    <li>
                      <a
                        href="https://www.rblbank.com/press-releases"
                        className="nav-link nav-link--press-releases"
                        data-drupal-link-system-path="press-releases"
                      >
                        Press Releases
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/media-kit"
                        className="nav-link nav-link--media-kit"
                        data-drupal-link-system-path="media-kit"
                      >
                        Media Kit
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ir.rblbank.com/investor-kit.aspx"
                        className="nav-link nav-link-https--irrblbankcom-investor-kitaspx"
                      >
                        Investor Kit
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ir.rblbank.com/"
                        className="nav-link nav-link-https--irrblbankcom-"
                      >
                        Investor Relations
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </section>
            <section className="row col-md-3 footer-col">
              <nav
                role="navigation"
                aria-labelledby="block-footerthird-menu"
                id="block-footerthird"
                className="block block-menu navigation menu--footer-third"
              >
                <h2 className="visually-hidden" id="block-footerthird-menu">
                  Footer Third
                </h2>
                <div className="">
                  <h6 className="footer-head">
                    Products
                    <span className="underline" />
                    <i aria-hidden="true" className="fa fa-plus footerIcons">
                      ‌
                    </i>
                  </h6>
                  <ul className="clearfix list-unstyled">
                    <li>
                      <a
                        href="https://www.rblbank.com/personal-banking/accounts/savings-accounts"
                        className="nav-link nav-link--personal-banking-accounts-savings-accounts"
                        data-drupal-link-system-path="node/13"
                      >
                        Savings Account
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/business-banking/business/partnering-your-growth/current-accounts"
                        className="nav-link nav-link--business-banking-business-partnering-your-growth-current-accounts"
                        data-drupal-link-system-path="node/42"
                      >
                        Current Account
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/personal-banking/cards/credit-cards"
                        className="nav-link nav-link--personal-banking-cards-credit-cards"
                        data-drupal-link-system-path="node/182"
                      >
                        Credit Cards
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/personal-banking/term-deposits"
                        className="nav-link nav-link--personal-banking-term-deposits"
                        data-drupal-link-system-path="node/171"
                      >
                        Fixed Deposits
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/personal-banking/loans/personal-loan"
                        className="nav-link nav-link--personal-banking-loans-housing-loan"
                        data-drupal-link-system-path="node/249"
                      >
                        Personal Loan
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/nri-banking"
                        className="nav-link nav-link--nri-banking"
                        data-drupal-link-system-path="node/220"
                      >
                        NRI Services
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </section>
            <section className="row col-md-3 footer-col">
              <nav
                role="navigation"
                aria-labelledby="block-footerfourth-menu"
                id="block-footerfourth"
                className="block block-menu navigation menu--footer-fourth"
              >
                <h2 className="visually-hidden" id="block-footerfourth-menu">
                  Footer Fourth
                </h2>
                <div className="">
                  <h6 className="footer-head">
                    Important Links
                    <span className="underline" />
                    <i aria-hidden="true" className="fa fa-plus footerIcons">
                      ‌
                    </i>
                  </h6>
                  <ul className="clearfix nav list-unstyled">
                    <li>
                      <a
                        href="https://www.rblbank.com/base-disclosures"
                        className="nav-link nav-link--base-disclosures"
                        data-drupal-link-system-path="node/510"
                      >
                        Regulatory Disclosures
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/bank-policies"
                        className="nav-link nav-link--bank-policies"
                        data-drupal-link-system-path="node/512"
                      >
                        Bank Policies
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/service-charges"
                        className="nav-link nav-link--service-charges"
                        data-drupal-link-system-path="node/514"
                      >
                        Service Charges &amp; Fees
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/interest-rates"
                        className="nav-link nav-link--news"
                        data-drupal-link-system-path="node/803"
                      >
                        Interest Rates
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/download-form"
                        className="nav-link nav-link--download-form"
                        data-drupal-link-system-path="node/414"
                      >
                        Download Forms
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com"
                        className="nav-link nav-link--interest-rates"
                        data-drupal-link-system-path="node/355"
                      >
                        Site Map
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </section>
            <section className="row col-md-3 footer-col">
              <nav
                role="navigation"
                aria-labelledby="block-customerservice-menu"
                id="block-customerservice"
                className="block block-menu navigation menu--footer-fifth"
              >
                <h2
                  className="visually-hidden"
                  id="block-customerservice-menu"
                >
                  Customer Service
                </h2>
                <div className="">
                  <h6 className="footer-head">
                    Customer Service
                    <span className="underline" />
                    <i aria-hidden="true" className="fa fa-plus footerIcons">
                      ‌
                    </i>
                  </h6>
                  <ul className="clearfix nav list-unstyled">
                    <li>
                      <a
                        href="https://www.rblbank.com/contact-us"
                        className="nav-link nav-link--contact-us"
                        data-drupal-link-system-path="node/37"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/locate-branch"
                        className="nav-link nav-link-https--wwwrblbankcom-locate-branch"
                      >
                        Locate Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/do-not-call"
                        className="nav-link nav-link--do-not-call"
                        data-drupal-link-system-path="do-not-call"
                      >
                        Do Not Call Registry
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://drws17a9qx558.cloudfront.net/document/Footer%20-%20Grievance%20Redressal/GrievanceRedressalProcess.pdf"
                        className="nav-link nav-link-https--drws17a9qx558cloudfrontnet-document-footer20-20grievance20redressal-grievanceredressalprocesspdf"
                      >
                        Grievance Redressal
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/feedback"
                        className="nav-link nav-link--feedback"
                        data-drupal-link-system-path="feedback"
                      >
                        Feedback
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/suggestion-and-complaints"
                        className="nav-link nav-link--suggestion-and-complaints"
                        data-drupal-link-system-path="suggestion-and-complaints"
                      >
                        Report a Complaint/Fraud
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/unclaimed-deposits"
                        className="nav-link nav-link--unclaimed-deposits"
                        data-drupal-link-system-path="unclaimed-deposits"
                      >
                        Unclaimed Deposits
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rblbank.com/"
                        className="nav-link nav-link--certificates-issued-by-the-bank"
                        data-drupal-link-system-path="node/852"
                      >
                        Customer Testimonials
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </section>
          </div>
          <div className="site-footer__bottom">
            <section className="row">
              <div
                id="block-footer"
                className="block block-block-content block-block-content2e6a6517-4990-4fb3-adde-cbefd535ebeb"
              >
                <div className="content">
                  <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item a3">
                    <div>
                      <footer>
                        <div className="container">
                          <div className="row row2 other-list-row">
                            <div className="col-lg-1">
                              <h6 className="footer-head">
                                Others{" "}
                                <i
                                  aria-hidden="true"
                                  className="fa fa-plus footerIcons"
                                >
                                  ‌
                                </i>
                              </h6>
                            </div>
                  
    
                            
                            <div className="col-lg-11">
                              <div className="other-list-wrap xs-mb0">
                                
                                <a
                                  className="footerIcons-other hide-mobile"
                                 
                                  id="footerIcons-other-a"
                                >
                                  <i>          <button className="expand_button"  
                                  onClick={() => setExpand(!expand)} 
                                     >
                                  <i  className={`fa ${expand ? 'fa-minus' : 'fa-plus'}`} />
                              </button>
                                    ‌
                                  </i>
                                </a>
                               
                                <ul className="list-unstyled xs-mb0">
                                  <li>
                                    <a href="https://www.rblbank.com/terms-and-conditions">
                                      Terms &amp; Conditions{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.rblbank.com/bcsbi-members">
                                      BCSBI Member{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.rblbank.com/banking-ombudsman">
                                      Banking Ombudsman{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.rblbank.com/customer-knowledge-center">
                                      Customer Knowledge Center{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a className="remove_blue"
                                     
                                      href="https://www.rbi.org.in/CommonPerson/english/scripts/rbikehtahai.aspx"
                                      
                                    >
                                      RBI Kehta Hai{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://drws17a9qx558.cloudfront.net/document/PDF%20Pages/rbl-bank-gst-reg_details.pdf">
                                      Our GSTIN{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.rblbank.com/sustainability-framework">
                                      Sustainability Framework{" "}
                                    </a>
                                  </li>
                                </ul>
                                  {expand && (
                                <ul
                                  className="list-unstyled footerIcons-toggle"
                                  id="footerIcons-toggle-ul"
                                >
                                  <li>
                                    <a href="https://drws17a9qx558.cloudfront.net/document/footer-use-of-un-parliamentary-language/use-of-un-parliamentary-language.pdf">
                                      Use of Un-parlimentary Language by
                                      Customers{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://drws17a9qx558.cloudfront.net/document/whats-new/gst-customer-communication.pdf">
                                      GST Customer Communication{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://drws17a9qx558.cloudfront.net/document/pdfs/aadhaar-enrolment-updation-centers.pdf">
                                      Aadhaar Enrolment Centers{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://drws17a9qx558.cloudfront.net/document/Footer%20-%20NEFT%20Customer%20Facilitation%20Center/NEFT-NOC.pdf">
                                      NEFT Customer Facilitation Center{" "}
                                    </a>
                                  </li>
                                </ul>
                                 )}
                              </div>
                            </div>
                          </div>

                       
                          <div className="row row3 align-items-center">
                            <div className="col-lg-5 col-md-6">
                              <p className="pbottom mb15 hide-mobile">
                                Copyright 2023 RBL Bank Ltd.
                              </p>
                              <p className="pbottom mb15 hide-mobile">
                                Site best viewed in IE 9-11, Edge 25, Chrome
                                58, Firefox 53, Safari 10.1
                              </p>
                            </div>
                            <div
                              className="col-lg-3 col-md-6 Center paddingcopy"
                             
                            >
                              <p className="pbottom mb15 hide-mobile">
                                <select
                                  name="cars"
                                  id="cars"
                                  className="select-selected"
                                  style={{
                                    color: "#ffffff",
                                    background: "#444141bd",
                                    padding: 10,
                                    borderRadius: 4,
                                    border: "0px solid red",
                                    width: "-webkit-fill-available",
                                    fontSize: 14,
                                    borderRight: "10px solid #3b3939"
                                  }}
                                >
                                  <option value="volvo">Other Sites</option>
                                  <option value="saab">Other Sites1</option>
                                  <option value="mercedes">
                                    Other Sites2
                                  </option>
                                  <option value="audi">Other Sites3</option>
                                </select>
                                <style
                                  dangerouslySetInnerHTML={{ __html: "\n\n" }}
                                />
                              </p>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <ul className="follow-us-ul">
                                <li className="hide-mobile">
                                  <p className="p16">Follow us</p>
                                </li>
                                <li>
                                  <a
                                    className="a-fb"
                                    href="https://www.facebook.com/TheRBLBank"
                                    target="_blank"
                                  >
                                    <i
                                      className="fa fa-facebook"
                                      data-bgcolor="#1877F2"
                                    >
                                      ‌
                                    </i>{" "}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="a-linkedin"
                                    href="https://www.linkedin.com/company/rbl-bank"
                                    target="_blank"
                                  >
                                    <i className="fa fa-linkedin">‌</i>{" "}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="a-twitter"
                                    href="https://twitter.com/rblbank"
                                    target="_blank"
                                  >
                                    <i className="fa fa-twitter">‌</i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="a-insta"
                                    href="https://www.instagram.com/rbl_bank/"
                                    target="_blank"
                                  >
                                    <i className="fa fa-instagram">‌</i>{" "}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="a-yt"
                                    href="https://www.youtube.com/c/RblBankofficial"
                                    target="_blank"
                                  >
                                    <i className="fa fa-youtube-play">‌</i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </footer>
                    </div>
                
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </footer>
    </div>

    <div className="common-footer-wrapper">
    <div
      className="modal fade right menumodal"
      id="modal-products"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="Products-content"
      aria-hidden="true"
      data-bs-backdrop="false"
    >
      <span className="mobile-overlay-modal" data-bs-dismiss="modal" />
      <div className="modal-dialog" role="document">
        <div className="modal-content ">
          <div className="modal-header">
            <h5 className="modal-title title-center justify-content-center">
              Our Products
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body custom-mobile-menu-content">
            <section className="nav-wrap">
              <nav
                className="acnav acnavOurProd acnavOurProd-xs"
                role="navigation"
              >
                <ul className="acnav__list acnav__list--level1">
                  <li className="has-children">
                    <div className="acnav__label">
                      <a href="/products">
                        API Products
                      </a>
                    </div>
                  </li>
                  <li className="has-children">
                    <div className="acnav__label">
                      <a href="  /howitworks">How it works</a>
                    </div>
                  </li>
                  <li className="has-children">
                    <div className="acnav__label">
                      <a href="/faq">FAQs</a>
                    </div>
                  </li>
                  <li className="has-children">
                    <div className="acnav__label">
                      {" "}
                      <a href="/quickassistance"> Quick Assistance</a>
                    </div>
                  </li>
                  <li className="has-children">
                    <div className="acnav__label">
                      {" "}
                      <a href="https://developer.rblbank.com/register">
                        {" "}
                        Register
                      </a>
                    </div>
                  </li>
                  <li className="has-children">
                    <div className="acnav__label">
                      {" "}
                      <a href="https://developer.rblbank.com/login"> Login</a>
                    </div>
                  </li>
                </ul>
              </nav>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div className="go-to-top-wrap hide-mobile st">
      <img
        src="pages/themes/custom/rbl_bank/images/top-icon.svg"
        alt="go-to-top"
        className="go-to-top st"
      />
      <p className="p14 st">TOP</p>
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="attention-link-modalLabel"
    className="modal fade common-modal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    id="attention-link-modal"
    tabIndex={-1}
  >
   
  </div>
  <div
    className="modal fade g-search-modal"
    id="g-search-modal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-labelledby="g-search-modalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content">
        <div className="modal-body">
          <div className="container">
            <a href="#" data-bs-dismiss="modal" className="search-close-a">
              <img
                src="pages/themes/custom/rbl_bank/images/close-black.svg"
                alt="close-black"
                className="close-black st"
              />
            </a>
            <div className="search_section">
              <div
                className="views-exposed-form bef-exposed-form block block-views block-views-exposed-filter-blocksearch-rbl-data-page-1"
                data-drupal-selector="views-exposed-form-search-rbl-data-page-1"
                id="block-exposedformsearch-rbl-datapage-1"
              >
                <div className="content">
                  <form
                    action="/search-rbl-data"
                    method="get"
                    id="views-exposed-form-search-rbl-data-page-1"
                    acceptCharset="UTF-8"
                  >
                    <div className="row">
                      <div className="js-form-item js-form-type-search-api-autocomplete form-type-search-api-autocomplete js-form-item-search-api-fulltext form-item-search-api-fulltext mb-3">
                        <label htmlFor="edit-search-api-fulltext">
                          Fulltext search
                        </label>
                        <input
                          data-drupal-selector="edit-search-api-fulltext"
                          type="text"
                          id="edit-search-api-fulltext"
                          name="search_api_fulltext"
                          defaultValue=""
                          size={30}
                          maxLength={128}
                          className="form-control"
                        />
                      </div>
                      <div
                        data-drupal-selector="edit-actions"
                        className="form-actions js-form-wrapper form-wrapper mb-3"
                        id="edit-actions"
                      >
                        <button
                          data-drupal-selector="edit-submit-search-rbl-data"
                          type="submit"
                          id="edit-submit-search-rbl-data"
                          value="Apply"
                          className="button js-form-submit form-submit btn btn-primary"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </footer>




  )
}
