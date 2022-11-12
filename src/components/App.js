import React from 'react';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';

const App = () => {



  return (
    <div>

      <header>
        <h1>Delavega Autoplex (hidden header)</h1>
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
        &#169; 2019 by Delavega Autoplex.
        <br />
        Developed by Drewford
      </footer>

    </div>
  )
}

export default App;