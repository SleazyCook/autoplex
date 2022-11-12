import React from 'react';

const Home = () => {
  return (
    <div>
      <div id="logo-background">
        <div id="home-img">
          <img alt="de la vega autoplex logo" src="https://i.imgur.com/GMkgmr4.png" />
        </div>

        <div className="home-social-container">
          <a className="home-social-link" href="https://www.facebook.com/delavegaautoplex" target="_blank">
            <img alt="facebook icon link" src="https://i.imgur.com/eTvEDA8.png" target="_blank" />
          </a>

          &nbsp;
          &nbsp;

          <a className="home-social-link" href="" target="_blank">
            <img alt="instagram icon link" src="https://i.imgur.com/fsR5M5g.png" />
          </a>
        </div>
        </div>


      <div className="intro">
        <p id="sales-pitch">
          Purchasing a vehicle doesn’t have to be so hard on your
          <br />
          pocket. At  Delavega Autoplex, we’ve got a wide range of 
          <br />
          options that fall within everyone’s budget. Browse through 
          <br />
          all of our inventory online, and come test drive one of our 
          <br />
          certified pre-owned vehicles today.
        </p>
      </div>
    </div>


  )
}

export default Home;