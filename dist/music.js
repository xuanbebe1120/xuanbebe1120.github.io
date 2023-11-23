const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "Wine",
        artist: 'Lukrembo',
        url: '/images/myMusic.mp3',
        cover: '/images/apple-touch-icon-next.png'
      }
      
    ]
});

