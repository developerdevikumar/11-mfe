import React from 'react'
import ProductItem from './ProductItem'

function ProductList() {
    return (
    <React.Fragment>
  <div className="product">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title">
            <h2>our <strong className="black">products</strong></h2>
            <span>We package the products with best services to make you a happy customer.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="product-bg">
    <div className="product-bg-white">
      <div className="container">
        <div className="row">
<ProductItem tittle="pendrive" price="300Rs" />
<ProductItem tittle="pendrive" price="300Rs" />
<ProductItem tittle="pendrive" price="300Rs" />
<ProductItem tittle="pendrive" price="300Rs" />
<ProductItem tittle="pendrive" price="300Rs" />
<ProductItem tittle="pendrive" price="300Rs" />
<ProductItem tittle="pendrive" price="300Rs" />
<ProductItem tittle="pendrive" price="300Rs" />


        </div>
        </div>
      </div>
    </div>
    </React.Fragment>



    )
}

export default ProductList
