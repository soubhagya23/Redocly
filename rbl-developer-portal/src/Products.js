import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import APISidebar from "./APISidebar";
import Metadata from "./MetaData"

import "./index.css"

<link
    rel="stylesheet"
    media="all"
    href="./index.css"
  />

export default function Products() {
  
  return (
    <>
    <Metadata />
     <Header />
    <APISidebar />

    <Footer />
    </>
  );
  }
