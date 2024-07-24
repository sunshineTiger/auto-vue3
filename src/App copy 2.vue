<template>
<section class="description panel blue  bg-blue-500">
    <div>
      <h1>Basic Pin</h1>
      <p>You can <strong>pin</strong> an element while the ScrollTrigger is active which basically make it stick in place while the scroll position is between the <code>start</code> and <code>end</code> elements/values</p>
      <div class="scroll-down">Scroll down<div class="arrow"></div></div>
    </div>
</section>

  <section id="orange" class="panel orange align-top  bg-orange-500 relative">
    <img src="./assets/test1.png" alt="" class="absolute top-0 left-0 w-full h-full object-cover">
      <p id="orange-content" class=" z-50">
        <code>start: "top top"</code> 
        triggers when the orange element's 
        <strong>top edge</strong> hits the 
        <strong>top</strong> of the viewport. 
        <code>end:&nbsp;"bottom&nbsp;150px"</code> stops pinning when the 
        <strong>bottom</strong> of the orange element hits 
        <strong>150px</strong> down from the top of the viewport (measurements are relative to the top).</p>
  </section>

  <section id="red" class="panel red align-top bg-red-500 relative">
    <img src="./assets/test3.png" alt="" class="absolute top-0 left-0 w-full h-full object-cover">
    <p id="red-content"  class=" z-50"><code>start: "top center"</code> pins this element when the <strong>top</strong> of the red element hits the <strong>center</strong> of the viewport, and remains pinned for 200px because its <code>end</code> is defined as <code>"+=200"</code></p>
  </section>
  
  <section class="panel purple bg-purple-500">
      Easy Peasy!
  </section>

</template>
<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import { ref, onMounted,onUnmounted } from 'vue';
import BrowserIndex from './page-browser/BrowserIndex.vue';
import MobileIndex from './page-mobile/MobileIndex.vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
  const triggers = ScrollTrigger.getAll();
onMounted(() => { 
  ScrollTrigger.create({
  trigger: "#orange",
  start: "top top", 
  end: "bottom top",
  pin: "#orange-content"
});

ScrollTrigger.create({
  trigger: "#red",
  start: "top center", 
  end: "top top", // 200px past the start 
  pin: "#red-content"
});

}); 
    onUnmounted(() => {
      triggers.forEach((trigger) => {
      // 把 ScrollTrigger 綁定的動畫消除
        trigger.kill();
      });
      // 消除綁定 MatchMedia();
      ScrollTrigger.clearMatchMedia();
    });
</script>
<style scoped lang="scss">


.panel{
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
  width: 100%;  background-size: cover;
  background-image: url('./assets//test2.png');
}
.parallax-background2 {
  width: 100%;
  color: red;  width: 100%;
  background-size: cover;
  height: 800px; /* 使背景更大 */ 
  background-image: url('./assets//test1.png');
}
.parallax-background3 {
  width: 100%;  background-size: cover;
  color: red;  width: 100%;
  height: 800px; /* 使背景更大 */ 
  background-image: url('./assets//test3.png');
}
.parallax-background4 {
  width: 100%;  background-size: cover;
  color: red;  width: 100%;
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
