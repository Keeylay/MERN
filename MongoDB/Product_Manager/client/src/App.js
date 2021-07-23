import './App.css';
import AllProducts from './components/AllProducts';
import {Link, Router} from '@reach/router';
import AddProduct from './components/ProductForm';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
        <h1> Product </h1>
        <Link to = "/api/product">All Products </Link>
        <Link to = "/api/product/new"> Add Product</Link>
        <Router>
          <AllProducts path = "/api/product/" />
          <AddProduct path = "/api/product/new" />
          <OneProduct path = "/api/product/:_id" />
          <EditProduct path = "/api/product/edit/:_id" />
        </Router>
    </div>
  );
}

export default App;
