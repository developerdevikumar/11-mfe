import React from 'react'
import RepairItem from './RepairItem'

function RepairList() {
    return (
        <div>
 <div class="whyschose">
         <div class="container">

            <div class="row">
               <div class="col-md-7 offset-md-3">
                  <div class="title">
                     <h2>Why <strong class="black">choose us</strong></h2>
                     <span>Fastest repair service with best price!</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="choose_bg">
         <div class="container">
            <div class="white_bg">
            <div class="row">


<RepairItem src="icon/dids.png" tittle="Data recovery" description="Perspiciatis eos quos totam"/>
<RepairItem src="icon/2.png" tittle="Computer repair" description="cum minima autPerspiciatis eos quos"/>

<RepairItem src="icon/1.png" tittle="Mobile service" description="Perspiciatis eos quos totam cum minima autPerspiciatis"/>
<RepairItem src="icon/1.png" tittle="Network solutions" description="cum minima autPerspiciatis eos quos"/>


               <div class="col-md-12">
                  <a class="read-more">Read More</a>
               </div>
            </div>
         </div>
       </div>
      </div>
        </div>
    )
}

export default RepairList
