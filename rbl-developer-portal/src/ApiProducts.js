import React, { useEffect, useState } from "react";
import data from "./APICatalogue.json";
import ReactSearchBox from "react-search-box";

import "./index.css"

const ApiProducts = ({ index, prodIndex }) => {
  const [searchedData, setSearchedData] = useState({
    APIName: null,
    APIDesc: null
  });

  const [originalArray, setOriginalArray] = useState([])

  useEffect(() => {
    if (searchedData?.APIName) {
      setSearchedData({});
    }
  }, [index, prodIndex]);

  console.log({ prodIndex });

  const dropDownData = [];

  useEffect(() => {
    if (!dropDownData.length) {
      data.Category.forEach((category) => {
        category.Product.forEach((product) => {
          product.API.forEach((api) => {
            const obj = {
              value: api.APIName,
              key: api.APIName,
              desc: api.APIDesc
            }
            dropDownData.push(obj);
          })
        })
      })
    }
    setOriginalArray(dropDownData)
    console.log({ dropDownData });
  }, []);

  useEffect(() => {
    if (!dropDownData.length) {
      data.Category.forEach((category) => {
        category.Product.forEach((product) => {
          product.API.forEach((api) => {
            const obj = {
              value: api.APIName,
              key: api.APIName,
              desc: api.APIDesc
            }
            dropDownData.push(obj);
          })
        })
      })
    }
    setOriginalArray(dropDownData)
    console.log({ dropDownData });
  }, [searchedData]);

  return (

    <div>
      <br />

      <ReactSearchBox
        placeholder="Search"
        data={originalArray}
        value={searchedData}
        onChange={() => console.log({ dropDownData })}
        onSelect={(record) => { setSearchedData({ APIName: record.item.value, APIDesc: record.item.desc }) }}
      />
      <br />

      <div className="row">
        {console.log(index, prodIndex)}
        {
          index === null || prodIndex === null || searchedData?.APIName == null ?
            searchedData?.APIName ?
              (
                <div className="mb-2 col-lg-4">

                  <div className="col-lg-12">
                    <div
                      className=" "
                      style={{
                        background: "#f6f6f7",
                        borderRadius: 10,
                        padding: 10,

                      }}
                    >
                      <div
                        className="card-body"
                        style={{ padding: 17, paddingTop: 20 }}
                      >
                        <div style={{ textAlign: "left" }}>
                          <h6
                            style={{
                              textAlign: "left",
                              fontSize: 16,
                              color: "#303030",
                            }}
                          >
                            {searchedData.APIName}
                          </h6>
                          <p
                            className="card-font"
                            style={{
                             
                              textAlign: "left",
                              fontSize: 15,
                              color: "#606060",
                              paddingTop: 13,
                              
                              
                            }}
                          >
                            {searchedData.APIDesc}
                          </p>
                          <br />
                          <br />
                          <button className="btn common-btn-blue a-attention-link-add-script">
                            Explore
                          </button>
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
              :
              typeof index === "number" && typeof prodIndex === 'number' ?
                (
                  data.Category[index].Product[prodIndex].API.map((api) => (
                    <div className="mb-2 col-lg-4" >

                      <div className="col-lg-12" style={{
                            }}>
                        <div
                          className="borderradiusbox "
                         
                        >
                          <div
                            className="card-body"
                            style={{ padding: 15, paddingTop: 20 }}
                          >
                            <div style={{ textAlign: "left" }}>
                              <h6 className="card-font textheight1"
                                style={{
                                  textAlign: "left",
                                  fontSize: 16,
                                  color: "#303030",
                                }}
                              >
                                {api.APIName}
                              </h6>
                              <p
                                className="card-font textheight2"
                                style={{
                                  textAlign: "left",
                                  fontSize: 15,
                                  color: "#606060",
                                  paddingTop: 13,
                                  
                                }}
                              >
                                {api.APIDesc.length > 70
                            ? `${api.APIDesc.substring(0, 70)}...`
                            : api.APIDesc}
                              </p>
                              <br />
                              <br />
                              <button className="btn common-btn-blue a-attention-link-add-script">
                                Explore
                              </button>
                              <br />
                              <br />
                              <br />
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )
                :
                <div className="divpadding1" > 
                  <h2 className="divtext" >Welcome to RBL's API Catalog</h2>
                 
                    <ul className="divpaddingleft1">
                    <li className="divpaddingleft">Please click a Category of your choice on the left-hand side menu. </li>
                      <li className="divpaddingleft">Next click on a product to view the related APIs.</li>
                    </ul>
                </div>
            :
            searchedData?.APIName ?
              (
                <div className="mb-2 col-lg-4">

                  <div className="col-lg-12">
                    <div
                      className=" "
                      style={{
                        background: "#f6f6f7",
                        borderRadius: 10,
                        padding: 10,

                      }}
                    >
                      <div
                        className="card-body"
                        style={{ padding: 17, paddingTop: 20 }}
                      >
                        <div style={{ textAlign: "left" }}>
                          <h6
                            style={{
                              textAlign: "left",
                              fontSize: 16,
                              color: "#303030",
                            }}
                          >
                            {searchedData.APIName}
                          </h6>
                          <p
                            className="card-font"
                            style={{
                              textAlign: "left",
                              fontSize: 15,
                              color: "#606060",
                              paddingTop: 13,
                            }}
                          >
                            {searchedData.APIDesc}
                          </p>
                          <br />
                          <br />
                          <button className="btn common-btn-blue a-attention-link-add-script">
                            Explore
                          </button>
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
              :
              <div > 
                <h2 >Wg</h2>
                <br/>
                <p    style={{ color: 'black', fontWeight: '400', fontSize: 15, background:"#f6f6f7" }}>Please click a Category of your choice on the left-hand side menu.Next, click on a product to view the related APIs.</p>
              </div>
        }
      </div>
    </div>
  );
};

export default ApiProducts;
