import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.png';
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
import mockup2 from './media/mockup2.png';
import mockup2Min from './media/mockup2-min.jpg';

function Section() {
  return (
    <section className="bbp">

      {/*
        Work Head
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <WorkHead
          name="bbp"
          title="BB Private"
          category="web desktop"
          color="black"
          src={video}
          type="video"
        />
      }

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img src={logo} width="204" alt="Logo Banco do Brasil Private" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Don’t reckon with lucky. Reckon with BB Private.</h3>
          <p className="work-intro__description">Institutional site of private segment of the biggest bank of Latin America. It aims to meet the needs of financial counseling and resource management, with customized strategies from a transparent and exempted mode.</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="work-mockup">
        <div className="container container--full">
          <picture>
            <source srcSet={mockupMin} media="(max-width: 480px)" />
            <img src={mockup} alt="Mockup" />
          </picture>
        </div>
      </div>

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>Design an enjoyable and reliable ambience where the customer feels safe. Besides transmitting credibility to public and presenting the model of exclusive, solid and experient relationship.</p>
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
      <div className="work-screen">
        <div className="container">
          <picture>
            <source srcSet={homePageMin} media="(max-width: 480px)" />
            <img className="work-screen__image" src={homePage} alt="Home Page" />
          </picture>
          <div className="work-screen__info">
            <h3 className="work-screen__title">Home Page</h3>
            <p className="work-screen__description">Initial page show an elegant slideshow which gives access to page in highlight of moment. In the header has the three pillars of the site and a button to access a logged area.</p>
          </div>
        </div>
      </div>

      {/* Private Client Screens */}
      <div className="work-screen">
        <div className="container">
          <picture>
            <source srcSet={privateClientMin} media="(max-width: 480px)" />
            <img className="work-screen__image" src={privateClient} alt="Private Client" />
          </picture>
          <div className="work-screen__info">
            <h3 className="work-screen__title">Private Client</h3>
            <p className="work-screen__description">This page presents the main advantages of being client of the segment, and the range of services offered, such as exclusive attendance and financial consulting.</p>
          </div>
        </div>
      </div>

      {/* Investiments Screens */}
      <div className="work-screen">
        <div className="container">
          <picture>
            <source srcSet={investimentsMin} media="(max-width: 480px)" />
            <img className="work-screen__image" src={investiments} alt="Investiments" />
          </picture>
          <div className="work-screen__info">
            <h3 className="work-screen__title">Investiments</h3>
            <p className="work-screen__description">This page we have the principal modes of investments with a clear, diversified and direct way.</p>
          </div>
        </div>
      </div>

      {/* Financial Advisory Screens */}
      <div className="work-screen">
        <div className="container">
          <picture>
            <source srcSet={financialAdvisoryMin} media="(max-width: 480px)" />
            <img className="work-screen__image" src={financialAdvisory} alt="Financial Advisory" />
          </picture>
          <div className="work-screen__info">
            <h3 className="work-screen__title">Financial Advisory</h3>
            <p className="work-screen__description">This page details about the financial advisory, specifying products like cards, securities and fare of service.</p>
          </div>
        </div>
      </div>

      {/* About The Client Screens */}
      <div className="work-screen">
        <div className="container">
          <picture>
            <source srcSet={aboutTheClientMin} media="(max-width: 480px)" />
            <img className="work-screen__image" src={aboutTheClient} alt="About The Client" />
          </picture>
          <div className="work-screen__info">
            <h3 className="work-screen__title">About The Client</h3>
            <p className="work-screen__description">Page that details the segment and the own bank, with a security, solid and experient way.</p>
          </div>
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
