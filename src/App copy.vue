

<template> 
<div   style="height: 4000px; width:100vw;">
<div   class=" w-full flex flex-rows justify-start">12321few</div>
</div>
<div   style="height: 4000px; width:100vw;">
<div id="fewi" class=" w-full flex flex-rows justify-start text-2xl">few</div>
</div>
  <div class="container">
    <div class="box">
      <img class="myimage" src="./assets/test1.png" alt="" />
    </div>
    <div class="box">
      <img class="myimage" src="./assets/test2.png" alt="" />
    </div>
    <div class="box">
      <img class="myimage" src="./assets/test3.png" alt="" />
    </div>
    <div class="box">
      <img class="myimage" src="./assets/test4.png" alt="" />
    </div>
  </div>
  <div class=" w-full h-80px bg-red-400 text-color_FEC943">nihao</div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <BrowserIndex />
  <MobileIndex /> 
</template>
<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import { ref ,onMounted} from "vue";
import BrowserIndex from "./page-browser/BrowserIndex.vue";
import MobileIndex from "./page-mobile/MobileIndex.vue"; 
import gsap from "gsap";  
import ScrollTrigger from "gsap/ScrollTrigger";
 onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const fewi = document.getElementById("fewi");
  gsap.fromTo(fewi, {
    // x:0
    scale:0.3
  }, {
    // x:(_,target)=>{
    //   return document.documentElement.clientWidth-target.offsetWidth;
    // } , 
   scale:1, 
    scrollTrigger:{
      trigger:fewi,
      scrub:true,  
      pin:true
      // start:"center center",
      
    }
  })
}); 
</script>
<style scoped lang="scss">
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

.webo::before {}

.myimage {
  width: 200px;
  height: 200px
}

.container {
  display: flex;
  direction: column;
  height: 200px;
  transition: all 0.6s ease-in-out;
  /* 所有子元素在3D空间中呈现 */
  transform-style: preserve-3d;
}

.container:hover> :not(:hover) {
  /* 鼠标悬停时，所有非悬停的子元素模糊 */
  margin: 0 -20px;
  filter: drop-shadow(0 0 10px #000) drop-shadow(0 0 25px #000);
  transition: all 0.6s ease-in-out;
  /* 元素的透视感 */
  transform: perspective(500px) rotateY(40deg) scale(0.95);
}

.container .box:hover~.box {
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

.logo.vue:hover {}

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
  content: "";
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
