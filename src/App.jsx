import { useState } from 'react'

import './App.css'
import Stat from './page/stat'
import BuyerList from './page/buyerlist'
import Sellerlist from './page/sellerlist'
import Verify from './page/verify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminAppLayout from './layouts/AdminAppLayout'

function App() {

  return (
    
    <BrowserRouter basename='/multipages/'>
    <Routes>
      <Route element={<AdminAppLayout/>}>
      <Route path='buyerlist' element={<BuyerList/>}/>
      <Route path='sellerlist' element={<Sellerlist/>}/>
      <Route path='stat' element={<Stat/>}/>
      <Route path='verify' element={<Verify/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
     
     
    
  )
}

export default App
