import React from 'react'

function RepairItem({tittle, description}) {
    return (
        <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
  <div class="for_box">
                     <i><img src="icon/1.png"/></i>
                     <h3>{tittle}</h3>
                     <p>{description}</p>
                  </div>
                  </dir>
    )
}

export default RepairItem
