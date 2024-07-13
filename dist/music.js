const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    preload: 'metadata',
    audio: [
        {
            name: 'Without You (Explicit)',
            artist: 'Avicii/Sadro Cavazza',
            url: 'https://gitee.com/zzzzzyg/sources/raw/master/WithotYou(Explicit).mp3',
            cover: '//y.qq.com/music/photo_new/T002R300x300M000003KjODP2FwTHe_2.jpg?max_age=2592000',
        }
    ]
});