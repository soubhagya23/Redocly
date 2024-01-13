import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  var Home = require('./api_products.jsx').default;
 
  return (
  <Home/>
  );
 


}


export default App;


