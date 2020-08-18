import React from "react";
import { Route, Link } from 'react-router-dom';

import Ideas from './Ideas';
import Categories from './Categories';


const Layout = () => {
    return (
        
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-4">MOJE IDEJE</h1>
                    <p class="lead">Zapišite, obrišite, modifikujte ideje</p>
                </div>
            </div>
            <header>
                <nav className="AppNav">
                    <ul>
                        <li><b><u><Link to="/">Ideje</Link></u></b></li>
                        <li><b><u><Link to="/kategorije">Kategorije</Link></u></b></li>
                    </ul>
                </nav>
            </header>        
            
            <Route path="/" exact component={Ideas} /> 
            <Route path="/kategorije" component={Categories} /> 
        </>
    );
}
 
export default Layout;