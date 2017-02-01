import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.png';
import mockup from './media/mockup.png';
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
import mockup2 from './media/mockup2.png';

function Section() {
  return (
    <section className="dy">

      {/* Hero Image */}
      <WorkHead
        title="David Yurman"
        category="web mobile"
        color="black"
        src={video}
        type="video"
      />

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
        <img src={mockup} alt="" />
      </div>

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>Projetar uma experiência móvel para um comércio eletrônico de jóias de luxo, permitindo que a exposição e compra dos produtos sejam efetuadas de maneira amigável, intuitiva e elegante.</p>
        </div>
      </div>

      {/* Pages */}
      <div className="container">
        <ul className="chess-list chess-list--align-top">
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Home Page</h4>
              <p>Slideshow com as principais ofertas. Acesso ao menu de navegação e quantidade de produtos na bolsa no header.</p>
            </div>
            <div>
              <img src={homePage} alt="Home Page" />
            </div>
          </li>
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Navigation</h4>
              <p>Menu simples, com componentes cumprimidos. É possível efetuar uma busca e acessar as demais áreas do site através dele.</p>
            </div>
            <div>
              <img src={navigation} alt="Navigation" />
            </div>
          </li>
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Explore</h4>
              <p>É possível visualizar vários produtos ao mesmo tempo, além de filtrar pro preço, tamanho, cor e categoria.</p>
            </div>
            <div>
              <img src={explore} alt="Explore" />
            </div>
          </li>
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Procuct Detail</h4>
              <p>Na página do produto é exposta imagens bem destacadas, onde é possível visualizar todos os detalhes da peça. Também é exibido as cores disponívels, dimenções, preços e vários outros detalhes.</p>
            </div>
            <div>
              <img src={productDetail} alt="Procuct Detail" />
            </div>
          </li>
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Search</h4>
              <p>Busca por produtos com filtros, permitindo uma pesquisa rápida e efeciente.</p>
            </div>
            <div>
              <img src={search} alt="Search" />
            </div>
          </li>
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Shopping Bag</h4>
              <p>Detalhes de todos os produtos adicionados na bolsa. Com navegação intuitiva o usuário consegue facilmente remover itens ou finalizar comprar.</p>
            </div>
            <div>
              <img src={shoppingBag} alt="Shopping Bag" />
            </div>
          </li>
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Checkout</h4>
              <p>Último passo para compra, página onde o usuário preenche dados pessoais e de pagamento para conclusão da compra.</p>
            </div>
            <div>
              <img src={checkout} alt="Checkout" />
            </div>
          </li>
          <li>
            <div className="chess-list__info">
              <h4 className="chess-list__title">Find A Store</h4>
              <p>Forma fácil de encontrar uma loja próxima, identificando a localização ou inserindo o código postal.</p>
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
          <p className="credits__info">Tive como insumo o layout para desktop desenhado pelo então designer da David Yurman, <a href="http://w.sunghean.com/" target="_blank" rel="noopener noreferrer">Sung Hean</a> e pelo designer <a href="http://alexlins.com/portfolio/design/" target="_blank" rel="noopener noreferrer">Alex Lins</a>. Minha função no projeto foi desenhar o site para dispositivos móveis juntamente com o designer <a href="https://www.linkedin.com/in/adrielnunes" target="_blank" rel="noopener noreferrer">Adriel Nunes</a>.</p>
        </div>
      </div>

      <div className="container container--full">
        <img src={credits} alt="" />
      </div>

      {/* Guideline */}
      <div className="guideline">
        <div className="container">
          <h3 className="guideline__title">Style Guide</h3>
          <img className="guideline__image" src={guideline} alt="Guideline" />
        </div>
      </div>

      {/* Mockup */}
      <div className="container container--full">
        <img src={mockup2} alt="" />
      </div>

    </section>
  );
}

function DavidYurman() {
  return <WorkPage section={Section()} position={4} theme="work-page--dark" />;
}

export default DavidYurman;
