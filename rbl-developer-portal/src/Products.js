import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import APISidebar from "./APISidebar";

import "./index.css"

<link
    rel="stylesheet"
    media="all"
    href="./index.css"
  />

export default function Products() {
  
  return (
    <>
     <Header />
    <APISidebar />

    <Footer />
    </>
  );
  }
