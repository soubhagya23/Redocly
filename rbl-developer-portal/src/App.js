import Apiproducts from "./api_products";
import Home from "./home";
import Howitworks from "./how_it_works";
import Quickassistance from "./quick_assistance";
import APIDetails from "./api_details";
import Faq from "./faq";
import { Route, Routes } from "react-router-dom";

import LogicalNot from "./LogicalNot";
import Products from "./Products";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apiproducts" element={<Apiproducts />} />
        <Route path="products" element={<Products />} />
        <Route path="howitworks" element={<Howitworks />} />
        <Route path="faq" element={<Faq />} />
        <Route path="quickassistance" element={<Quickassistance />} />
        <Route path="apidetails" element={<APIDetails />} />
      </Routes>
    </div>
  );
}

export default App;
