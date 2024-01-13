import React from "react";

import Header from "./header";


export default function Faq(props) {


  return (

<>
<Header />
  
  <div
    className="modal fade right menumodal"
    id="mobile-noti-modal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="mobile-noti-modal"
    aria-hidden="true"
    data-bs-backdrop="false"
  >
    <span className="mobile-overlay-modal" data-bs-dismiss="modal" />
    <div className="modal-dialog" role="document">
      <div className="modal-content ">
        <div className="modal-header">
          <h5 className="modal-title title-center justify-content-center">
            Notifications
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body common-header-wrap">
          <ul className="no-dropbox ml-0"></ul>
        </div>
      </div>
    </div>
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
  <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
    <div id="page-wrapper">
      <div id="page">
        <div className="highlighted">
          <aside
            className="container section clearfix"
            role="complementary"
          ></aside>
        </div>
        <div id="main-wrapper" className="layout-main-wrapper clearfix">
          <div id="main">
            <div className="row-offcanvas row-offcanvas-left clearfix">
              <main className="main-content col" id="content" role="main">
              <section
  className="common-section bg-gray-c saving-acc-adv-section"
  id="data-section2"
>
  <br />
  <br />
  <div className="container">
    <h2>FAQs</h2>
    <br />
    <div className="row align-items-center">
      <div className="col-12">
        <div className="common-tab-wrap">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade"
              id="nav-Whyus"
              role="tabpanel"
              aria-labelledby="nav-Careers-tab"
            >
              <div className="tab-pane-inner">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="feature-sec1">
                      <h2 className="right-border-h2">
                        {/* THEME DEBUG */}
                        {/* THEME HOOK: 'field' */}
                        {/* FILE NAME SUGGESTIONS:
   * field--node--wholesale-nth-level--field-why-us-title--full.html.twig
   * field--node--field-why-us-title--full.html.twig
   * field--field-why-us-title--full.html.twig
   * field--node--field-why-us-title--wholesale-nth-level.html.twig
   * field--node--field-why-us-title.html.twig
   * field--node--wholesale-nth-level.html.twig
   * field--field-why-us-title.html.twig
   * field--string.html.twig
   x field.html.twig
*/}
                        {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                        <div className="field field--name-field-why-us-title field--type-string field--label-hidden field__item a3">
                          API Banking
                        </div>
                        {/* END OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                      </h2>
                      <div className="p16 text-level2 mb30">
                        {/* THEME DEBUG */}
                        {/* THEME HOOK: 'field' */}
                        {/* FILE NAME SUGGESTIONS:
   * field--node--wholesale-nth-level--field-why-us-description--full.html.twig
   * field--node--field-why-us-description--full.html.twig
   * field--field-why-us-description--full.html.twig
   * field--node--field-why-us-description--wholesale-nth-level.html.twig
   * field--node--field-why-us-description.html.twig
   * field--node--wholesale-nth-level.html.twig
   * field--field-why-us-description.html.twig
   x field--text-long.html.twig
   * field.html.twig
*/}
                        {/* BEGIN OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                        <div className="clearfix text-formatted field field--name-field-why-us-description field--type-text-long field--label-hidden field__item a3">
                          <p className="p18 text-level2">
                            API is the acronym for Application Programming
                            Interface, which is a software intermediary that
                            allows two applications to interact with each other.
                            For example, each time you use an app like Facebook,
                            send an instant message, or check the weather on
                            your phone, you are using an API.
                            <br />
                            <br />
                            It serves as an interface between different software
                            programs and facilitates their interaction, similar
                            to the way the user interface facilitates
                            interaction between humans and computers.
                            <br />
                            <br />
                            APIs provide a standard way of accessing any
                            application data, or device, whether it is accessing
                            cloud applications like Salesforce, or shopping from
                            your mobile phone.
                          </p>
                          <p>&nbsp;</p>
                          <p>
                            <strong>How Does it Work?</strong>
                          </p>
                          <p>
                            The API is the interface, that, like your helpful
                            waiter - runs and delivers the data from the
                            application you are using to systems over the
                            internet. It also then takes the response to your
                            request and delivers right back to the application
                            you are using.
                          </p>
                        </div>
                        {/* END OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-WhatYouGet"
              role="tabpanel"
              aria-labelledby="nav-FeesCharges-tab"
            >
              <div className="tab-pane-inner">
                <div className="">
                  {/* THEME DEBUG */}
                  {/* THEME HOOK: 'field' */}
                  {/* FILE NAME SUGGESTIONS:
   * field--node--wholesale-nth-level--field-what-you-get-description--full.html.twig
   * field--node--field-what-you-get-description--full.html.twig
   * field--field-what-you-get-description--full.html.twig
   * field--node--field-what-you-get-description--wholesale-nth-level.html.twig
   * field--node--field-what-you-get-description.html.twig
   * field--node--wholesale-nth-level.html.twig
   * field--field-what-you-get-description.html.twig
   x field--text-long.html.twig
   * field.html.twig
*/}
                  {/* BEGIN OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                  <div className="clearfix text-formatted field field--name-field-what-you-get-description field--type-text-long field--label-hidden field__item a3">
                    <p className="p18 text-level2">
                      <strong>Pay per use:&nbsp;</strong>A service based
                      subscription that allows you to pay for what you use.
                      <br />
                      <strong>Flexibility:</strong>&nbsp;A flexible
                      infrastructure with end-to-end capabilities.
                      <br />
                      <strong>Automated:</strong>&nbsp;A fully-automated banking
                      services platform for your enterprise use.&nbsp;
                    </p>
                    <p className="p18 text-level2">
                      <strong>Adaptable:</strong>&nbsp;Adaptable to the existing
                      application and customizable to business needs.
                      <br />
                      <br />
                      One time integration: it allows you;
                    </p>
                    <ul className="disk-ul-common">
                      <li>Control service level management</li>
                      <li>Governance/monitoring.</li>
                      <li>Reporting</li>
                      <li>
                        Capacity planning
                        <br />
                        &nbsp;
                      </li>
                    </ul>
                    <p className="p18 text-level2">
                      <strong>Value added APIs:</strong>&nbsp;Value added APIs
                      like eKYC, PAN verification API, Currency rates API,
                      Credit score API etc., create one shop solution for API.
                      It eliminates need to liaise with multiple API partners.
                    </p>
                  </div>
                  {/* END OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade active show"
              id="nav-FAQs"
              role="tabpanel"
              aria-labelledby="nav-FAQs-tab"
            >
              <div className="tab-pane-inner faq-rbl-inner">
                {/* THEME DEBUG */}
                {/* THEME HOOK: 'field' */}
                {/* FILE NAME SUGGESTIONS:
   * field--node--wholesale-nth-level--field-wholesale-faq--full.html.twig
   * field--node--field-wholesale-faq--full.html.twig
   * field--field-wholesale-faq--full.html.twig
   * field--node--field-wholesale-faq--wholesale-nth-level.html.twig
   * field--node--field-wholesale-faq.html.twig
   * field--node--wholesale-nth-level.html.twig
   * field--field-wholesale-faq.html.twig
   * field--entity-reference-type--paragraph.html.twig
   * field--entity-reference-revisions.html.twig
   x field.html.twig
*/}
                {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                <div className="field field--name-field-wholesale-faq field--type-entity-reference-revisions field--label-hidden field__items a1">
                  <div className="field__item a2">
                    {/* THEME DEBUG */}
                    {/* THEME HOOK: 'paragraph' */}
                    {/* FILE NAME SUGGESTIONS:
   * paragraph--saving-account-faq--default.html.twig
   x paragraph--saving-account-faq.html.twig
   * paragraph--default.html.twig
   * paragraph.html.twig
*/}
                    {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/paragraphs/paragraph--saving-account-faq.html.twig' */}
                    <div className="card mb-2">
                      <div
                        className="card-header cursor-pointer collapsed"
                        id="heading600"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse600"
                        aria-expanded="false"
                        aria-controls="collapse600"
                      >
                        <button
                          className="faq-rbl-link-faq collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse600"
                          aria-expanded="false"
                          aria-controls="collapse600"
                          tabIndex={0}
                        >
                          <em />{" "}
                          <span>
                            {/* THEME DEBUG */}
                            {/* THEME HOOK: 'field' */}
                            {/* FILE NAME SUGGESTIONS:
   * field--paragraph--saving-account-faq--field-faq-question--default.html.twig
   * field--paragraph--field-faq-question--default.html.twig
   * field--field-faq-question--default.html.twig
   * field--paragraph--field-faq-question--saving-account-faq.html.twig
   * field--paragraph--field-faq-question.html.twig
   * field--paragraph--saving-account-faq.html.twig
   * field--field-faq-question.html.twig
   * field--string.html.twig
   x field.html.twig
*/}
                            {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                            <div className="field field--name-field-faq-question field--type-string field--label-hidden field__item a3">
                              How to begin with RBL API Developer Portal?
                            </div>
                            {/* END OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapse600"
                        className="collapse"
                        aria-labelledby="heading600"
                        data-bs-parent="#accordion"
                        style={{}}
                      >
                        <div className="card-body">
                          {/* THEME DEBUG */}
                          {/* THEME HOOK: 'field' */}
                          {/* FILE NAME SUGGESTIONS:
   * field--paragraph--saving-account-faq--field-faq-answer--default.html.twig
   * field--paragraph--field-faq-answer--default.html.twig
   * field--field-faq-answer--default.html.twig
   * field--paragraph--field-faq-answer--saving-account-faq.html.twig
   * field--paragraph--field-faq-answer.html.twig
   * field--paragraph--saving-account-faq.html.twig
   * field--field-faq-answer.html.twig
   x field--text-long.html.twig
   * field.html.twig
*/}
                          {/* BEGIN OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                          <div className="clearfix text-formatted field field--name-field-faq-answer field--type-text-long field--label-hidden field__item a3">
                            <p className="mb0">
                              In order to use RBL API, one has to register name,
                              purpose and relevant technical details of their
                              application that will connect them to the RBL Bank
                              API Portal.
                            </p>
                          </div>
                          {/* END OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                        </div>
                      </div>
                    </div>
                    {/* END OUTPUT from 'themes/custom/rbl_bank/templates/paragraphs/paragraph--saving-account-faq.html.twig' */}
                  </div>
                  <div className="field__item a2">
                    {/* THEME DEBUG */}
                    {/* THEME HOOK: 'paragraph' */}
                    {/* FILE NAME SUGGESTIONS:
   * paragraph--saving-account-faq--default.html.twig
   x paragraph--saving-account-faq.html.twig
   * paragraph--default.html.twig
   * paragraph.html.twig
*/}
                    {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/paragraphs/paragraph--saving-account-faq.html.twig' */}
                    <div className="card mb-2">
                      <div
                        className="card-header cursor-pointer"
                        id="heading601"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse601"
                        aria-expanded="false"
                        aria-controls="collapse601"
                      >
                        <button
                          className="faq-rbl-link-faq"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse601"
                          aria-expanded="false"
                          aria-controls="collapse601"
                          tabIndex={0}
                        >
                          <em />{" "}
                          <span>
                            {/* THEME DEBUG */}
                            {/* THEME HOOK: 'field' */}
                            {/* FILE NAME SUGGESTIONS:
   * field--paragraph--saving-account-faq--field-faq-question--default.html.twig
   * field--paragraph--field-faq-question--default.html.twig
   * field--field-faq-question--default.html.twig
   * field--paragraph--field-faq-question--saving-account-faq.html.twig
   * field--paragraph--field-faq-question.html.twig
   * field--paragraph--saving-account-faq.html.twig
   * field--field-faq-question.html.twig
   * field--string.html.twig
   x field.html.twig
*/}
                            {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                            <div className="field field--name-field-faq-question field--type-string field--label-hidden field__item a3">
                              Which URL/Portal is used to create an account or
                              to get registered in RBL API banking?
                            </div>
                            {/* END OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapse601"
                        className="collapse"
                        aria-labelledby="heading601"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* THEME DEBUG */}
                          {/* THEME HOOK: 'field' */}
                          {/* FILE NAME SUGGESTIONS:
   * field--paragraph--saving-account-faq--field-faq-answer--default.html.twig
   * field--paragraph--field-faq-answer--default.html.twig
   * field--field-faq-answer--default.html.twig
   * field--paragraph--field-faq-answer--saving-account-faq.html.twig
   * field--paragraph--field-faq-answer.html.twig
   * field--paragraph--saving-account-faq.html.twig
   * field--field-faq-answer.html.twig
   x field--text-long.html.twig
   * field.html.twig
*/}
                          {/* BEGIN OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                          <div className="clearfix text-formatted field field--name-field-faq-answer field--type-text-long field--label-hidden field__item a3">
                            <p className="mb0">
                              Visit RBL API Developer Portal -&nbsp;
                              <a
                                href="https://developer.rblbank.com/"
                                className="a-attention-link-add-script"
                                target="_blank"
                                tabIndex={0}
                              >
                                https://developer.rblbank.com
                              </a>
                            </p>
                          </div>
                          {/* END OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                        </div>
                      </div>
                    </div>
                    {/* END OUTPUT from 'themes/custom/rbl_bank/templates/paragraphs/paragraph--saving-account-faq.html.twig' */}
                  </div>
                  <div className="field__item a2">
                    {/* THEME DEBUG */}
                    {/* THEME HOOK: 'paragraph' */}
                    {/* FILE NAME SUGGESTIONS:
   * paragraph--saving-account-faq--default.html.twig
   x paragraph--saving-account-faq.html.twig
   * paragraph--default.html.twig
   * paragraph.html.twig
*/}
                    {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/paragraphs/paragraph--saving-account-faq.html.twig' */}
                    <div className="card mb-2">
                      <div
                        className="card-header cursor-pointer"
                        id="heading602"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse602"
                        aria-expanded="false"
                        aria-controls="collapse602"
                      >
                        <button
                          className="faq-rbl-link-faq"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse602"
                          aria-expanded="false"
                          aria-controls="collapse602"
                          tabIndex={0}
                        >
                          <em />{" "}
                          <span>
                            {/* THEME DEBUG */}
                            {/* THEME HOOK: 'field' */}
                            {/* FILE NAME SUGGESTIONS:
   * field--paragraph--saving-account-faq--field-faq-question--default.html.twig
   * field--paragraph--field-faq-question--default.html.twig
   * field--field-faq-question--default.html.twig
   * field--paragraph--field-faq-question--saving-account-faq.html.twig
   * field--paragraph--field-faq-question.html.twig
   * field--paragraph--saving-account-faq.html.twig
   * field--field-faq-question.html.twig
   * field--string.html.twig
   x field.html.twig
*/}
                            {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                            <div className="field field--name-field-faq-question field--type-string field--label-hidden field__item a3">
                              How do I get registered on RBL API Portal? Or how
                              do I create an account?
                            </div>
                            {/* END OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapse602"
                        className="collapse"
                        aria-labelledby="heading602"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* THEME DEBUG */}
                          {/* THEME HOOK: 'field' */}
                          {/* FILE NAME SUGGESTIONS:
   * field--paragraph--saving-account-faq--field-faq-answer--default.html.twig
   * field--paragraph--field-faq-answer--default.html.twig
   * field--field-faq-answer--default.html.twig
   * field--paragraph--field-faq-answer--saving-account-faq.html.twig
   * field--paragraph--field-faq-answer.html.twig
   * field--paragraph--saving-account-faq.html.twig
   * field--field-faq-answer.html.twig
   x field--text-long.html.twig
   * field.html.twig
*/}
                          {/* BEGIN OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                          <div className="clearfix text-formatted field field--name-field-faq-answer field--type-text-long field--label-hidden field__item a3">
                            <p>
                              Follow below steps for registration or account
                              creation on RBL API Portal.
                            </p>
                            <ul className="disk-ul-common-sub">
                              <li>
                                Go to -&nbsp;
                                <a
                                  href="https://developer.rblbank.com/"
                                  className="a-attention-link-add-script"
                                  target="_blank"
                                  tabIndex={0}
                                >
                                  https://developer.rblbank.com/
                                </a>
                              </li>
                              <li>
                                Fill online register form on the portal with
                                mandatory fields and password
                              </li>
                              <li>
                                Submit the online form to create new account
                              </li>
                              <li>
                                A verification link is sent to registered email
                                id
                              </li>
                              <li>
                                Click the link and registration verified
                                successfully in order to login into RBL Portal
                              </li>
                            </ul>
                          </div>
                          {/* END OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                        </div>
                      </div>
                    </div>
                    {/* END OUTPUT from 'themes/custom/rbl_bank/templates/paragraphs/paragraph--saving-account-faq.html.twig' */}
                  </div>
                  <div className="field__item a2">
                    {/* THEME DEBUG */}
                    {/* THEME HOOK: 'paragraph' */}
                    {/* FILE NAME SUGGESTIONS:
   * paragraph--saving-account-faq--default.html.twig
   x paragraph--saving-account-faq.html.twig
   * paragraph--default.html.twig
   * paragraph.html.twig
*/}
                    {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/paragraphs/paragraph--saving-account-faq.html.twig' */}
                    <div className="card mb-2">
                      <div
                        className="card-header cursor-pointer"
                        id="heading603"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse603"
                        aria-expanded="false"
                        aria-controls="collapse603"
                      >
                        <button
                          className="faq-rbl-link-faq"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse603"
                          aria-expanded="false"
                          aria-controls="collapse603"
                          tabIndex={0}
                        >
                          <em />{" "}
                          <span>
                            {/* THEME DEBUG */}
                            {/* THEME HOOK: 'field' */}
                            {/* FILE NAME SUGGESTIONS:
   * field--paragraph--saving-account-faq--field-faq-question--default.html.twig
   * field--paragraph--field-faq-question--default.html.twig
   * field--field-faq-question--default.html.twig
   * field--paragraph--field-faq-question--saving-account-faq.html.twig
   * field--paragraph--field-faq-question.html.twig
   * field--paragraph--saving-account-faq.html.twig
   * field--field-faq-question.html.twig
   * field--string.html.twig
   x field.html.twig
*/}
                            {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                            <div className="field field--name-field-faq-question field--type-string field--label-hidden field__item a3">
                              How does one start using their account?
                            </div>
                            {/* END OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapse603"
                        className="collapse"
                        aria-labelledby="heading603"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* THEME DEBUG */}
                          {/* THEME HOOK: 'field' */}
                          {/* FILE NAME SUGGESTIONS:
   * field--paragraph--saving-account-faq--field-faq-answer--default.html.twig
   * field--paragraph--field-faq-answer--default.html.twig
   * field--field-faq-answer--default.html.twig
   * field--paragraph--field-faq-answer--saving-account-faq.html.twig
   * field--paragraph--field-faq-answer.html.twig
   * field--paragraph--saving-account-faq.html.twig
   * field--field-faq-answer.html.twig
   x field--text-long.html.twig
   * field.html.twig
*/}
                          {/* BEGIN OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                          <div className="clearfix text-formatted field field--name-field-faq-answer field--type-text-long field--label-hidden field__item a3">
                            <p className="mb0">
                              After successful creation of their account, a
                              verification link is sent through email. The link
                              enables login into the system.
                            </p>
                          </div>
                          {/* END OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                        </div>
                      </div>
                    </div>
                    {/* END OUTPUT from 'themes/custom/rbl_bank/templates/paragraphs/paragraph--saving-account-faq.html.twig' */}
                  </div>
                  <div className="field__item a2">
                    {/* THEME DEBUG */}
                    {/* THEME HOOK: 'paragraph' */}
                    {/* FILE NAME SUGGESTIONS:
   * paragraph--saving-account-faq--default.html.twig
   x paragraph--saving-account-faq.html.twig
   * paragraph--default.html.twig
   * paragraph.html.twig
*/}
                    {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/paragraphs/paragraph--saving-account-faq.html.twig' */}
                    <div className="card mb-2">
                      <div
                        className="card-header cursor-pointer"
                        id="heading604"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse604"
                        aria-expanded="false"
                        aria-controls="collapse604"
                      >
                        <button
                          className="faq-rbl-link-faq"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse604"
                          aria-expanded="false"
                          aria-controls="collapse604"
                          tabIndex={0}
                        >
                          <em />{" "}
                          <span>
                            {/* THEME DEBUG */}
                            {/* THEME HOOK: 'field' */}
                            {/* FILE NAME SUGGESTIONS:
   * field--paragraph--saving-account-faq--field-faq-question--default.html.twig
   * field--paragraph--field-faq-question--default.html.twig
   * field--field-faq-question--default.html.twig
   * field--paragraph--field-faq-question--saving-account-faq.html.twig
   * field--paragraph--field-faq-question.html.twig
   * field--paragraph--saving-account-faq.html.twig
   * field--field-faq-question.html.twig
   * field--string.html.twig
   x field.html.twig
*/}
                            {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                            <div className="field field--name-field-faq-question field--type-string field--label-hidden field__item a3">
                              What platforms do RBL APIs support?
                            </div>
                            {/* END OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapse604"
                        className="collapse"
                        aria-labelledby="heading604"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* THEME DEBUG */}
                          {/* THEME HOOK: 'field' */}
                          {/* FILE NAME SUGGESTIONS:
   * field--paragraph--saving-account-faq--field-faq-answer--default.html.twig
   * field--paragraph--field-faq-answer--default.html.twig
   * field--field-faq-answer--default.html.twig
   * field--paragraph--field-faq-answer--saving-account-faq.html.twig
   * field--paragraph--field-faq-answer.html.twig
   * field--paragraph--saving-account-faq.html.twig
   * field--field-faq-answer.html.twig
   x field--text-long.html.twig
   * field.html.twig
*/}
                          {/* BEGIN OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                          <div className="clearfix text-formatted field field--name-field-faq-answer field--type-text-long field--label-hidden field__item a3">
                            <p className="mb0">
                              RBL APIs support Windows, Mac, Web, iOS and
                              Android.
                            </p>
                          </div>
                          {/* END OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                        </div>
                      </div>
                    </div>
                    {/* END OUTPUT from 'themes/custom/rbl_bank/templates/paragraphs/paragraph--saving-account-faq.html.twig' */}
                  </div>
                  <div className="field__item a2">
                    {/* THEME DEBUG */}
                    {/* THEME HOOK: 'paragraph' */}
                    {/* FILE NAME SUGGESTIONS:
   * paragraph--saving-account-faq--default.html.twig
   x paragraph--saving-account-faq.html.twig
   * paragraph--default.html.twig
   * paragraph.html.twig
*/}
                    {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/paragraphs/paragraph--saving-account-faq.html.twig' */}
                    <div className="card mb-2">
                      <div
                        className="card-header cursor-pointer"
                        id="heading605"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse605"
                        aria-expanded="false"
                        aria-controls="collapse605"
                      >
                        <button
                          className="faq-rbl-link-faq"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse605"
                          aria-expanded="false"
                          aria-controls="collapse605"
                          tabIndex={0}
                        >
                          <em />{" "}
                          <span>
                            {/* THEME DEBUG */}
                            {/* THEME HOOK: 'field' */}
                            {/* FILE NAME SUGGESTIONS:
   * field--paragraph--saving-account-faq--field-faq-question--default.html.twig
   * field--paragraph--field-faq-question--default.html.twig
   * field--field-faq-question--default.html.twig
   * field--paragraph--field-faq-question--saving-account-faq.html.twig
   * field--paragraph--field-faq-question.html.twig
   * field--paragraph--saving-account-faq.html.twig
   * field--field-faq-question.html.twig
   * field--string.html.twig
   x field.html.twig
*/}
                            {/* BEGIN OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                            <div className="field field--name-field-faq-question field--type-string field--label-hidden field__item a3">
                              What languages does API support?
                            </div>
                            {/* END OUTPUT from 'themes/custom/rbl_bank/templates/field.html.twig' */}
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapse605"
                        className="collapse"
                        aria-labelledby="heading605"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* THEME DEBUG */}
                          {/* THEME HOOK: 'field' */}
                          {/* FILE NAME SUGGESTIONS:
   * field--paragraph--saving-account-faq--field-faq-answer--default.html.twig
   * field--paragraph--field-faq-answer--default.html.twig
   * field--field-faq-answer--default.html.twig
   * field--paragraph--field-faq-answer--saving-account-faq.html.twig
   * field--paragraph--field-faq-answer.html.twig
   * field--paragraph--saving-account-faq.html.twig
   * field--field-faq-answer.html.twig
   x field--text-long.html.twig
   * field.html.twig
*/}
                          {/* BEGIN OUTPUT from 'themes/contrib/bootstrap_barrio/templates/field/field--text-long.html.twig' */}
                          <div className="clearfix text-formatted field field--name-field-faq-answer field--type-text-long field--label-hidden field__item a3">
                            <p className="mb0">
                              API supports JavaScript, Python, PHP, Java, Curl,
                              .Net, Node, Objective C and Ruby.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field__item a2">
                    <div className="card mb-2">
                      <div
                        className="card-header cursor-pointer"
                        id="heading606"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse606"
                        aria-expanded="false"
                        aria-controls="collapse606"
                      >
                        <button
                          className="faq-rbl-link-faq"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse606"
                          aria-expanded="false"
                          aria-controls="collapse606"
                          tabIndex={0}
                        >
                          <em />{" "}
                          <span>
                            <div className="field field--name-field-faq-question field--type-string field--label-hidden field__item a3">
                              What documents need to be shared with RBL Bank for
                              accessing APIs?
                            </div>
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapse606"
                        className="collapse"
                        aria-labelledby="heading606"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          <div className="clearfix text-formatted field field--name-field-faq-answer field--type-text-long field--label-hidden field__item a3">
                            <p className="mb0">
                              The client needs to share SSL certificate which
                              has to be issued by the authorized CAs (Certified
                              Authority).
                            </p>
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
                <div className="field field--name-field-wholesale-quick-link field--type-entity-reference field--label-hidden field__items quick-link-slider slick-initialized slick-slider">
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: 0,
                        transform: "translate3d(0px, 0px, 0px)"
                      }}
                    >
                      <div
                        className="field__item a2 slick-slide"
                        data-slick-index={0}
                        aria-hidden="true"
                        tabIndex={0}
                        style={{ width: 0 }}
                      >
                        <a
                          href="/customer-knowledge-center"
                          target="_blank"
                          tabIndex={0}
                          className="a-attention-link-add-script"
                        >
                          <div className="quick-link-card scale-img-wrap">
                            <div className="quick-link-img scale-img">
                              <div className="field__item a3">
                                <img
                                  src="https://d2e6x8l1x3qfpt.cloudfront.net/2023-03/QuickLink_NRI_RBI%20Notifications_0.svg"
                                  alt="RBI Notifications"
                                  loading="lazy"
                                  typeof="foaf:Image"
                                />
                              </div>
                            </div>
                            <div className="p16">
          
                              <div className="field__item a3">
                                RBI Notifications
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        className="field__item a2 slick-slide"
                        data-slick-index={1}
                        aria-hidden="true"
                        tabIndex={0}
                        style={{ width: 0 }}
                      >
                        <a
                          href="/service-charges"
                          target="_blank"
                          tabIndex={0}
                          className="a-attention-link-add-script"
                        >
                          <div className="quick-link-card scale-img-wrap">
                            <div className="quick-link-img scale-img">
                              <div className="field__item a3">
                                <img
                                  src="https://d2e6x8l1x3qfpt.cloudfront.net/2023-03/QuickLink_NRI_Service%20Charges_0.svg"
                                  alt="Schedule of Charges"
                                  loading="lazy"
                                  typeof="foaf:Image"
                                />
                              </div>
                            </div>
                            <div className="p16">
                              <div className="field__item a3">
                                Schedule of Charges
                              </div>
                            </div>
                          </div>
                        </a>
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
</section>

              </main>
            </div>
           
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
                          <h2
                            className="visually-hidden"
                            id="block-footerfirst-menu"
                          >
                            Footer First
                          </h2>
                          <div className="">
                            <h6 className="footer-head">
                              About
                              <span className="underline" />
                              <i
                                aria-hidden="true"
                                className="fa fa-plus footerIcons"
                              >
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
                          <h2
                            className="visually-hidden"
                            id="block-footersecond-menu"
                          >
                            Footer Second
                          </h2>
                          <div className="">
                            <h6 className="footer-head">
                              Media Center
                              <span className="underline" />
                              <i
                                aria-hidden="true"
                                className="fa fa-plus footerIcons"
                              >
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
                          <h2
                            className="visually-hidden"
                            id="block-footerthird-menu"
                          >
                            Footer Third
                          </h2>
                          <div className="">
                            <h6 className="footer-head">
                              Products
                              <span className="underline" />
                              <i
                                aria-hidden="true"
                                className="fa fa-plus footerIcons"
                              >
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
                          <h2
                            className="visually-hidden"
                            id="block-footerfourth-menu"
                          >
                            Footer Fourth
                          </h2>
                          <div className="">
                            <h6 className="footer-head">
                              Important Links
                              <span className="underline" />
                              <i
                                aria-hidden="true"
                                className="fa fa-plus footerIcons"
                              >
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
                                  href="https://www.rblbank.com/interest-rates"
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
                              <i
                                aria-hidden="true"
                                className="fa fa-plus footerIcons"
                              >
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
                                {/* Footer section start */}
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
                                            href="#"
                                            id="footerIcons-other-a"
                                          >
                                            <i
                                              aria-hidden="true"
                                              className="fa fa-plus footerIcons"
                                            >
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
                                              <a
                                                
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
                                          <ul
                                            className="list-unstyled footerIcons-toggle"
                                            id="footerIcons-toggle-ul"
                                          >
                                            <li>
                                              <a href="https://drws17a9qx558.cloudfront.net/document/footer-use-of-un-parliamentary-language/use-of-un-parliamentary-language.pdf">
                                                Use of Un-parlimentary Language
                                                by Customers{" "}
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
                                                NEFT Customer Facilitation
                                                Center{" "}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row row3 align-items-center">
                                      <div className="col-lg-5 col-md-6">
                                        <p className="pbottom mb15 hide-mobile">
                                          Copyright 2023 RBL Bank Ltd.
                                        </p>
                                        <p className="pbottom mb15 hide-mobile">
                                          Site best viewed in IE 9-11, Edge 25,
                                          Chrome 58, Firefox 53, Safari 10.1
                                        </p>
                                      </div>
                                      <div
                                        className="col-lg-3 col-md-6 Center"
                                        style={{
                                          paddingLeft: 70,
                                          paddingTop: 10
                                        }}
                                      >
                                        <p className="pbottom mb15 hide-mobile">
                                          <select
                                            name="cars"
                                            id="cars"
                                            style={{
                                              color: "#ffffff",
                                              background: "#444141bd",
                                              padding: 10,
                                              borderRadius: 4,
                                              border: "0px solid red",
                                              width: "-webkit-fill-available",
                                              fontSize: 14
                                            }}
                                          >
                                            <option value="volvo">
                                              Other Sites
                                            </option>
                                            <option value="saab">
                                              Other Sites1
                                            </option>
                                            <option value="mercedes">
                                              Other Sites2
                                            </option>
                                            <option value="audi">
                                              Other Sites3
                                            </option>
                                          </select>
                                          <style
                                            dangerouslySetInnerHTML={{
                                              __html: "\n\n"
                                            }}
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
                                              <i className="fa fa-linkedin">
                                                ‌
                                              </i>{" "}
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
                                              <i className="fa fa-instagram">
                                                ‌
                                              </i>{" "}
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="a-yt"
                                              href="https://www.youtube.com/c/RblBankofficial"
                                              target="_blank"
                                            >
                                              <i className="fa fa-youtube-play">
                                                ‌
                                              </i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </footer>
                              </div>
                              <div
                                aria-hidden="true"
                                aria-labelledby="attention-modal-rbi"
                                className="modal fade common-modal"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                id="attention-modal-rbi"
                                tabIndex={-1}
                              >
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                  <div className="modal-content">
                                    <div className="modal-header justify-content-center">
                                      <h5 className="modal-title">Attention</h5>
                                      <button
                                        aria-label="Close"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        type="button"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p className="p14 text-para-gray">
                                        You are leaving RBL Bank website (“RBL
                                        Bank’s website”) and being re-directed
                                        to third party website at your request.
                                        The privacy and security policy of this
                                        website may differ from RBL Bank and may
                                        provide less security than RBL Bank’s
                                        website. RBL Bank and its affiliates do
                                        not endorse, make any warranty or assume
                                        legal liability for the products,
                                        services, content accuracy or opinions
                                        expressed in the website or other links
                                        provided on the website. RBL Bank and
                                        its affiliates are not responsible for
                                        any loss, damage, cost etc. that you may
                                        incur in the event of any deficiency in
                                        the product or services offered on this
                                        website.
                                      </p>
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                      <span data-bs-dismiss="modal">
                                        <a
                                          className="btn btn-sm common-btn-blue"
                                          href="https://www.rbi.org.in/CommonPerson/english/scripts/rbikehtahai.aspx"
                                          style={{
                                            background: "#304087 !important",
                                            color: "#fff !important"
                                          }}
                                          target="_blank"
                                        >
                                          Proceed
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </footer>
              </div>
            </footer>
          </div>
        </div>
      </div>
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
                        <a href="https://developer.rblbank.com/products">
                          API Products
                        </a>
                      </div>
                    </li>
                    <li className="has-children">
                      <div className="acnav__label">
                        <a href="  how_it_works.html">How it works</a>
                      </div>
                    </li>
                    <li className="has-children">
                      <div className="acnav__label">
                        <a href="faq.html">FAQs</a>
                      </div>
                    </li>
                    <li className="has-children">
                      <div className="acnav__label">
                        {" "}
                        <a href="quick_assistance.html"> Quick Assistance</a>
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
          src="themes/custom/rbl_bank/images/top-icon.svg"
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
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <h5 className="modal-title">Attention</h5>
            <button
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="modal"
              type="button"
            />
          </div>
          <div className="modal-body">
            <p className="p14 text-para-gray">
              You are leaving RBL Bank website (“RBL Bank’s website”) and being
              re-directed to third party website at your request. The privacy
              and security policy of this website may differ from RBL Bank and
              may provide less security than RBL Bank’s website. RBL Bank and
              its affiliates do not endorse, make any warranty or assume legal
              liability for the products, services, content accuracy or opinions
              expressed in the website or other links provided on the website.
              RBL Bank and its affiliates are not responsible for any loss,
              damage, cost etc. that you may incur in the event of any
              deficiency in the product or services offered on this website.
            </p>
          </div>
          <div className="modal-footer justify-content-center">
            {" "}
            <span data-bs-dismiss="modal">
              {" "}
              <a
                className="btn btn-sm btn-view-adj"
                href="#"
                target="_blank"
                type="button"
                id="attention-link-btn"
                style={{
                  background: "#304087 !important",
                  color: "#fff !important"
                }}
              >
                Proceed
              </a>
            </span>
          </div>
        </div>
      </div>
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
    <div
      id="cookieNotice"
      className="modal-cookies-wrap"
      style={{ display: "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content cookies-modal-wrap">
          <div className="cookies-modal" id="cookiesModal">
            <img
              src="themes/custom/rbl_bank/images/icons/cookies-graphic.png"
              alt="cookie-image"
            />
            <h4 className="cookie-setting">Cookie settings</h4>
            <p className="cookie-p mb-0">
              By continuing to use this site, you are accepting the bank's
              <a href="https://rblbank.com/static-pages/cookie-policy">
                cookie policy.{" "}
              </a>
              The information collected would be used to improve your journey
              &amp; to personalize your website experience.
            </p>
            <div className="row align-items-center">
              <div className="col-12">
                <button
                  className="btn common-btn-blue w-100"
                  id="accept-term-modal"
                  onclick="acceptCookieConsent();"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

);
};