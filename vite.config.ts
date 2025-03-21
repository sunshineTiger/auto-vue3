import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import react from "@vitejs/plugin-react";
import postcsspxtoviewport8plugin from "postcss-px-to-viewport-8-plugin";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import fs from "fs";
import viteAliOssPlugin from "vite-ali-oss-plugin";
import { mode } from "crypto-js";

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  const envData = loadEnv(mode, process.cwd());
  return defineConfig({
    // plugins: [react(), viteAliOssPlugin(options)],
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      target: ["edge90", "chrome90", "firefox90", "safari15"],
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    // base: mode == 'production' ? `${envData.VITE_APP_OSS_SOURCE_PATH}/${newVersion.versionName}` : '/',
    base: (mode = "/"),
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          tailwindcss(),
          postcsspxtoviewport8plugin({
            unitToConvert: "px",
            viewportWidth: (file) => {
              return 750;
            },
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ["*"], // 能转化为vw的属性列表
            viewportUnit: "vw", // 希望使用的视口单位
            fontViewportUnit: "vw", // 字体使用的视口单位
            selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: true, // 媒体查询里的单位是否需要转换单位
            replace: true, //  是否直接更换属性值，而不添加备用属性
            exclude: [/node_modules/, /src\/page-browser/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            // exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: "vw", // 横屏时使用的单位
            landscapeWidth: 1024, // 横屏时使用的视口宽度
          }),
          postcsspxtoviewport8plugin({
            unitToConvert: "px",
            viewportWidth: (file) => {
              return 1920;
            },
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ["*"], // 能转化为vw的属性列表
            viewportUnit: "vw", // 希望使用的视口单位
            fontViewportUnit: "vw", // 字体使用的视口单位
            selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: true, // 媒体查询里的单位是否需要转换单位
            replace: true, //  是否直接更换属性值，而不添加备用属性
            exclude: [/node_modules/, /src\/page-mobile/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: "vw", // 横屏时使用的单位
            landscapeWidth: 1024, // 横屏时使用的视口宽度
          }),
        ],
      },
    },
  });
};
// export default defineConfig({
//   plugins: [vue()],

//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },

//   build: {
//     target: ["edge90", "chrome90", "firefox90", "safari15"],
//     minify: "terser",
//     terserOptions: {
//       compress: {
//         drop_console: true,
//         drop_debugger: true,
//       },
//     },
//   },
//   base: (mode = "/"),
// });
