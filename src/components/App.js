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
        &#169; 2019 by Delavega Autoplex.
        <br />
        Developed by Drewford
      </footer>

    </div>
  )
}

export default App;