import React from 'react';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';

const App = () => {



  return (
    <div id="home-return">

      <header>
        {/* hidden header for SEO */}
        <h1>Delavega Autoplex</h1>
      </header>

      <Navbar />

      <Outlet context />

      <footer>
        <a href="https://www.facebook.com/delavegaautoplex" target="_blank">
          <img alt="facebook icon link" src="https://i.imgur.com/eTvEDA8.png" target="_blank" />
        </a>
        &nbsp;
        &nbsp;
        <a href="" target="_blank">
          <img alt="instagram icon link" src="https://i.imgur.com/fsR5M5g.png" />
        </a>

        <br />
        <br />
        &#169; 
        <span id="copyright">2019 by Delavega Autoplex.</span>
        <br />
        <span id="dev-credit">Developed by</span> 
        <span id="author"> Drewford</span>
      </footer>

    </div>
  )
}

export default App;