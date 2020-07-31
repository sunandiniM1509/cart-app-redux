import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper" style={{ background: '#2E3B55' }}>
                <div className="container">
                    <Link to="/" className="brand-logo">Aural Studio</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Items</Link></li>
                        <li><Link to="/cart">My Cart</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;