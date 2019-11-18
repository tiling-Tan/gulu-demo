# Twheels - 一个基于Vue的UI组件库
[![Build Status](https://www.travis-ci.org/tiling-Tan/gulu-demo.svg?branch=master)](https://www.travis-ci.org/tiling-Tan/gulu-demo)

[进入Twheels官网](https://tiling-tan.github.io/gulu-demo/)
## 介绍
这是我在学习vue过程中做的一个UI框架

## 开始使用
1. 添加CSS样式
   使用本框架前请在CSS中开启border-box
   ```
   *,*::before,*::after{box-sizing:border-box;}
   ```
   IE15及以上浏览器都支持此样式。

   2. 安装Twheels
   ```
   npm i --save vision-test-1-1
   ```
   
   3. 引入Twheels
   ```
   import { Button } from 'vision-test-1-1'
   import 'vision-test-1-1/dist/index.css'
   import Vue from 'vue'
   
   export default {
     name: 'app',
     components: {
       'g-button':Button
     }
   }
   ```
   
   4. 引入svg symbols
   ```
   <script src="vision-test-1-1/src/svg.js"></script>
   ```
   


