import React from 'react'
import { Link } from 'react-router-dom';

function TopBarComponent() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: "#202233" }}>
                <div className="container">
                    <Link className="navbar-brand" to="#">Student Manager</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add_user">Add New</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://mastercodeaddict.me/" target="_blank">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>        
        </>
    );
}

export default TopBarComponent