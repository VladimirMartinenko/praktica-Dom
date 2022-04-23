const CARD_CONSTANTS = {
  userName: 'Unknown',
  cardDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur, ligula nec molestie viverra, lectus lacus scelerisque justo, ac placerat sem est id sapien. Aliquam erat volutpat. Nunc quis dolor neque. Phasellus sed purus vitae metus sagittis commodo eget sit amet urna. Aliquam erat volutpat. Pellentesque a mauris orci. Morbi dictum urna vel elit euismod, eu pellentesque erat venenatis. Praesent aliquet diam libero, eget egestas enim sagittis vitae',
};

const SUPPORTED_SOCIAL_NETWORKS = new Map([
  [
    'twitter.com',
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png',
      alt: 'twitter link for',
    },
  ],
  [
    "www.facebook.com",
        {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/1200px-Facebook_F_icon.svg.png',
      alt: 'facebook link for',
    },
  ],
  [
    "www.instagram.com",
    {
      src: 'https://img1.freepng.ru/20180730/vgo/kisspng-logo-clip-art-icone-instagram-facebook-5b5ed348052465.2794363915329411280211.jpg',
      alt: 'instagram link for',
    },
  ],
  // ['www.facebook.com', ['fa-brands', 'fa-facebook']],
]);
