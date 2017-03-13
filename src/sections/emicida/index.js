import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import logo from './media/logo.svg';
import mockup from './media/mockup.png';
import mockupMin from './media/mockup-min.png';
import homePage from './media/home-page.png';
import editorial from './media/editorial.png';
import biography from './media/biography.png';
import agenda from './media/agenda.png';
import discography from './media/discography.png';
import photosGallery from './media/photos-gallery.png';
import contact from './media/contact.png';
import navigation from './media/navigation.png';
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
        <WorkHead id={6} />
      }

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img className="work-intro__logo" src={logo} width="180" alt="David Yurman" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">E.M.I.C.I.D.A<br /> &quot;While my imagination composes insanities I master artistry&quot;</h3>
          <p className="work-intro__description">Corporate site of  Brazilian rapper and music producer Emicida. Considered one of the greatest hip hop revelations of Brazil. Famous for his constant victories at  improvisation battles.</p>
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

      <div className="mcd-patter mcd-patter--1" />

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>Introduce the artist, his work, life story, and ideals, allowing the user to have a seamless experience on the site.</p>
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
                <p>Starting slideshow with the site highlights. Followed by boxes representing each area of the site. Then the rapper’s social networks.</p>
              </div>
              <div>
                <img src={homePage} alt="Home Page" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Editorial</h4>
                <p>Content area, where the artist can present his objections, philosophies and ideals of life more deeply.</p>
              </div>
              <div>
                <img src={editorial} alt="Editorial" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Biography</h4>
                <p>You can see some more of his life story, early career and influences on this page. His work team is also displayed here.</p>
              </div>
              <div>
                <img src={biography} alt="Biography" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Agenda</h4>
                <p>EExhibition of all appointments and concerts of the rapper. You can filter by month.</p>
              </div>
              <div>
                <img src={agenda} alt="Agenda" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Discography</h4>
                <p>You can see all of his work, access songs from the albums and access purchase and streaming platforms on this page.</p>
              </div>
              <div>
                <img src={discography} alt="Discography" />
              </div>
            </li>
            <li>
              <div className="chess-list__info chess-list__info--sticky">
                <h4 className="chess-list__title">Photos Gallery</h4>
                <p>Photos and videos gallery of concerts, music videos, and even personal files.</p>
              </div>
              <div>
                <img src={photosGallery} alt="Gallery" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Contact</h4>
                <p>Contact emails, press relations and link for the label.</p>
              </div>
              <div>
                <img src={contact} alt="Contact" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Navigation</h4>
                <p>Plain, elegant menu that gives access to all pages on the site.</p>
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
          <h3 className="work-credits__title">My Role</h3>
          <p className="work-credits__description">I was responsible for the visual and interactive solution of the mobile devices. Direction design and version desktop were made by <a href="https://www.linkedin.com/in/adrielnunes" target="_blank" rel="noopener noreferrer">Adriel Nunes</a>,  who also signs the art direction of a few music videos and the last album cover.</p>
        </div>
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
