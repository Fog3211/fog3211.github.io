/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "50a76b696c5454ade8ae70c71eed1aab"
  },
  {
    "url": "assets/css/0.styles.cdd2a29b.css",
    "revision": "fc6b3d8e7438a11d8b438dd3400ff9eb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8a9c4f08.js",
    "revision": "00efaf41dd89b4603c9e9b12784b3a81"
  },
  {
    "url": "assets/js/11.8783f7cc.js",
    "revision": "46757986f35dc17a8faf5b1b6a4a75ca"
  },
  {
    "url": "assets/js/12.5ba97642.js",
    "revision": "f1ffdd5481d834b0106758272909149c"
  },
  {
    "url": "assets/js/13.1555b7ad.js",
    "revision": "8759c3c94be2e790353574a84aa0f268"
  },
  {
    "url": "assets/js/14.86f2088d.js",
    "revision": "0fe502732c916db6bb683f26dccb86f6"
  },
  {
    "url": "assets/js/15.fe266707.js",
    "revision": "a0452800765c364256914d82e087c472"
  },
  {
    "url": "assets/js/16.15fb79aa.js",
    "revision": "dd575a773bb5b82faa52d61926ee8b8a"
  },
  {
    "url": "assets/js/17.1a463419.js",
    "revision": "ab69df74913a22ce7a20948224e32526"
  },
  {
    "url": "assets/js/18.7c246c5a.js",
    "revision": "ac571f10407c5dc2696ef808e4ecfc12"
  },
  {
    "url": "assets/js/19.61ef187a.js",
    "revision": "72cc9f5281144e2052587f9cf5b831dc"
  },
  {
    "url": "assets/js/2.81a45b37.js",
    "revision": "618c8b628aa1577306bb3cec07fb33d5"
  },
  {
    "url": "assets/js/20.7a9b2f72.js",
    "revision": "cca9d35f03d5c226b711e8a0b4b8ca55"
  },
  {
    "url": "assets/js/21.b4f5ca00.js",
    "revision": "5a4670642fd981b71a85c58bf4bbd895"
  },
  {
    "url": "assets/js/22.3f4573be.js",
    "revision": "b00e068f7f7ba073c14748526e7cb900"
  },
  {
    "url": "assets/js/23.e2af9378.js",
    "revision": "a76d476129f4a69592dff955f8545a4a"
  },
  {
    "url": "assets/js/24.785952aa.js",
    "revision": "c986d039ecb1d7725aea5cbccbccbf42"
  },
  {
    "url": "assets/js/25.7ae5ad53.js",
    "revision": "e3331d40c5537f315fa7b6616d77bff7"
  },
  {
    "url": "assets/js/26.36e42edb.js",
    "revision": "96625e126d82ba9c36b8fe398149039a"
  },
  {
    "url": "assets/js/27.3409191d.js",
    "revision": "7c8b796af4161ef74ba9cd4dc4a93b4e"
  },
  {
    "url": "assets/js/28.393153e4.js",
    "revision": "1bd4f3066153ea55723c147efdd2cdcc"
  },
  {
    "url": "assets/js/29.dfc25383.js",
    "revision": "c00c68f4035857e1b05039de17ebdfb0"
  },
  {
    "url": "assets/js/3.c6d0cc46.js",
    "revision": "03a984ee50e58ac33da3656c5a773de0"
  },
  {
    "url": "assets/js/30.71df5033.js",
    "revision": "0bdbe5a17bf99ddba26c62fae8351da1"
  },
  {
    "url": "assets/js/31.df5404b7.js",
    "revision": "f9c9b842bd0bc622e4272e6e1f617bf4"
  },
  {
    "url": "assets/js/32.f1e5ef7c.js",
    "revision": "c0f1121c4bcf01784f915ccc6a985bdd"
  },
  {
    "url": "assets/js/33.3a7e0b72.js",
    "revision": "f61468d84b7b0cdbf1c7aafac2cd4bdf"
  },
  {
    "url": "assets/js/34.bad16bb7.js",
    "revision": "c6cd31825885cf04baa77883ed460516"
  },
  {
    "url": "assets/js/35.70e4cf71.js",
    "revision": "1101b706d57552ddbc331f632611a3af"
  },
  {
    "url": "assets/js/36.121c4657.js",
    "revision": "25c541a4a331c6fd579f6e66805d475d"
  },
  {
    "url": "assets/js/37.bf6ac364.js",
    "revision": "7aac105bb761a50d33428971365d660c"
  },
  {
    "url": "assets/js/38.fc37e97c.js",
    "revision": "ad42a0c1548d7df66f70a359a03815f9"
  },
  {
    "url": "assets/js/39.d04e3ead.js",
    "revision": "638a788271d89aede66175964aa99499"
  },
  {
    "url": "assets/js/4.bc59a004.js",
    "revision": "7dca2764c0dbba00413bdc550664a9c2"
  },
  {
    "url": "assets/js/40.6a269460.js",
    "revision": "af7b494d1ceb399f570dbe0ad1c7d94b"
  },
  {
    "url": "assets/js/41.2ac7fb97.js",
    "revision": "113a24eb5816357ec80559aa60c8a69b"
  },
  {
    "url": "assets/js/42.73ab3bd7.js",
    "revision": "8019306506415dcceb98e1f48112e32c"
  },
  {
    "url": "assets/js/43.f9273bf5.js",
    "revision": "e8f013220d75c230c3c6127f3f83a2f2"
  },
  {
    "url": "assets/js/44.0ea4214a.js",
    "revision": "7e743c92a97e9e0c80b50fe5c5965d05"
  },
  {
    "url": "assets/js/45.eb95c47a.js",
    "revision": "5a548c2be4be374bfdc740e52d6bba61"
  },
  {
    "url": "assets/js/46.e5a1623a.js",
    "revision": "579478b58b3c026aae551e4c397a18bf"
  },
  {
    "url": "assets/js/47.3ae1611c.js",
    "revision": "70989a62b0c8c791814885692636186c"
  },
  {
    "url": "assets/js/48.da7834c4.js",
    "revision": "87ffa264021b8a3b61fbd1d710c7584b"
  },
  {
    "url": "assets/js/49.cf1add44.js",
    "revision": "e33b8826ac3dac1fb441cbda270573f0"
  },
  {
    "url": "assets/js/5.1cecc36c.js",
    "revision": "a5227646c0f56ddd042b9941bea6cfbb"
  },
  {
    "url": "assets/js/50.7d5dfb82.js",
    "revision": "f956a5de5908d22746f3c2ce47f06857"
  },
  {
    "url": "assets/js/51.16da791b.js",
    "revision": "3f9fd7dd91e25daabac8dae92af71008"
  },
  {
    "url": "assets/js/52.23ddb970.js",
    "revision": "ce96d0f7709c15a15c037bf688bf1b1b"
  },
  {
    "url": "assets/js/53.2de2eea4.js",
    "revision": "c5de715fd40ca1d8338b275130c0afb8"
  },
  {
    "url": "assets/js/54.c02fc9ea.js",
    "revision": "ac4fa8c63cab998665e2151d24cebc3d"
  },
  {
    "url": "assets/js/55.b391fb5b.js",
    "revision": "33558ed052f8e976609c0b2109338b67"
  },
  {
    "url": "assets/js/56.0c72f5c7.js",
    "revision": "4cd360551c85be0c5dcb33ae0882d931"
  },
  {
    "url": "assets/js/57.22a17b28.js",
    "revision": "c5cee7ce2fe98405834581679c19aaf4"
  },
  {
    "url": "assets/js/58.533c918b.js",
    "revision": "46eadb2f857a41634d2d550dfb89e6df"
  },
  {
    "url": "assets/js/59.96ac7904.js",
    "revision": "45a9946bf32f54b732cfd5a2a331fbe5"
  },
  {
    "url": "assets/js/6.7fdb8414.js",
    "revision": "85487fb23e00b037098b37d9f6fa274e"
  },
  {
    "url": "assets/js/60.4e089b8c.js",
    "revision": "594ca5ea8080b8cf526507b5b4c469e9"
  },
  {
    "url": "assets/js/61.7b17150b.js",
    "revision": "1f4a17b119f70db53a755e672dde6760"
  },
  {
    "url": "assets/js/62.937e58de.js",
    "revision": "4c5ab6a36097795a424ff87563c6aa29"
  },
  {
    "url": "assets/js/63.cb70c672.js",
    "revision": "9c1987d26c65893a95de1b93d935e901"
  },
  {
    "url": "assets/js/7.f5fab6ae.js",
    "revision": "ca77ad8478298b31e319f0412b35c8e0"
  },
  {
    "url": "assets/js/8.770acd1e.js",
    "revision": "6ed1d1909e73cfcee38344764ad643e6"
  },
  {
    "url": "assets/js/9.93643764.js",
    "revision": "a1d574d0b0a1de042df8b0c2dc610d8e"
  },
  {
    "url": "assets/js/app.20bb5225.js",
    "revision": "98e7f7ac60cbc21649eb6e6135ea00fc"
  },
  {
    "url": "blog/blocked-code.html",
    "revision": "602fcd2b7440c218d22718ade3e5022a"
  },
  {
    "url": "blog/chrome-debug.html",
    "revision": "aaa1dacca3cbb90eeb4ca29f50a9f76b"
  },
  {
    "url": "blog/css-clip-path.html",
    "revision": "fcdd1f14ca649e0ef1965acfebb9f654"
  },
  {
    "url": "blog/css-irregular-pic.html",
    "revision": "9e8900305fcf695f38ec1715a7497286"
  },
  {
    "url": "blog/css-layout-3.html",
    "revision": "f64c2bc83b09de4339a7e87fe152fe82"
  },
  {
    "url": "blog/css-preprocessor.html",
    "revision": "296b828c7ae8fb6af156f122f046d48b"
  },
  {
    "url": "blog/css-text-color.html",
    "revision": "54b48ae9741760dcb615158b6693ef4f"
  },
  {
    "url": "blog/css-waterfall-flow-layout.html",
    "revision": "692b6844415e165fea9d716afd3038aa"
  },
  {
    "url": "blog/cut-character.html",
    "revision": "6db9766a1582baeda377068f9841a994"
  },
  {
    "url": "blog/format-pic.html",
    "revision": "0b6873639ba96e294560d0cfa0202426"
  },
  {
    "url": "blog/git-ssh.html",
    "revision": "4eb21262ef58a69d8aae2857ea4b12bd"
  },
  {
    "url": "blog/github-custom-domain.html",
    "revision": "ef156a34607a5ac22ec74458e557be8e"
  },
  {
    "url": "blog/hash-history-router.html",
    "revision": "0ecadc39498213799ac1f55e3147b174"
  },
  {
    "url": "blog/html5-dataset.html",
    "revision": "6e3521ce2f1ee953afe033a0385ec895"
  },
  {
    "url": "blog/html5-drag.html",
    "revision": "d78d5a6b0a61e41da56a9266a586ab4a"
  },
  {
    "url": "blog/impressjs.html",
    "revision": "6f07914bb326b9fb41e1b817de5e815d"
  },
  {
    "url": "blog/js-asyn-mechanism.html",
    "revision": "4029eb8ac3da58087fd9e78968ff239d"
  },
  {
    "url": "blog/js-event.html",
    "revision": "fc0024469677452c88772d75275fa28b"
  },
  {
    "url": "blog/js-mouse-events.html",
    "revision": "f30d02cb8e74fd1f781e0817978714c1"
  },
  {
    "url": "blog/js-scope.html",
    "revision": "279d5f2c4317c523ed9cf97512db90b4"
  },
  {
    "url": "blog/js-symbol.html",
    "revision": "7e757040a18ead5ccbaaccc62727a076"
  },
  {
    "url": "blog/js-this.html",
    "revision": "f0ade18fc8f7862b12f636582af63409"
  },
  {
    "url": "blog/js-throttle-debounce.html",
    "revision": "38703cf8ef8591192872e7b7b7e2e4c7"
  },
  {
    "url": "blog/js-timer.html",
    "revision": "29b99f958bd707037bb2d38ac222e7f4"
  },
  {
    "url": "blog/js-traversal-arr.html",
    "revision": "fb68ef3ad9ec0e59bb9c8b2a2447e28c"
  },
  {
    "url": "blog/keep-vuex.html",
    "revision": "a72a6e742839ebf97e9df4ba185d9203"
  },
  {
    "url": "blog/learn-dat-gui.html",
    "revision": "d13870c2ad36dc5550a224f03afd2dba"
  },
  {
    "url": "blog/learn-lottie.html",
    "revision": "2e2e2fdd95ce7cde56f9dfeac0da2edc"
  },
  {
    "url": "blog/learn-nvm.html",
    "revision": "a45b74905adcfc67f7753397c7d01284"
  },
  {
    "url": "blog/learn-sortablejs.html",
    "revision": "95fe12931eea40ad902b3adabf217877"
  },
  {
    "url": "blog/learn-vuex.html",
    "revision": "d4e3167e27ceca6cb15edfce14e21015"
  },
  {
    "url": "blog/mobile-long-press.html",
    "revision": "b51bfb3c6ff1e7b45f592c7ec622c520"
  },
  {
    "url": "blog/mpvue-mini-apps.html",
    "revision": "bcf00d138b83d40c5d4898d3d700bb80"
  },
  {
    "url": "blog/nginx-deploy-projects.html",
    "revision": "5064fe1d3a027d459aa8630f5732db78"
  },
  {
    "url": "blog/nginx-wss.html",
    "revision": "24dd2f596f80adefc34598038be039a9"
  },
  {
    "url": "blog/performance-optimization.html",
    "revision": "451a7c54edfadb3ece95a7e9c74cb7f7"
  },
  {
    "url": "blog/pic-lazy-load.html",
    "revision": "d69cd2b00c47e5fd26d29181ac7f5dbc"
  },
  {
    "url": "blog/react-deadcycle-rendering.html",
    "revision": "03355abdf2a8357d4cd4e4018ee74a14"
  },
  {
    "url": "blog/react-project-build.html",
    "revision": "5d9a80c771876b14f19700855fed1f64"
  },
  {
    "url": "blog/react-symbol-iconfont.html",
    "revision": "d55ebcd17984108f8307016eb2e615f4"
  },
  {
    "url": "blog/shallow-copy&deep-copy.html",
    "revision": "5230a056f42da8998473cbc4845b20c0"
  },
  {
    "url": "blog/similar-words.html",
    "revision": "f3335ef7ddaaa0ad89d02286db0cf7ba"
  },
  {
    "url": "blog/skills-cross-domain.html",
    "revision": "407288884af9bca26828408f0a22a642"
  },
  {
    "url": "blog/skills-cutpic.html",
    "revision": "0a2bbe54b37d46fc79cf273c221ee67f"
  },
  {
    "url": "blog/summarize-2018.html",
    "revision": "634b73ea3f11128df81b1bee24ebd044"
  },
  {
    "url": "blog/svg-animation.html",
    "revision": "7adc7d6e9c7bd111c6621426ad323a34"
  },
  {
    "url": "blog/uni-miniapp.html",
    "revision": "81d5f234eaba5042944d8d23ae59ce95"
  },
  {
    "url": "blog/upload-img.html",
    "revision": "560aa4b251d703f4500af6ce40af434e"
  },
  {
    "url": "blog/use-amap.html",
    "revision": "5288a8913255d0dd206db26949677e8f"
  },
  {
    "url": "blog/use-nrm.html",
    "revision": "69ee04bd735aaf7e6fc6189db7dd98bb"
  },
  {
    "url": "blog/v-if&v-show.html",
    "revision": "292e1cdde358a9f9bb49b8b8294d38e1"
  },
  {
    "url": "blog/vant-custom-icon.html",
    "revision": "cf2a2c8459530763dff8aaf29375da29"
  },
  {
    "url": "blog/vue-data-liveupdate.html",
    "revision": "f24ed9a8f9ac73d2b534920ebc5ac7a2"
  },
  {
    "url": "blog/vue-use-echarts.html",
    "revision": "665d608412248680f09ee1b2e14963c0"
  },
  {
    "url": "blog/vue-withoutcli.html",
    "revision": "9a4386257452e88524c79d5cd1ed6330"
  },
  {
    "url": "blog/vuepress-blog.html",
    "revision": "ccac96486a4311bd740d6140f0c834ad"
  },
  {
    "url": "blog/web-chatroom.html",
    "revision": "11c704b00fd31ad80240730d78ec47fb"
  },
  {
    "url": "blog/wx-get-openid.html",
    "revision": "5a0fda6d70c1c4930c92c934403092f0"
  },
  {
    "url": "head.png",
    "revision": "bbf3a4790b3e1be38c2afe0a9f94c5e1"
  },
  {
    "url": "index.html",
    "revision": "43b467042f347b50691d7e9755361b5a"
  },
  {
    "url": "resume/index.html",
    "revision": "a5b6d7652b49bd4e510a1ab04c01d71a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
