import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import logo from './media/logo.svg';
import mockup from './media/mockup.jpg';
import homePage from './media/home-page.png';
import products from './media/products.png';
import productsDetail from './media/products-detail.png';
import contact from './media/contact.png';
import navigation from './media/navigation.png';
import devices from './media/devices.jpg';
import devicesMin from './media/devices-min.jpg';
import credits from './media/credits.png';
import creditsMin from './media/credits-min.png';
import mockup2 from './media/mockup2.jpg';
import mockup2Min from './media/mockup2-min.jpg';

function Section() {
  return (
    <section className="ect">

      {/*
        Work Head
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <WorkHead id={5} />
      }

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img className="work-intro__logo" src={logo} width="187" height="187" alt="Logo Escinter" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Escinter.<br /> Spaces That Engage.</h3>
          <p className="work-intro__description">Escinter is a family company with 25 years of experience in the market of corporate spaces interiors. Aware that workspace quality directly interferes in people’s lives, its mission is to ensure that its customers have a better quality of life and performance.</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="work-mockup">
        <div className="container">
          <img className="work-mockup__image" src={mockup} alt="" />
        </div>
      </div>

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>Present the company as well as its products catalog on mobile version, allowing the best possible experience in a clear and concise way.</p>
        </div>
      </div>

      {/* Web Mobile */}
      <div className="work-step work-step--web-mobile">
        <div className="container">
          <h3 className="work-step__title">Pages</h3>
          <ul className="chess-list">
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Home Page</h4>
                <p>The home page first displays a slideshow with the main offers of the moment, and below it shows the categories of products. At the end, there are the address, a field to subscribe to the newsletter, and access to social networks.</p>
              </div>
              <div>
                <img src={homePage} alt="Home Page" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Products</h4>
                <p>This page allows users to visualize multiple models at the same time, thus speeding up their search. You can filter by category.</p>
              </div>
              <div>
                <img src={products} alt="Products" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Product Detail</h4>
                <p>You can see some more of the story and the designer of the item on this page, see photos from different angles and have access to all data, such as dimensions and manufacturing details.</p>
              </div>
              <div>
                <img src={productsDetail} alt="Products Destail" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Contact</h4>
                <p>The site provides a simple form to get in touch. As well as access to addresses of physical stores through the map.</p>
              </div>
              <div>
                <img src={contact} alt="Contact" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Navigation</h4>
                <p>Plain menu that gives access to all pages on the site, in addition to the contact of the branch and the headquarters.</p>
              </div>
              <div>
                <img src={navigation} alt="Navigation" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/*
        Devices
        Static for small and medium devices
        Fixed for greater than med devices
      */}
      { window.innerWidth < 960 ? (
        <img className="image-full--devices image-full" src={devicesMin} alt="" />
      ) : (
      <div className="fixed-image image-full--devices">
        <div className="fixed-image__image" style={{ backgroundImage: `url(${devices})` }} />
      </div>
      )}

      {/* Credits */}
      <div className="my-role">
        <div className="container">
          <h4 className="work-credits__title">My Role</h4>
          <p className="work-credits__description">I was responsible for the visual and interactive solution of the mobile devices. Direction design and version desktop were made by <a href="https://www.linkedin.com/in/adrielnunes" target="_blank" rel="noopener noreferrer">Adriel Nunes</a>.</p>
        </div>
      </div>

      <div className="work-credits container container--full">
        <picture>
          <source srcSet={creditsMin} media="(max-width: 480px)" />
          <img src={credits} alt="Credits" />
        </picture>
      </div>

      {/*
        Mockup
        Static for small and medium devices
        Fixed for greater than med devices
      */}
      { window.innerWidth < 960 ? (
        <img className="image-full" src={mockup2Min} alt="" />
      ) : (
      <div className="fixed-image">
        <div className="fixed-image__image" style={{ backgroundImage: `url(${mockup2})` }} />
      </div>
      )}
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
