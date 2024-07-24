<template>
  <section>
    <div class="bg"></div>
    <h1>Simple parallax sections</h1>
  </section>
   <section>
    <div class="bg"></div>
    <h1>Hey look, a title</h1>
  </section>
 <!-- <section>
    <div class="bg"></div>
    <h1>They just keep coming</h1>
  </section>
  <section>
    <div class="bg"></div>
    <h1>So smooth though</h1>
  </section>
  <section>
    <div class="bg"></div>
    <h1>Nice, right?</h1>
  </section> -->
</template>
<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import { onMounted, onUnmounted } from 'vue'; 
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const triggers = ScrollTrigger.getAll();
onMounted(() => {
  //获取比率
  let getRatio = (el:HTMLElement) => { 
    return window.innerHeight / (window.innerHeight + el.offsetHeight)
  };

  gsap.utils.toArray('section').forEach((section:any, i:number) => {
    section.bg = section.querySelector('.bg'); 
    // Give the backgrounds some random images
    section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

    // the first image (i === 0) should be handled differently because it should start at the very top.
    // use function-based values in order to keep things responsive
    gsap.fromTo(
      section.bg,
      { 
        backgroundPosition:()=>{  
          // console.log("开始 y : "+(-window.innerHeight * getRatio(section)));
          // return i ? `50% ${-window.innerHeight * getRatio(section)}px` : '50% 0px' 
          // return `50% ${-429}px`
          return `50% ${0}px`
        }
      },
      { 
        backgroundPosition:()=>{
          console.log("结束y : "+window.innerHeight * (1 - getRatio(section)));
          
          return `50% ${window.innerHeight * (1 - getRatio(section))}px`
        },
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: () => (i ? 'top bottom' : 'top top'),//上一元素的底部与当前元素的顶部
          end: 'bottom top',//当前元素的底部与下一元素的顶部 
          scrub: true,
          markers:true,
          invalidateOnRefresh: true // to make it responsive
        }
      }
    );
  });
});
onUnmounted(() => {
  triggers.forEach(trigger => {
    // 把 ScrollTrigger 綁定的動畫消除
    trigger.kill();
  });
  // 消除綁定 MatchMedia();
  ScrollTrigger.clearMatchMedia();
});
</script>
<style scoped lang="scss">
section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

h1 {
  color: white;
  text-shadow: 1px 1px 3px black;
  z-index: 1;
  font-size: 3em;
  font-weight: 400;
}

.panel {
  width: 100vw;
  height: 100vh;
}

.parallax-container {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.parallax-background {
  width: 100%;
  color: red;
  height: 800px; /* 使背景更大 */
  width: 100%;
  background-size: cover;
  background-image: url('./assets//test2.png');
}
.parallax-background2 {
  width: 100%;
  color: red;
  width: 100%;
  background-size: cover;
  height: 800px; /* 使背景更大 */
  background-image: url('./assets//test1.png');
}
.parallax-background3 {
  width: 100%;
  background-size: cover;
  color: red;
  width: 100%;
  height: 800px; /* 使背景更大 */
  background-image: url('./assets//test3.png');
}
.parallax-background4 {
  width: 100%;
  background-size: cover;
  color: red;
  width: 100%;
  height: 800px; /* 使背景更大 */
  background-image: url('./assets//test4.png');
}

.test-box-wid {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: all 0.6s ease-in-out;
}

.test-box-wid:hover {
  margin: 0 -20px;
  transition: all 0.6s ease-in-out;
}

.webo {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.webo::before {
}

.myimage {
  width: 200px;
  height: 200px;
}

.container {
  display: flex;
  direction: column;
  height: 200px;
  transition: all 0.6s ease-in-out;
  /* 所有子元素在3D空间中呈现 */
  transform-style: preserve-3d;
}

.container:hover > :not(:hover) {
  /* 鼠标悬停时，所有非悬停的子元素模糊 */
  margin: 0 -20px;
  filter: drop-shadow(0 0 10px #000) drop-shadow(0 0 25px #000);
  transition: all 0.6s ease-in-out;
  /* 元素的透视感 */
  transform: perspective(500px) rotateY(40deg) scale(0.95);
}

.container .box:hover ~ .box {
  transition: all 0.6s ease-in-out;
  transform: perspective(500px) rotateY(-40deg) scale(0.95);
}

.container .box:hover {
  transition: all 0.6s ease-in-out;
  transform: perspective(500px) rotateY(0) scale(1.15);
  filter: drop-shadow(0 0 10px #000) drop-shadow(0 0 25px #000);
}

.box {
  transition: all 0.6s ease-in-out;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 10px #ff0000);
}

.logo.vue:hover {
}

.logo-image:hover {
  transition: all 0.6s ease-in-out;
  /*滤镜    blur:模糊  brightness:模糊  grayscale:灰度  contrast:对比度  drop-shadow：阴影   invert：反转图像  opacity：不透明度   sepia：图像转为棕褐色    saturate：调整饱和度   hue-rotate：图像色相旋转*/
  filter: drop-shadow(0 0 14px #25ccf4);
}

.logo-image {
  /* 反射 */
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.box-root {
  display: flex;
  z-index: 25;
  width: 70px;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.box-root {
  display: flex;
  z-index: 25;
  width: 70px;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* .webo::before{
    background: #25ccf4;
   content:'';
   width: 20%;
   height: 20%;
   position: absolute;
   border-radius: 50%;
   top: 0;
   left: 0;
   transition: 0.6s;
   transform: scale(0.8);
 } */

.svg-icon {
  width: 50px;
  background-size: contain;
}

.webo::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: #25ccf4;
  transition: 0.6s;
  transform: scale(0.8);
}

.webo:hover::before {
  box-shadow: 0 0 14px 20px #25ccf4;
  transform: scale(1.05);
}

.svg-icon {
  transform: 0.6s;
  filter: invert(1);
}

.webo:hover .svg-icon {
  filter: invert(1) drop-shadow(0 0 14px #25ccf4);
}

/* 
 
 .webo:hover::before {
  box-shadow:  0 0 14px 20px #25ccf4;
   transform: scale(1.05);
 }
 
 .webo {
   position: relative;
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   box-shadow: 0 0 10px #fff;
   transition: 0.6s;
 }
 
 .svg-icon{
   transform: 0.6s;
   filter: invert(1);
 }
 
 a:hover .svg-icon{
   filter: invert(1) drop-shadow(0 0 14px #25ccf4);
 }
   */

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
