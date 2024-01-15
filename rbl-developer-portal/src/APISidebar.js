import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import data from './APICatalogue.json';
import ApiProducts from './ApiProducts';
import { FaCircle } from "react-icons/fa";


export default function APISidebar() {
  const [toggled, setToggled] = useState(true);
  const [index, setIndex] = useState(null);
  const [prodIndex, setProdIndex] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [expanded, setExpanded] = useState(null); // Track currently expanded submenu
  const [prodExpanded, setProExpanded] = useState(null); //Track currently expanded prod subMenu

  const handleSearch = () => {
    setIndex(null);
    setProdIndex(null);
    setBreadcrumbs([]);
  };

  const handleSubMenuClick = (catIndex, prodIndex, apiIndex) => {
    const newBreadcrumbs = [];

    if (catIndex !== null) {
      newBreadcrumbs.push(data.Category[catIndex].CatName);
    }

    if (prodIndex !== null) {
      newBreadcrumbs.push(data.Category[catIndex].Product[prodIndex].ProdName);
    }

    if (apiIndex !== null) {
      newBreadcrumbs.push(data.Category[catIndex].Product[prodIndex].API[apiIndex].APIName);
    }

    setIndex(catIndex);
    setProdIndex(prodIndex);

    // Toggle the expanded state of the clicked submenu
    setExpanded(catIndex);
    setProExpanded(prodIndex)

    setBreadcrumbs(newBreadcrumbs);
  };

  return (
    <div className='container'>
      <div className='row'>
        <Sidebar
          className='col-lg-3'
          onBackdropClick={() => {
            setToggled(false);
            setExpanded(null); // Collapse all submenus when the sidebar is closed
          }}
          toggled={toggled}
          breakPoint='md'
          style={{ backgroundColor: '#F6F6F7', paddingTop: '50px' }}
        >
          <Menu>
            {data?.Category?.map((Data, catIndex) => (
              <SubMenu
                onClick={() => {
                  handleSubMenuClick(catIndex, null, null);
                }}
                style={{
                  color: '#303030',
                  fontWeight: '500',
                  fontSize: 16,
                  borderBottomColor: '#e4e1e1',
                  borderBottomStyle: 'inset',
                  borderBottomWidth: '1px',
                }}
                label={Data?.CatName}
                active={expanded === catIndex}
              >
                {expanded === catIndex &&
                  Data.Product &&
                  Data.Product.map((product, pIndex) => (
                    <SubMenu
                      key={pIndex}
                      onClick={() => {
                        handleSubMenuClick(catIndex, pIndex, null);
                      }}
                      style={{ color: '#304087', fontWeight: '500', fontSize: 16, background: '#f6f6f7' }}
                      label={product.ProdName}
                      active={prodExpanded === pIndex}
                    >
                      {prodExpanded === pIndex && product.API &&
                        product.API.map((api, apiIndex) => (
                          <MenuItem
                            key={apiIndex}
                            style={{ color: 'black', fontWeight: '400', fontSize: 15, background: '#f6f6f7' }}
                            disabled
                          >
                            {api.APIName}
                          </MenuItem>
                        ))}
                    </SubMenu>
                  ))}
              </SubMenu>
            ))}
          </Menu>
        </Sidebar>
        <main className='col-lg-9'>
          <div>
            <br />
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>{index > 0 ? ' > ' : ''}{crumb}</span>
            ))}
          </div>
          <button className="btn btn-primary btn-lg btn-block d-sm-none" onClick={() => setToggled(!toggled)}>
            Explore APIS
          </button>
          <div className="row">
            <div className="col-lg-12">
              <ApiProducts index={index} prodIndex={prodIndex} handleSearch={handleSearch} />
            </div>
            {/* Add more ApiProducts components here if needed */}
          </div>
        </main>
      </div>
    </div>
  );
}