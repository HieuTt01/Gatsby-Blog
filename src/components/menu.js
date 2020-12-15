import React from "react";
import "./menu.css";
import { Link } from "gatsby";

export default (props) => {
    const { title } = props;
    return (
        <header>
            <div className="nav">
                <h3 className="nav-brand"><Link to={`/`}>{title}</Link></h3>
                <ul>
                    <li className="nav-item"><Link to={`/contact/`}>Contact</Link></li>
                    <li className="nav-item"><Link to={`/about/`}>About</Link></li>
                    <li className="nav-item"><Link to={`/`}>Home page</Link></li>
                </ul>
            </div>
        </header>
    )
            
}