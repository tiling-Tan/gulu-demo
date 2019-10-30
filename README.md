# gulu - 一个基于Vue的UI组件库
[![Build Status](https://www.travis-ci.org/tiling-Tan/gulu-demo.svg?branch=master)](https://www.travis-ci.org/tiling-Tan/gulu-demo)

## 介绍
这是我在学习vue过程中做的一个UI框架

## 开始使用
1. 添加CSS样式
   使用本框架前请在CSS中开启border-box
   ```
   *,*::before,*::after{box-sizing:border-box;}
   ```
   IE8及以上浏览器都支持此样式。
   你还需要设置默认颜色等变量(后续会改为SCSS变量)
   ```
   html {
     --button-height: 32px;
     --font-size: 14px;
     --button-bg: white;
     --button-active-bg: #eee;
     --border-radius: 4px;
     --color: #333;
     --border-color: #999;
     --border-color-hover: #666;
   }
   ```
   IE15及以上浏览器都支持此样式。

   2. 安装gulu
   ```
   npm i --save vision-test-1-1
   ```
   
   3. 引入gulu
   ```
   import { Button } from 'vision-test-1-1'
   import 'vision-test-1-1/dist/index.css'
   
   export default {
     name: 'app',
     components: {
       'g-button':Button
     }
   }
   ```
   
   4. 引入svg symbols
   ```
   <script src="//at.alicdn.com/t/font_1474919_wdqxyy0iy2.js"></script>
   ```
   
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

