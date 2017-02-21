import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.svg';
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
          <img className="work-intro__logo" src={logo} width="116" alt="David Yurman" />
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
          <p>Design a mobile experience to a luxury jewelry e-commerce, enabling a friendly, intuitive and elegant products exhibition and purchase.</p>
        </div>
      </div>

      {/* Pages */}
      <div className="container">
        <ul className="chess-list chess-list--align-top">
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Home Page</h4>
              <p>Slideshow covering main offerings. Access to navigation menu and quantity of items in the bag from the header.</p>
            </div>
            <div>
              <img src={homePage} alt="Home Page" />
            </div>
          </li>
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Navigation</h4>
              <p>Plain menu with collapsed elements. You can search and access other areas of the site through it.</p>
            </div>
            <div>
              <img src={navigation} alt="Navigation" />
            </div>
          </li>
          <li>
            <div className="chess-list__info chess-list__info--sticky">
              <h4 className="chess-list__title">Explore</h4>
              <p>You can visualize several products at the same time, in addition to filter by price, size, color and category.</p>
            </div>
            <div>
              <img src={explore} alt="Explore" />
            </div>
          </li>
          <li>
            <div className="chess-list__info chess-list__info--sticky">
              <h4 className="chess-list__title">Procuct</h4>
              <p>There are highlighted images on the product page where you can view every detail of the item. Available colors, dimensions, prices and several other details are also displayed.</p>
            </div>
            <div>
              <img src={productDetail} alt="Procuct Detail" />
            </div>
          </li>
          <li>
            <div className="chess-list__info chess-list__info--sticky">
              <h4 className="chess-list__title">Search</h4>
              <p>Search for products with filters, allowing a fast and efficient search.</p>
            </div>
            <div>
              <img src={search} alt="Search" />
            </div>
          </li>
          <li>
            <div className="chess-list__info chess-list__info--sticky">
              <h4 className="chess-list__title">Shopping Bag</h4>
              <p>Details of all products added in the bag. Intuitive browsing enables users to easily remove items or checkout.</p>
            </div>
            <div>
              <img src={shoppingBag} alt="Shopping Bag" />
            </div>
          </li>
          <li>
            <div className="chess-list__info chess-list__info--sticky">
              <h4 className="chess-list__title">Checkout</h4>
              <p>Last purchase step, page where the user fill in personal and payment data to complete the purchase.</p>
            </div>
            <div>
              <img src={checkout} alt="Checkout" />
            </div>
          </li>
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Find A Store</h4>
              <p>Easy way to find a nearby store, identifying the location or by entering the zip code.</p>
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
          <p className="credits__info">I have had as input the desktop layout designed by David Yurman’s designer, <a href="http://w.sunghean.com/" target="_blank" rel="noopener noreferrer">Sung Hean</a> and by designer <a href="http://alexlins.com/portfolio/design/" target="_blank" rel="noopener noreferrer">Alex Lins</a>. My role in the project was to draw the site for mobile devices along with designer <a href="https://www.linkedin.com/in/adrielnunes" target="_blank" rel="noopener noreferrer">Adriel Nunes</a>.</p>
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
