import React, {  } from 'react';
import logo from '../../images/logo.png';
import './header.css';

import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../Login/useAuth';
import { Link } from 'react-router-dom';



const Header=()=>{
 const auth=useAuth();
//  console.log(auth);
 
    return (
        <div className="header">
            
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order review</a>
                <a href="/inventory">Manage inventory</a>
                {
                    auth.user &&
                <span style={{color:'yellow'}}>Welcome {auth.user.name}</span>
              

                }
                {
                    auth.user?<a href="/login">Sign Out</a>
                    : <a href="/login">Sign In</a>
                }
            </nav>
        </div>
    );
}; 

export default Header;