import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductList from './ProductList';
import GetProductInPlace from './GetProductInPlace';
import HomePage from './HomePage';
import AddProduct from './AddProduct';
import SearchProduct from './SearchProduct';
import ProductWarranty from './ProductWarranty';

function App() {
  return (
    <div className="App">
      <h1>Product Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/products" element={<ProductList />} ></Route>
          <Route path="/product" element={<AddProduct />} ></Route>
          <Route path="/product/search" element={<SearchProduct />} ></Route>
          <Route path="/product/place" element={<GetProductInPlace />} ></Route>
          <Route path="/product/warranty" element={<ProductWarranty />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
