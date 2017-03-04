import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import logo from './media/logo.svg';
import mockup from './media/mockup.png';
import mockupMin from './media/mockup-min.png';
import siteMap from './media/site-map.png';
import homePage from './media/home-page.png';
import homePageMin from './media/home-page-min.jpg';
import privateClient from './media/privat-client.jpg';
import privateClientMin from './media/privat-client-min.jpg';
import investiments from './media/investiments.jpg';
import investimentsMin from './media/investiments-min.jpg';
import financialAdvisory from './media/financial-advisory.jpg';
import financialAdvisoryMin from './media/financial-advisory-min.jpg';
import aboutTheClient from './media/about-the-client.jpg';
import aboutTheClientMin from './media/about-the-client-min.jpg';
import guideline from './media/guideline.png';
import mockup2 from './media/mockup2.jpg';
import mockup2Min from './media/mockup2-min.jpg';

function Section() {
  return (
    <section className="bbp">

      {/* Work Head */}
      <WorkHead id={3} />

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img className="work-intro__logo" src={logo} width="204" alt="Logo Banco do Brasil Private" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Don’t rely on Luck. Rely on BB Private.</h3>
          <p className="work-intro__description">Corporate site of the Private segment of the largest bank in Latin America. Aiming to meet the needs of financial advisory and resource management with customized strategies in a free of charge, transparent way.</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="work-mockup">
        <div className="container container--full">
          <picture>
            <source srcSet={mockupMin} media="(max-width: 480px)" />
            <img className="work-mockup__image" src={mockup} alt="Mockup" />
          </picture>
        </div>
      </div>

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>Create an environment that increases the identification to a public with high net worth or sizable assets in a bank known to be popular, and offer this audience a unique and solid relationship model.</p>
        </div>
      </div>

      {/*
        Site Map
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <div className="work-sitemap hide-viewport--min">
          <div className="container">
            <h2>Structure of site</h2>
            <img src={siteMap} alt="Site Map" />
          </div>
        </div>
      }

      {/* Home Page Screens */}
      <div className="work-screen work-screen--home-page">
        <div className="container">
          <picture>
            <source srcSet={homePageMin} media="(max-width: 480px)" />
            <img className="work-screen__image" src={homePage} alt="Home Page" />
          </picture>
          <div className="work-screen__info">
            <h3 className="work-screen__title">Home Page</h3>
            <p className="work-screen__description">The home page displays an elegant slideshow which enables access to the featured page at the moment. The header bears the three pillars of the site and the button to access the private area.</p>
          </div>
        </div>
      </div>

      {/* Private Client Screens */}
      <div className="work-screen work-screen--private-client">
        <div className="container">
          <picture>
            <source srcSet={privateClientMin} media="(max-width: 480px)" />
            <img className="work-screen__image" src={privateClient} alt="Private Client" />
          </picture>
          <div className="work-screen__info">
            <h3 className="work-screen__title">Private Client</h3>
            <p className="work-screen__description">Page exposing the main advantages of being a customer in this segment, and the range of services offered, such as exclusive service and financial consulting.</p>
          </div>
        </div>
      </div>

      {/* Investiments Screens */}
      <div className="work-screen work-screen--investiments">
        <div className="container">
          <picture>
            <source srcSet={investimentsMin} media="(max-width: 480px)" />
            <img className="work-screen__image" src={investiments} alt="Investiments" />
          </picture>
          <div className="work-screen__info">
            <h3 className="work-screen__title">Investiments</h3>
            <p className="work-screen__description">This page lists the main forms of investment in a clear, differentiated, and straightforward way.</p>
          </div>
        </div>
      </div>

      {/* Financial Advisory Screens */}
      <div className="work-screen work-screen--financial">
        <div className="container">
          <picture>
            <source srcSet={financialAdvisoryMin} media="(max-width: 480px)" />
            <img className="work-screen__image" src={financialAdvisory} alt="Financial Advisory" />
          </picture>
          <div className="work-screen__info">
            <h3 className="work-screen__title">Financial Advisory</h3>
            <p className="work-screen__description">This page provides details on financial advisory, listing products such as credit cards, insurance and service charges.</p>
          </div>
        </div>
      </div>

      {/* About The Client Screens */}
      <div className="work-screen work-screen--about-the-client">
        <div className="container">
          <picture>
            <source srcSet={aboutTheClientMin} media="(max-width: 480px)" />
            <img className="work-screen__image" src={aboutTheClient} alt="About The Client" />
          </picture>
          <div className="work-screen__info">
            <h3 className="work-screen__title">About the Client</h3>
            <p className="work-screen__description">Page detailing the segment and the Bank itself, in a secure, solid and experienced way.</p>
          </div>
        </div>
      </div>

      {/* My Role */}
      <div className="my-role">
        <div className="container">
          <h2>My Role</h2>
          <p className="my-role__description">Fui responsável pela solução visual do site juntamente com o diretor de criação Adriel Nunes.</p>

          <h4 className="my-role__team">Team:</h4>
          <ul className="my-role__list">
            <li>Isobar Brasil</li>
            <li>Director Creative, Adriel Nunes</li>
            <li>UX, Rogério Pereira</li>
            <li>Designer, Rafael Lucas</li>
            <li>Project Manager, Mel Azevedo</li>
            <li>Account Manager, Priscilla Lira</li>
          </ul>
        </div>
      </div>

      {/*
        Guideline
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <div className="work-guideline hide-viewport--min">
          <div className="container">
            <img src={guideline} alt="Guideline" />
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

function BBPrivate() {
  return (
    <WorkPage
      section={Section()}
      name="bbp"
      position={3}
      theme="dark"
    />
  );
}

export default BBPrivate;
