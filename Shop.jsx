import React from "react";
import {PRODUCTS} from '../../products'
import "./Shop.css";
import Product from './Product.jsx'
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Khubaib Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
};