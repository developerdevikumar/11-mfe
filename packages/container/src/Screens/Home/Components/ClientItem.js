import React from 'react'

function ClientItem({Name,Date,Description}) {
    return (
        <div>
  <div className="carousel-item active">
          <div className="container">
            <div className="carousel-caption text-bg">
              <div className="img_bg">
                <i><img src="images/lllll.png" /><span>{Name}<br /><strong className="date">{Date}</strong></span></i>
              </div>
              <p>{Description}</p>
            </div>
          </div>
        </div>
        </div>
    )
}

export default ClientItem
