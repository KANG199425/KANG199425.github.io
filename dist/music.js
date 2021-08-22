const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
	lrcType: 3,
    audio: [
	  {
        name: "告白气球",
        artist: '周杰伦',
        url: 'https://www.ytmp3.cn/down/38584.mp3',
        cover: 'https://img2.kuwo.cn/star/albumcover/500/64/39/3540704654.jpg',
        lrc: '../lrc/gaobaiqiqiu.lrc'
      },
      {
        name: "贝加尔湖畔",
        artist: '李健',
        url: 'https://www.ytmp3.cn/down/44146.mp3',
        cover: 'https://img3.kuwo.cn/star/albumcover/500/75/53/956274601.jpg',
        lrc: '../lrc/beijiaerhupan.lrc'
      },
	  {
        name: "花海",
        artist: '周杰伦',
        url: 'https://www.ytmp3.cn/down/73979.mp3',
        cover: 'https://img2.kuwo.cn/star/albumcover/300/36/9/13515874.jpg',
        lrc: '../lrc/huahai.lrc'
      },
    ]
});