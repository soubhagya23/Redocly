import React from 'react'

export default function header() {

  return (
    <>
      <div className="common-header-wrap">
        <div className="credit-carousel d-sm-block d-md-none"></div>
        <div className="navbar-common-wrap">
          <nav className="navbar navbar-expand-md navbar-light fixed-top hide-xs d-md-block rbl-nav-header-bg">
            <div className="container rbl-nav-header">
              <div className="navbar-brand">
                <a className="navbar-brand-a" href="http://localhost:3000/">
                  <img
                    src="../img/API-Developer-Portal-RBL-Bank.png"
                    className="img-fluid"
                    alt="Logo"
                    style={{ marginTop: 22, width: 215 }}
                  />
                </a>
              </div>
              <div id="block-mainnavigation" className="collapse navbar-collapse">
                <div className="content">
                  <div
                    className="tb-megamenu tb-megamenu-main"
                    role="navigation"
                    aria-label="Main navigation"
                  >
                    <div className="nav-collapse  always-show">
                      <ul
                        className="tb-megamenu-nav nav level-0 items-4"
                        role="list"
                      >
                        <li
                          className="tb-megamenu-item level-1 mega products-menu dropdown"
                          data-id="menu_link_content:9f2259e5-c492-4611-ae4e-1845e2693020"
                          data-level={1}
                          data-type="menu_item"
                          data-class="products-menu"
                          data-xicon=""
                          data-caption=""
                          data-alignsub=""
                          data-group={0}
                          data-hidewcol={0}
                          data-hidesub={0}
                          data-label=""
                          aria-level={1}
                        >
                          <span
                            className="dropdown-toggle tb-megamenu-no-link"
                            aria-expanded="false"
                            tabIndex={0}
                          >
                            <a
                              href="/products"
                              style={{ color: "#ffffff", fontSize: '16px' }}
                            >
                              {" "}
                              API Products
                            </a>
                          </span>
                        </li>
                        <li
                          className="tb-megamenu-item level-1 mega Payments-menu dropdown"
                          data-id="menu_link_content:adf69e6a-7713-4131-a639-e3426736a68b"
                          data-level={1}
                          data-type="menu_item"
                          data-class="Payments-menu"
                          data-xicon=""
                          data-caption=""
                          data-alignsub=""
                          data-group={0}
                          data-hidewcol={0}
                          data-hidesub={0}
                          data-label=""
                          aria-level={1}
                        >
                          <span
                            className="dropdown-toggle tb-megamenu-no-link"
                            aria-expanded="false"
                            tabIndex={0}
                          >
                            <a
                              href="/howitworks"
                              style={{ color: "#ffffff", fontSize: '16px' }}
                            >
                              How it works
                            </a>
                          </span>
                        </li>
                        <li
                          className="tb-megamenu-item level-1 mega Payments-menu dropdown"
                          data-id="menu_link_content:adf69e6a-7713-4131-a639-e3426736a68b"
                          data-level={1}
                          data-type="menu_item"
                          data-class="Payments-menu"
                          data-xicon=""
                          data-caption=""
                          data-alignsub=""
                          data-group={0}
                          data-hidewcol={0}
                          data-hidesub={0}
                          data-label=""
                          aria-level={1}
                        >
                          <span
                            className="dropdown-toggle tb-megamenu-no-link"
                            aria-expanded="false"
                            tabIndex={0}
                          >
                            <a href="/faq" style={{ color: "#ffffff", fontSize: '16px' }}>
                              FAQs
                            </a>
                          </span>
                        </li>
                        <li
                          className="tb-megamenu-item level-1 mega Payments-menu dropdown"
                          data-id="menu_link_content:adf69e6a-7713-4131-a639-e3426736a68b"
                          data-level={1}
                          data-type="menu_item"
                          data-class="Payments-menu"
                          data-xicon=""
                          data-caption=""
                          data-alignsub=""
                          data-group={0}
                          data-hidewcol={0}
                          data-hidesub={0}
                          data-label=""
                          aria-level={1}
                        >
                          <span
                            className="dropdown-toggle tb-megamenu-no-link"
                            aria-expanded="false"
                            tabIndex={0}
                          >
                            <a
                              href="/quickassistance"
                              style={{ color: "#ffffff", fontSize: '16px' }}
                            >
                              Quick Assistance
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="block-headermobile"
                className="block block-block-content block-block-content6d0e4fdd-1d22-429d-86b7-b8b92e4ca66b"
              >
                <div className="content"></div>
              </div>
              <div className="form-inline my-2 my-lg-0 mr-1 dropdown noti-but mr22">
                <button
                  className="circle-btn nav-link serach-btn-header"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#g-search-modal"
                >
                  <img
                    src="./pages/themes/custom/rbl_bank/images/search.svg"
                    className="img-fluid img-blue"
                    alt="search"
                  />
                </button>
              </div>
              <div className="form-inline my-2 my-lg-0 dropdown logindd-show mr22">
                <a
                  className="btn common-btn-yellow  login-btn-adj"
                  style={{
                    background: "#FFFEFA",
                    width: "auto",
                    textTransform: "none",

                  }}
                  href="https://developer.rblbank.com/register"
                >
                  Register
                </a>
              </div>
              <div className="form-inline my-2 my-lg-0 dropdown logindd-show">
                <a
                  href="https://developer.rblbank.com/login"
                  className="btn common-btn-yellow  login-btn-adj"
                >
                  Login
                </a>
              </div>
            </div>
          </nav>


          <nav className="navbar navbar-expand-lg navbar-light fixed-top d-sm-block d-md-none mobile-menu-header-adj">
            <div className="container-xs">
              <div className="row" style={{ marginBottom: "-2px" }}>
                <div className="col-7 col-md-5 ps-0">
                  <div className="mobile-more-logo-wrap">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#modal-products"
                      href="#modal-products"
                      className="mobile-more-a"
                      id="mob-header-hamb-menu"
                    >
                      <img
                        src="pages/themes/custom/rbl_bank/images/mobile-more.svg"
                        alt="mobile-more"
                      />
                    </a>
                    <a
                      href="http://localhost:3000/"
                      className="logo-mobile-a"
                    >
                      <img
                        src="../img/API-Developer-Portal-RBL-Bank.png"
                        alt="RBL Bank"
                        className="logo-mob"
                        style={{ height: 24 }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-5 col-md-7">
                  <div className="form-inline d-flex justify-content-end">
                    <button
                      className="circle-btn nav-link serach-btn-header"
                      role="button"
                      data-bs-toggle="modal"
                      data-bs-target="#g-search-modal"
                    >
                      <img
                        src="./pages/themes/custom/rbl_bank/images/search.svg"
                        className="img-fluid img-blue"
                        alt="search"
                      />
                      {/* <img src="/themes/custom/rbl_bank/images/search.svg" class="img-fluid img-white" alt="search"> */}
                    </button>
                    <a
                      href="https://developer.rblbank.com/login"
                      target="_blank"
                      id="header-whatsapp"
                      className="circle-btn nav-link me-3 whatsapp-header-link"
                    >
                      <i
                        className="fa fa-sign-in img-fluid img-blue"
                        style={{ fontSize: 20, color: "#304087" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>


        <a href="https://www.rblbank.com/chatbot">
          <div className="chat-wrap2 hide-mobile">
            <div className="chat-wrap2-inner">
              <img
                src="pages/themes/custom/rbl_bank/images/chat.svg"
                alt="chat"
                className="chat-icon"
              />
              <span>Chat</span>
            </div>
          </div>
        </a>
      </div>
    </>




  )
}

