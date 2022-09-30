import React, { useState } from 'react';
import '../styles/navbar.css'
import {
    FaTh,
    FaBars,
    FaAdversal,
    FaCashRegister,
    FaDev,
    FaChartBar,
    FaCcPaypal,
    FaCalendar
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import esti from '../assets/esti.png'


const Navbar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/secteur",
            name:"Secteur",
            icon:<FaAdversal/>
        },
        {
            path:"/catalogue",
            name:"Catalogue",
            icon:<FaCashRegister/>
        },
        {
            path:"/formation",
            name:"Formation",
            icon:<FaDev/>
        },
        {
            path:"/commande",
            name:"Commande",
            icon:<FaChartBar/>
        },
        {
            path:"/vente",
            name:"Vente",
            icon:<FaCcPaypal/>
        },
        {
            path:"/calendrier",
            name:"Calendrier",
            icon:<FaCalendar/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <img src= { esti } alt="logo" className='logo'/>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Navbar;