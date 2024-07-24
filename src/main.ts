import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { mediaType } from '@/utils/browser-utils.ts';
if (mediaType()) {
  await import('./page-mobile/index.css');
} else {
  await import('./page-browser/index.css');
}
createApp(App).mount('#app');
