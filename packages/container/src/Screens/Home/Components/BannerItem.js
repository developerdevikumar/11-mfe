import React from 'react'

function BannerItem({haeding,tittle, description,ntn}) {
    return (
        <div>
 <div className="carousel-caption relative">
            <h1>our <br /> <strong className="black_bold">{haeding} </strong><br />
              <strong className="yellow_bold"> {tittle}</strong></h1>
            <p>
             {description} </p>
            <a href="#">{ntn}</a>
          </div>
        </div>
    )
}

export default BannerItem
