import './adminnavbar.css'
import logo from './img/levalogo.svg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import tait from './img/taitpattaya.png'

const AdminNavbar = () => {
    return ( 
    <div className='bg-[#081B44] fontmenu flex justify-between items-center text-white h-20'>
        {/* navbar */}
       <div className="flex items-center space-x-8">
        
        {/* โลโก้ */}
        <div className="p-10">
          <img style={{width:130}} src={logo} alt="" />
        </div>

        {/* เมนูหลัก */}
        <div className="flex items-center space-x-6 gap-5">
        <a href="#" className="Menu text-white">Stats</a>
        <a href="#" className="Menu text-white">Userlist</a>
        <a href="#" className="Menu text-white">Sellerlist</a>
        <a href="#" className="Menu text-white">Verify-seller</a>
        </div>
      </div>
       <div className="flex items-center p-10">
        <button className="text-white btn btn-outline-light ">Log out</button>
      </div>
    </div> 
    );
}
 
export default AdminNavbar;