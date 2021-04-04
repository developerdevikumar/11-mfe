import React from 'react'

function ProductItem({tittle, price}) {
    return (
 <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="product-box">
              <i><img src="icon/p1.png" /></i>
              <h3>{tittle}</h3>
              <span>{price}</span>
            </div>
          </div>
    )
}

export default ProductItem
