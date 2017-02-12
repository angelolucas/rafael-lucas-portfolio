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

const GetWorks = {
  1: {
    name: 'mova-mais',
    title: 'Mova Mais',
    category: 'app',
    link: '/mova-mais',
    image: MMImage,
    detail: MMDetail,
  },
  2: {
    name: 'caixa-nas-ruas',
    title: 'Caixa Nas Ruas',
    category: 'web desktop & mobile',
    link: '/caixa-nas-ruas',
    image: CNRImage,
    detail: CNRDetail,
  },
  3: {
    name: 'bb-private',
    title: 'BB Private',
    category: 'web desktop',
    link: '/bb-private',
    image: BBPImage,
  },
  4: {
    name: 'david-yurman',
    title: 'David Yurman',
    category: 'web mobile',
    link: '/david-yurman',
    image: DYImage,
  },
  5: {
    name: 'escinter',
    title: 'Escinter',
    category: 'web mobile',
    link: '/escinter',
    image: ESTImage,
    detail: ESTDetail,
  },
  6: {
    name: 'emicida',
    title: 'Emicida',
    category: 'web mobile',
    link: '/emicida',
    image: MCDImage,
    detail: MCDDetail,
  },
};

export default GetWorks;
