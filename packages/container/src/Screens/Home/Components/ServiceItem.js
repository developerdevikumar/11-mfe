import React from 'react'

function ServiceItem({tittle, description}) {
    return (
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">

                  <div class="service-box">
                  <i><img src="icon/1.png"/></i>

                     <h3>{tittle}</h3>
                     <p>{description}</p>
                  </div>
            </div>
    )
}

export default ServiceItem
