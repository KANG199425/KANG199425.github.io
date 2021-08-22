const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    lrcType: 3,
    audio: [
      {
        name: "beautiful mistakes",
        artist: 'maroon 5',
        url: 'https://www.ytmp3.cn/down/74024.mp3',
        cover: 'https://img1.kuwo.cn/star/albumcover/300/40/73/2271750349.jpg',
        lrc: 'song-post/zaishuiyifang.lrc'
      },
	  {
        name: "lemon",
        artist: 'Tom',
        url: 'https://www.ytmp3.cn/down/73653.mp3',
        cover: 'https://star.kuwo.cn/star/starheads/300/72/69/1117895448.jpg',
        lrc: 'song-post/zaishuiyifang.lrc'
      },
	  {
        name: "huahai",
        artist: 'JAY ZHOU',
        url: 'https://www.ytmp3.cn/down/73979.mp3',
        cover: 'https://img2.kuwo.cn/star/albumcover/300/36/9/13515874.jpg',
        lrc: '../lrc/huahai11.lrc'
      },
    ]
});