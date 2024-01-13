import React from 'react';
import { RedocStandalone } from 'redoc';
import Header from './header';
import Footer from './footer';
import Swagger from './swagger.json'

export default function APIDetails(props) {

  return (

  <>
  <Header />
  <div id="redoc-container">
  <RedocStandalone
    specUrl={Swagger}
    options={{
      nativeScrollbars: true,
      theme: { colors: { primary: { main: '#dd5522' } } },
    }
    }

  />
   </div>
   <Footer />
</>

  );
};