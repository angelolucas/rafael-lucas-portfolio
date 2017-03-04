// Mova mais
import MMImage from '../../sections/mova-mais/media/thumb.png';
import MMDetail from '../../sections/mova-mais/media/thumb-overlay.png';
import MMVideo from '../../sections/mova-mais/media/video.mp4';
import MMPoster from '../../sections/mova-mais/media/video-poster.jpg';

// Caixa nas Ruas
import CNRImage from '../../sections/caixa-nas-ruas/media/thumb.png';
import CNRDetail from '../../sections/caixa-nas-ruas/media/thumb-overlay.png';
import CNRPoster from '../../sections/caixa-nas-ruas/media/poster.jpg';

// BB Private
import BBPImage from '../../sections/bb-private/media/thumb.png';
import BBPVideo from '../../sections/bb-private/media/video.mp4';
import BBPPoster from '../../sections/bb-private/media/video-poster.jpg';

// David Yurman
import DYImage from '../../sections/david-yurman/media/thumb.png';
import DYVideo from '../../sections/david-yurman/media/video.mp4';
import DYPoster from '../../sections/david-yurman/media/video-poster.jpg';

// Escinter
import ESTImage from '../../sections/escinter/media/thumb.png';
import ESTDetail from '../../sections/escinter/media/thumb-overlay.png';
import ESTVideo from '../../sections/escinter/media/video.mp4';
import ESTPoster from '../../sections/escinter/media/video-poster.jpg';

// Emicida
import MCDImage from '../../sections/emicida/media/thumb.png';
import MCDDetail from '../../sections/emicida/media/thumb-overlay.png';
import MCDVideo from '../../sections/emicida/media/video.mp4';
import MCDPoster from '../../sections/emicida/media/video-poster.jpg';

const GetWorks = {
  1: {
    name: 'mova-mais',
    shortName: 'mm',
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
    shortName: 'cnr',
    title: 'Caixa Nas Ruas',
    category: 'web desktop & mobile',
    link: '/caixa-nas-ruas',
    image: CNRImage,
    detail: CNRDetail,
    poster: CNRPoster,
  },
  3: {
    name: 'bb-private',
    shortName: 'bbp',
    title: 'BB Private',
    category: 'web desktop',
    link: '/bb-private',
    image: BBPImage,
    poster: BBPPoster,
    video: BBPVideo,
  },
  4: {
    name: 'david-yurman',
    shortName: 'dy',
    title: 'David Yurman',
    category: 'web mobile',
    link: '/david-yurman',
    image: DYImage,
    poster: DYPoster,
    video: DYVideo,
  },
  5: {
    name: 'escinter',
    shortName: 'ect',
    title: 'Escinter',
    category: 'web mobile',
    link: '/escinter',
    image: ESTImage,
    detail: ESTDetail,
    poster: ESTPoster,
    video: ESTVideo,
  },
  6: {
    name: 'emicida',
    shortName: 'mcd',
    title: 'Emicida',
    category: 'web mobile',
    link: '/emicida',
    image: MCDImage,
    detail: MCDDetail,
    poster: MCDPoster,
    video: MCDVideo,
  },
};

export default GetWorks;
