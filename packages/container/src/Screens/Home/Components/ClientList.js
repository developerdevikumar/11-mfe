import React from 'react'
import ClientItem from './ClientItem'

function ClientList() {
    return (
        <div>
             <div className="Clients_bg_white">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="title">
          <h3>What Clients Say?</h3>
        </div>
      </div>
    </div>
    <div id="client_slider" className="carousel slide banner_Client" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#client_slider" data-slide-to={0} className="active" />
        <li data-target="#client_slider" data-slide-to={1} />
        <li data-target="#client_slider" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
          <div>
      <ClientItem Name="kumar" Date="24/04/19985" Description="very good personsDm  dfbjg iikijd cndehferf " />

</div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default ClientList
