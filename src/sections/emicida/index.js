import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.png';
import mockup from './media/mockup.png';
import mockupMin from './media/mockup-min.png';
import siteMap from './media/site-map.png';
import siteMapMin from './media/site-map-min.png';
import homePage from './media/home-page.png';
import editorial from './media/editorial.png';
import biography from './media/biography.png';
import agenda from './media/agenda.png';
import discography from './media/discography.png';
import photosGallery from './media/photos-gallery.png';
import contact from './media/contact.png';
import navigation from './media/navigation.png';
import pallete from './media/pallete.png';
import types from './media/types.png';
import patterns from './media/patterns.png';
import credits from './media/credits.png';
import creditsMin from './media/credits-min.png';
import mockup2 from './media/mockup2.jpg';
import mockup2Min from './media/mockup2-min.jpg';

function Section() {
  return (
    <section className="mcd">

      {/*
        Work Head
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <WorkHead
          name="mcd"
          title="Emicida"
          category="web mobile"
          color="black"
          src={video}
          type="video"
        />
      }

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img src={logo} width="180" alt="David Yurman" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">E.M.I.C.I.D.A<br /> &quot;While my imagination compose insanities I dominate the art&quot;</h3>
          <p className="work-intro__description">Institutional site of the Brazilian rapper and musical producer Emicida. Considered one of the bigger revelations of hip hop of Brazil. Famous for his constant victories in improvisation battles.</p>
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

      <div className="mcd-patter mcd-patter--1" />

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>Make the mobile site experience complete and user-friendly, allowing the user to meet the artist, his work, trajectory and have access to his agenda agenda in an accessible and intuitive mode.</p>
        </div>
      </div>

      {/* Site map */}
      <div className="work-sitemap">
        <div className="container">
          <h2>Site Map</h2>
          <picture>
            <source srcSet={siteMapMin} media="(max-width: 480px)" />
            <img src={siteMap} alt="Site Map" />
          </picture>
        </div>
      </div>

      <div className="mcd-patter mcd-patter--2" />

      {/* Pages */}
      <div className="work-pages">
        <div className="container">
          <ul className="chess-list chess-list--align-top">
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Home Page</h4>
                <p>Slideshow of beginning with main highlights of the site. Then boxes representing each area of the site. Below are the social networks of MC.</p>
              </div>
              <div>
                <img src={homePage} alt="Home Page" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Editorial</h4>
                <p>Content’s area, where the artist can present his objections, philosophies and ideals of life in a deeper way.</p>
              </div>
              <div>
                <img src={editorial} alt="Editorial" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Biography</h4>
                <p>In this page is possible meet better his life trajectory, beginning of career and his influences. Here you will also see your work team.</p>
              </div>
              <div>
                <img src={biography} alt="Biography" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Agenda</h4>
                <p>Exhibition of all the commitments and shows of the rapper. It’s possible filter by month.</p>
              </div>
              <div>
                <img src={agenda} alt="Agenda" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Discography</h4>
                <p>In this page it’s possible to know all his work, to have access to the songs of the albums and to access the platforms of buy and streaming.</p>
              </div>
              <div>
                <img src={discography} alt="Discography" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Photos Gallery</h4>
                <p>Gallery of photos and videos, clips, and even personal files.</p>
              </div>
              <div>
                <img src={photosGallery} alt="Gallery" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Contact</h4>
                <p>E-mails for contact, press office and link of the record company.</p>
              </div>
              <div>
                <img src={contact} alt="Contact" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Navigation</h4>
                <p>Simple and elegant menu that gives access to all pages of the site.</p>
              </div>
              <div>
                <img src={navigation} alt="Navigation" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mcd-patter mcd-patter--3" />

      {/* Credits */}
      <div className="work-credits">
        <div className="container container--full">
          <picture>
            <source srcSet={creditsMin} media="(max-width: 480px)" />
            <img className="work-credits__image" src={credits} alt="Credits" />
          </picture>
        </div>
        <div className="container">
          <h3 className="work-credits__title">Credits</h3>
          <p className="work-credits__description">I had like input the version desktop produced by the designer <a href="https://www.linkedin.com/in/adrielnunes" target="_blank" rel="noopener noreferrer">Adriel Nunes</a>, who also signs the art direction of some clips and the last album cover.</p>
        </div>
      </div>

      {/*
        Guideline
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <div className="work-guideline hide-viewport--min">
          <div className="container">
            <h2>Color Pallete</h2>
            <img src={pallete} alt="" />
            <h2>Typefaces</h2>
            <img src={types} alt="" />
            <h2>Patterns</h2>
            <img src={patterns} alt="" />
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

function Emicida() {
  return (
    <WorkPage
      section={Section()}
      name="mcd"
      position={6}
      theme="dark"
    />
  );
}

export default Emicida;
