import React from 'react';

import WorkThubnail from '../work-thumbnail';

// Mova mais
import MMImage from '../../sections/mova-mais/media/thumb.png';
import MMDetail from '../../sections/mova-mais/media/thumb-overlay.png';

// Caixa nas Ruas
import CNRImage from '../../sections/caixa-nas-ruas/media/thumb.png';
import CNRDetail from '../../sections/caixa-nas-ruas/media/thumb-overlay.png';

// BB Private
import BBPImage from '../../sections/bb-private/media/thumb.png';

// David Yurman
import DYImage from '../../sections/david-yurman/media/thumb.png';

// Escinter
import ESTImage from '../../sections/escinter/media/thumb.png';
import ESTDetail from '../../sections/escinter/media/thumb-overlay.png';

// Emicida
import MCDImage from '../../sections/emicida/media/thumb.png';
import MCDDetail from '../../sections/emicida/media/thumb-overlay.png';

const works = {
  'mova-mais': {
    title: 'Mova Mais',
    category: 'app',
    link: '/mova-mais',
    image: MMImage,
    detail: MMDetail,
  },
  'caixa-nas-ruas': {
    title: 'Caixa Nas Ruas',
    category: 'web desktop & mobile',
    link: '/caixa-nas-ruas',
    image: CNRImage,
    detail: CNRDetail,
  },
  'bb-private': {
    title: 'BB Private',
    category: 'web desktop',
    link: '/bb-private',
    image: BBPImage,
  },
  'david-yurman': {
    title: 'David Yurman',
    category: 'web mobile',
    link: '/david-yurman',
    image: DYImage,
  },
  escinter: {
    title: 'Escinter',
    category: 'web mobile',
    link: '/escinter',
    image: ESTImage,
    detail: ESTDetail,
  },
  emicida: {
    title: 'Emicida',
    category: 'web mobile',
    link: '/emicida',
    image: MCDImage,
    detail: MCDDetail,
  },
};

function ListWorks() {
  return (
    <ul className="list-works">
      {
        Object.keys(works).map((work, key) => (
          <WorkThubnail
            key={key}
            title={works[work].title}
            category={works[work].category}
            link={works[work].link}
            image={works[work].image}
            detail={works[work].detail}
          />
        ))
      }
    </ul>
  );
}

export default ListWorks;
