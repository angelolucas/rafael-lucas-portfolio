import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.png';
import mockup from './media/mockup.png';
import mockupMin from './media/mockup-min.png';
import homePage from './media/home-page.png';
import navigation from './media/navigation.png';
import explore from './media/explore.png';
import productDetail from './media/product-detail.png';
import search from './media/search.png';
import shoppingBag from './media/shopping-bag.png';
import checkout from './media/checkout.png';
import findAStore from './media/find-a-store.png';
import guideline from './media/guideline.png';
import credits from './media/credits.png';
import creditsMin from './media/credits-min.png';
import mockup2 from './media/mockup2.jpg';
import mockup2Min from './media/mockup2-min.jpg';

function Section() {
  return (
    <section className="dy">

      {/*
        Work Head
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <WorkHead
          name="dy"
          title="David Yurman"
          category="web mobile"
          color="black"
          src={video}
          type="video"
        />
      }

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img src={logo} width="116" alt="David Yurman" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Discover the artistry and inspiration of America’s preeminent jewelry designer.</h3>
          <p className="work-intro__description">David Yurman Inc. is a privately held American designer jewelry company founded by David Yurman and Sybil Yurmanand headquartered in New York City. There are currently a total of 32 David Yurman boutiques in North America and worldwide.</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="container">
        <picture>
          <source srcSet={mockupMin} media="(max-width: 480px)" />
          <img src={mockup} alt="Mockup" />
        </picture>
      </div>

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>Design a mobile experience for an e-commerce of luxurious jewelry, allowing the exposition and buy of products to be done in a friendly, intuitive and elegant way.</p>
        </div>
      </div>

      {/* Pages */}
      <div className="container">
        <ul className="chess-list chess-list--align-top">
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Home Page</h4>
              <p>Slideshow with the principal offers. Access to navigation menu and quantity of products in the header bag shopping.</p>
            </div>
            <div>
              <img src={homePage} alt="Home Page" />
            </div>
          </li>
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Navigation</h4>
              <p>Simple menu, with compressed components. It is possible make a search and access the other areas of site through this.</p>
            </div>
            <div>
              <img src={navigation} alt="Navigation" />
            </div>
          </li>
          <li>
            <div className="chess-list__info chess-list__info--sticky">
              <h4 className="chess-list__title">Explore</h4>
              <p>It is possible see various products at the same time, besides filter for value, size, color and category.</p>
            </div>
            <div>
              <img src={explore} alt="Explore" />
            </div>
          </li>
          <li>
            <div className="chess-list__info chess-list__info--sticky">
              <h4 className="chess-list__title">Procuct</h4>
              <p>In the product’s page the pictures are shown highlighted, where is possible see all the object’s details. The available colors, dimensions, prices and others details.</p>
            </div>
            <div>
              <img src={productDetail} alt="Procuct Detail" />
            </div>
          </li>
          <li>
            <div className="chess-list__info chess-list__info--sticky">
              <h4 className="chess-list__title">Search</h4>
              <p>Look for products with filters, allowing a fast and efficient search.</p>
            </div>
            <div>
              <img src={search} alt="Search" />
            </div>
          </li>
          <li>
            <div className="chess-list__info chess-list__info--sticky">
              <h4 className="chess-list__title">Shopping Bag</h4>
              <p>Details of all products added to the bag. With an efficient navigation the user can easily remove items or finish the buy.</p>
            </div>
            <div>
              <img src={shoppingBag} alt="Shopping Bag" />
            </div>
          </li>
          <li>
            <div className="chess-list__info chess-list__info--sticky">
              <h4 className="chess-list__title">Checkout</h4>
              <p>Last step for buying, page where the user fills in personal informations and the buy way for finish the buy.</p>
            </div>
            <div>
              <img src={checkout} alt="Checkout" />
            </div>
          </li>
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Find A Store</h4>
              <p>Easy way to find a shop nearby by identifying the location or entering the zip code.</p>
            </div>
            <div>
              <img src={findAStore} alt="Find A Store" />
            </div>
          </li>
        </ul>
      </div>

      {/* Credits */}
      <div className="credits">
        <div className="container">
          <h3 className="credits__title">Credits</h3>
          <p className="credits__info">I had like input the layout for desktop drew by the designer from David Yurman, <a href="http://w.sunghean.com/" target="_blank" rel="noopener noreferrer">Sung Hean</a> and by the designer <a href="http://alexlins.com/portfolio/design/" target="_blank" rel="noopener noreferrer">Alex Lins</a>. My role in the project was draw the site for mobile devices together the designer <a href="https://www.linkedin.com/in/adrielnunes" target="_blank" rel="noopener noreferrer">Adriel Nunes</a>.</p>
        </div>
      </div>

      <div className="container container--full">
        <picture>
          <source srcSet={creditsMin} media="(max-width: 480px)" />
          <img src={credits} alt="Credits" />
        </picture>
      </div>

      {/*
        Guideline
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <div className="work-guideline hide-viewport--min">
          <div className="container">
            <h3 className="work-guideline__title">Style Guide</h3>
            <img className="work-guideline__image" src={guideline} alt="Guideline" />
          </div>
        </div>
      }

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

function DavidYurman() {
  return (
    <WorkPage
      section={Section()}
      name="dy"
      position={4}
      theme="dark"
    />
  );
}

export default DavidYurman;
