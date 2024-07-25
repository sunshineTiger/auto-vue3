<template>
  <div style="height: 100vh; width: 100vw" class="bg-red-500">
    <!-- <div style="height: 50vh; width: 100vw" class="bg-red-500">xxxxxxxxxxxx</div>
    <button class="btn-color-normal w-20 h-10">
      <span>Button</span>
    </button> -->
    <div class="bg-blue-500">这是我修改后的git提交</div>
    <div class="bg-blue-500">提交次数 ：8</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const btn = document.querySelector('.btn-color-normal') as HTMLElement;
  btn.onmousemove = function (e) {
    console.log('e', e);

    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;
    btn.style.setProperty('--mybtnx', x + 'px');
    btn.style.setProperty('--mybtny', y + 'px');
  };
});
</script>
<style scoped lang="scss">
// Button
.btn-color-normal {
  position: relative;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 14px 50px;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;

  span {
    position: relative;
  }

  &::before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--mybtnx);
    top: var(--mybtny);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #a3b1f1, transparent);
    transform: translate(-50%, -50%);
    transition: all 0.2s ease, left 0s, top 0s;
  }

  &:hover::before {
    --size: 200px;
  }
}
</style>
