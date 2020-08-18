import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
//import Ideas from './components/Ideas';
//import Categories from './components/Categories';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="row">
        <div className="col-md-8 offset-md-1">
          <Layout />         
        </div>      
      </div>
    </BrowserRouter>
  );
}

export default App;
