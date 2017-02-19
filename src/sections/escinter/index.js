import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.svg';
import mockup from './media/mockup.jpg';
import siteMap from './media/site-map.png';
import siteMapMin from './media/site-map-min.png';
import homePage from './media/home-page.png';
import products from './media/products.png';
import productsDetail from './media/products-detail.png';
import contact from './media/contact.png';
import navigation from './media/navigation.png';
import devices from './media/devices.png';
import credits from './media/credits.png';
import creditsMin from './media/credits-min.png';
import guideline from './media/guideline.png';
import mockup2 from './media/mockup2.png';

function Section() {
  return (
    <section className="ect">

      {/*
        Work Head
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <WorkHead
          name="ect"
          title="Escinter"
          category="web mobile"
          color="white"
          src={video}
          type="video"
        />
      }

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img src={logo} width="187" height="187" alt="Logo Escinter" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Escinter.<br /> Spaces That Engage.</h3>
          <p className="work-intro__description">Escinter is a familiar company with 25 years of acting in the interior market of corporate spaces. Aware that the quality of the workspace interferes directly in people’s life, its mission is to ensure that its customers have a better quality of life and performance.</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="container">
        <img src={mockup} alt="" />
      </div>

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>Present the company as well as its catalog of products in the mobile version, allowing the best experience possible in a clear and concise manner.</p>
        </div>
      </div>

      {/* Step 01 */}
      <div className="work-step work-sitemap work-step--ect01">
        <div className="container">
          <h3 className="work-step__title">Site Map</h3>
          <picture>
            <source srcSet={siteMapMin} media="(max-width: 480px)" />
            <img src={siteMap} alt="Site Map" />
          </picture>
        </div>
      </div>

      {/* Step 02 */}
      <div className="work-step work-step--ect02">
        <div className="container">
          <h3 className="work-step__title">Web Mobile</h3>
          <ul className="chess-list">
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Home Page</h4>
                <p>The initial page firstly displays a slideshow with the main offers of the moment, and below product’s categories. In the finish it’s showed an address, field to subscribe to the newsletter and access to social networks. </p>
              </div>
              <div>
                <img src={homePage} alt="Home Page" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Products</h4>
                <p>The page allows the user to view several models at the same time, thus streamlining their search. You can filter by category.</p>
              </div>
              <div>
                <img src={products} alt="Products" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Products Detail</h4>
                <p>On this page it’s possible to meet better the story and designer of the piece, see pictures from different angles and have access to all informations, such as dimensions and manufacturing details.</p>
              </div>
              <div>
                <img src={productsDetail} alt="Products Destail" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Contact</h4>
                <p>The website provides a simple form to contact with the company, and access to address of physical stores through a map.</p>
              </div>
              <div>
                <img src={contact} alt="Contact" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Navigation</h4>
                <p>Simple menu that gives access to all site’s page, besides contact telephones of  branch and headquarter of company.</p>
              </div>
              <div>
                <img src={navigation} alt="Navigation" />
              </div>
            </li>
          </ul>
        </div>
        <img className="image-full" src={devices} alt="" />
        <div className="work-credits">
          <div className="container">
            <h4 className="work-credits__title">Credits</h4>
            <p className="work-credits__description">Desktop version designed by: <a href="https://www.linkedin.com/in/adrielnunes" target="_blank" rel="noopener noreferrer">Adriel Nunes</a></p>
            <picture>
              <source srcSet={creditsMin} media="(max-width: 480px)" />
              <img src={credits} alt="Credits" />
            </picture>
          </div>
        </div>
      </div>

      {/*
        Guideline
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <div className="work-step work-step--ect03 work-guideline hide-viewport--min">
          <div className="container">
            <h3 className="work-step__title">Guideline</h3>
            <img src={guideline} alt="Guideline" />
          </div>
        </div>
      }

      {/* Mockup */}
      <img className="image-full" src={mockup2} alt="" />
    </section>
  );
}

function Escinter() {
  return (
    <WorkPage
      section={Section()}
      name="ect"
      position={5}
      theme="light"
    />
  );
}

export default Escinter;
