import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.svg';
import mockup from './media/mockup.jpg';
import siteMap from './media/site-map.png';
import homePage from './media/home-page.png';
import products from './media/products.png';
import productsDetail from './media/products-detail.png';
import contact from './media/contact.png';
import navigation from './media/navigation.png';
import devices from './media/devices.png';
import credits from './media/credits.png';
import guideline from './media/guideline.png';
import mockup2 from './media/mockup2.png';

function Section() {
  return (
    <section className="ect">

      {/* Hero Image */}
      <WorkHead
        title="Escinter"
        category="web mobile"
        color="white"
        src={video}
        type="video"
      />

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img src={logo} width="187" height="187" alt="Logo Escinter" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Escinter.<br /> Spaces That Engage.</h3>
          <p className="work-intro__description">A Escinter é uma empresa familiar com 25 anos de atuação no mercado de interiores de espaços corporativos. Ciente de que a qualidade do espaço de trabalho interfere diretamente na vida das pessoas, sua missão é garantir que seus clientes tenham melhor qualidade de vida e desempenho.</p>
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
          <p>Apresentar a empresa bem como  seu catálogo de produtos na versão móvel, permitindo a melhor experiência possível de forma clara e concisa.</p>
        </div>
      </div>

      {/* Step 01 */}
      <div className="work-step work-sitemap work-step--ect01">
        <div className="container">
          <h3 className="work-step__title">Site Map</h3>
          <img src={siteMap} alt="Site Map" />
        </div>
      </div>

      {/* Step 02 */}
      <div className="work-step work-step--ect02">
        <div className="container">
          <h3 className="work-step__title">Web Mobile</h3>
          <ul className="chess-list chess-list--align-top">
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Home Page</h4>
                <p>A página inicial primeiramente exibe um slideshow com as principais ofertas do momento, e abaixo as categorias dos produtos. Ao final é apresentado o endereço, campo para se inscrever na newsletter e acesso as redes sociais. </p>
              </div>
              <div>
                <img src={homePage} alt="Home Page" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Products</h4>
                <p>A página permite que o usuário veja vários modelos ao mesmo tempo, agilizando assim sua busca. É possível filtrar por categoria.</p>
              </div>
              <div>
                <img src={products} alt="Products" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Products Detail</h4>
                <p>Nessa página é possivel conhecer melhor a história e o designer da peça, ver fotos de diferentes ângulos e ter acesso a todos os dados, como dimensões e detalhes de fabricação.</p>
              </div>
              <div>
                <img src={productsDetail} alt="Products Destail" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Contact</h4>
                <p>O site disponibiliza um formulário simples para entrar em contato. E ainda acesso ao endereço das lojas físicas, por meio do mapa.</p>
              </div>
              <div>
                <img src={contact} alt="Contact" />
              </div>
            </li>
            <li>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Navigation</h4>
                <p>Menu simples que dá acesso a todas as páginas do site, além dos telefones de contato da filial e da sede.</p>
              </div>
              <div>
                <img src={navigation} alt="Navigation" />
              </div>
            </li>
          </ul>
        </div>
        <img className="work-step__full-image" src={devices} alt="" />
        <div className="work-credits">
          <div className="container">
            <h4 className="work-credits__title">Credits</h4>
            <p className="work-credits__description">Design versão desktop: <a href="https://www.linkedin.com/in/adrielnunes" target="_blank" rel="noopener noreferrer">Adriel Nunes</a></p>
            <img src={credits} alt="" />
          </div>
        </div>
      </div>

      {/* Step 03 */}
      <div className="work-step work-step--ect03 work-guideline">
        <div className="container">
          <h3 className="work-step__title">Guideline</h3>
          <img src={guideline} alt="Guideline" />
        </div>
      </div>

      {/* Mockup */}
      <div className="container container--full">
        <img src={mockup2} alt="" />
      </div>
    </section>
  );
}

function Escinter() {
  return <WorkPage section={Section()} position={5} />;
}

export default Escinter;
