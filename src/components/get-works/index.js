// Mova mais
import MMImage from '../../sections/mova-mais/media/thumb.png';
import MMDetail from '../../sections/mova-mais/media/thumb-overlay.png';
import MMVideo from '../../sections/mova-mais/media/video.mp4';
import MMPoster from '../../sections/mova-mais/media/video-poster.jpg';

// Caixa nas Ruas
import CNRImage from '../../sections/caixa-nas-ruas/media/thumb.png';
import CNRDetail from '../../sections/caixa-nas-ruas/media/thumb-overlay.png';
import CNRPoster from '../../sections/caixa-nas-ruas/media/work-head.jpg';

// BB Private
import BBPImage from '../../sections/bb-private/media/thumb.png';
import BBPVideo from '../../sections/bb-private/media/video.mp4';

// David Yurman
import DYImage from '../../sections/david-yurman/media/thumb.png';
import DYVideo from '../../sections/david-yurman/media/video.mp4';

// Escinter
import ESTImage from '../../sections/escinter/media/thumb.png';
import ESTDetail from '../../sections/escinter/media/thumb-overlay.png';
import ESTVideo from '../../sections/escinter/media/video.mp4';

// Emicida
import MCDImage from '../../sections/emicida/media/thumb.png';
import MCDDetail from '../../sections/emicida/media/thumb-overlay.png';
import MCDVideo from '../../sections/emicida/media/video.mp4';

const GetWorks = {
  1: {
    name: 'mova-mais',
    title: 'Mova Mais',
    category: 'app',
    link: '/mova-mais',
    image: MMImage,
    detail: MMDetail,
    poster: MMPoster,
    video: MMVideo,
  },
  2: {
    name: 'caixa-nas-ruas',
    title: 'Caixa Nas Ruas',
    category: 'web desktop & mobile',
    link: '/caixa-nas-ruas',
    image: CNRImage,
    detail: CNRDetail,
    poster: CNRPoster,
  },
  3: {
    name: 'bb-private',
    title: 'BB Private',
    category: 'web desktop',
    link: '/bb-private',
    image: BBPImage,
    video: BBPVideo,
  },
  4: {
    name: 'david-yurman',
    title: 'David Yurman',
    category: 'web mobile',
    link: '/david-yurman',
    image: DYImage,
    video: DYVideo,
  },
  5: {
    name: 'escinter',
    title: 'Escinter',
    category: 'web mobile',
    link: '/escinter',
    image: ESTImage,
    detail: ESTDetail,
    video: ESTVideo,
  },
  6: {
    name: 'emicida',
    title: 'Emicida',
    category: 'web mobile',
    link: '/emicida',
    image: MCDImage,
    detail: MCDDetail,
    video: MCDVideo,
  },
};

export default GetWorks;
