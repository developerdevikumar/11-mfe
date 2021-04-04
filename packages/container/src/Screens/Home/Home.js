import React from 'react'
import BannerList from './Components/BannerList'
import ClientList from './Components/ClientList'
import ProductList from './Components/ProductList'
import RepairList from './Components/RepairList'
import ServiceList from './Components/ServiceList'

function Home() {
    return (
        <div>
<BannerList />
<RepairList />
<ServiceList />
<ProductList />
<ClientList />
        </div>
    )
}

export default Home
