import React from 'react';
import { Link } from 'react-router';

// Mova mais
import mmImage from '../../sections/mova-mais/media/thumb.png';
import mmDetail from '../../sections/mova-mais/media/thumb-overlay.png';

// Caixa nas Ruas
import cnrImage from '../../sections/caixa-nas-ruas/media/thumb.png';
import cnrDetail from '../../sections/caixa-nas-ruas/media/thumb-overlay.png';

// BB Privete
import bbpImage from '../../sections/bb-privete/media/thumb.png';

// David Yurman
import dyImage from '../../sections/david-yurman/media/thumb.png';

// Encinter
import ectImage from '../../sections/encinter/media/thumb.png';
import ectDetail from '../../sections/encinter/media/thumb-overlay.png';

// Emicida
import mcdImage from '../../sections/emicida/media/thumb.png';
import mcdDetail from '../../sections/emicida/media/thumb-overlay.png';

const works = {
  1: {
    title: 'Mova Mais',
    category: 'app',
    link: '/mova-mais',
    image: mmImage,
    detail: mmDetail,
  },
  2: {
    title: 'Caixa Nas Ruas',
    category: 'web desktop & mobile',
    link: '/mova-mais',
    image: cnrImage,
    detail: cnrDetail,
  },
  3: {
    title: 'BB Private',
    category: 'web desktop',
    link: '/bb-privete',
    image: bbpImage,
  },
  4: {
    title: 'David Yurman',
    category: 'web mobile',
    link: '/david-yurman',
    image: dyImage,
  },
  5: {
    title: 'Encinter',
    category: 'web mobile',
    link: '/encinter',
    image: ectImage,
    detail: ectDetail,
  },
  6: {
    title: 'Emicida',
    category: 'web mobile',
    link: '/emicida',
    image: mcdImage,
    detail: mcdDetail,
  },
};

function ListWorks() {
  return (
    <ul className="list-works">
      {
        Object.keys(works).map((work, key) => (
          <li className="work-thumbnail" key={key}>
            <div className="work-thumbnail__window">
              <img
                className="work-thumbnail__image"
                src={works[work].image}
                alt="thumbnail"
              />
              { works[work].detail &&
              <img
                className="work-thumbnail__detail"
                src={works[work].detail}
                alt=""
              />
              }
            </div>
            <h3 className="work-thumbnail__title">{works[work].title}</h3>
            <p className="work-thumbnail__category">{works[work].category}</p>
            <Link className="work-thumbnail__link" to={works[work].link}>Mais informações</Link>
          </li>
        ))
      }
    </ul>
  );
}

export default ListWorks;
