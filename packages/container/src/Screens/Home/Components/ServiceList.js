import React from 'react';
import ServiceItem from './ServiceItem';
function ServiceList() {
    return (
        <div>
             <div class="service">
         <div class="container">
            <div class="row">
               <div class="col-md-8 offset-md-2">
                  <div class="title">
                     <h2>Service <strong class="black">Process</strong></h2>
                     <span>Easy and effective way to get your device repair</span>
                  </div>
               </div>
            </div>
            <div class="row">
                  <ServiceItem tittle="Fast service" description="vfhhnmij  fejiohr j oirjejfheoikj fej"/>
                  <ServiceItem tittle="Secure payments" description="nfgri  fejfiru  rjpifo ijfir  irjfirjoroej"/>
                  <ServiceItem tittle="Expert team" description="pjrfirj jopfjroifjiroj nforknroi r  frm"/>
                  <ServiceItem tittle="Affordable services" description="frfrmmorp  ofprjforjo o4krfojrj"/>
                  <ServiceItem tittle="90 Days warranty" description="frfrmmorp  ofprjforjo o4krfojrj"/>
                  <ServiceItem tittle="Award winning" description="frfrmmorp  ofprjforjo o4krfojrj"/>



            </div>
         </div>
      </div>
        </div>
    )
}

export default ServiceList
