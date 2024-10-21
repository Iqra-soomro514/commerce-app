// App.js
import './App.css';
import Cartlist from './components/cart-list/cartlist.jsx';
import PrimarySearchAppBar from './components/header.jsx';
import Product from './components/product/product.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function App() {
  return (
    <div className="App">
   
   <PrimarySearchAppBar/>
   <Product/>
    </div>
  );
}

export default App;
