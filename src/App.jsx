import { useState } from 'react'

import './App.css'
import Stat from './page/Admin/stat'
import BuyerList from './page/Admin/buyerlist'
import Sellerlist from './page/Admin/sellerlist'
import Verify from './page/Admin/verify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminAppLayout from './layouts/AdminAppLayout'
import Home from './page/Buyer/Home'
import Propertie from './page/Buyer/Propertie'
import TradingGuide from './page/TradingGuide'
import Login from './page/Login'
import UserAppLayout from './layouts/UserAppLayout'
import SellerAppLayout from './layouts/SellerAppLayout'
import ForwardToLogin from './page/ForwardToLogin'
import PostProperty from './page/Seller/PostProperty'
import HomeSeller from './page/Seller/HomeSeller'
import PropertyInfo from './page/Buyer/PropertyInfo'
import PropertyDetail from './page/Buyer/PropertyDetail'
import Terms from './page/Buyer/Terms'
import Privacy from './page/Buyer/Privacy'
import Conditions from './page/Buyer/Conditions'
import Policy from './page/Buyer/Policy'
import Property from './page/Seller/Property'
import ProInfo from './page/Seller/ProInfo'
import PrivacyPolicy from './page/Seller/PrivaryPolicy'
import PolicyUse from './page/Seller/PolicyUse'
import ConditionsOf from './page/Seller/ConditionsOf'
import TermsSale from './page/Seller/TermsSale'

function App() {

  return (
    
    <BrowserRouter basename='/Project/'>
    <Routes>
      {/* ดึงlayout */}
      <Route element={<AdminAppLayout/>}> 
      <Route path='buyerlist' element={<BuyerList/>}/>
      <Route path='sellerlist' element={<Sellerlist/>}/>
      <Route path='stat' element={<Stat/>}/>
      <Route path='verify' element={<Verify/>}/>
      <Route path='*' element={<ForwardToLogin />} />

      </Route>
      <Route element={<UserAppLayout/>}> 
      <Route path='home' element={<Home/>}/>
      <Route path='propertie' element={<Propertie/>}/>
      <Route path='tradingguide' element={<TradingGuide/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='*' element={<ForwardToLogin />} />
      <Route path='BuyerPropertyinfo' element={<PropertyInfo />} />
      <Route path='PropertyDetail/:id' element={<PropertyDetail />} />
      <Route path='Terms' element={<Terms />} />
      <Route path='Privacy' element={<Privacy />} />
      <Route path='Policy' element={<Policy />} />
      <Route path='Conditions' element={<Conditions />} />
      
      </Route>
      <Route element={<SellerAppLayout/>}>
      <Route path='homeseller' element={<HomeSeller/>}/>
      <Route path='property' element={<Property/>}/>
      <Route path='trading-guide' element={<TradingGuide/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='*' element={<ForwardToLogin />} />
      <Route path='postproperty' element={<PostProperty />} />
      <Route path='SellerPropertyinfo/:id' element={<ProInfo />} />
      <Route path='TermsSale' element={<TermsSale />} />
      <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
      <Route path='PolicyUse' element={<PolicyUse />} />
      <Route path='ConditionsOf' element={<ConditionsOf />} />
      </Route>
    </Routes>
    </BrowserRouter>
     
     
    
  )
}

export default App
