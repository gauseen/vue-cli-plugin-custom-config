// 此文件应该放在 src/icons 目录下
// 并在 src/main.js 里面引入该文件
// 注：Svg-icon.vue 组件的位置

import Vue from 'vue'
import SvgIcon from '@/components/Svg-icon'

// 全局注册组件
Vue.component('svg-icon', SvgIcon)

const requireAll = context => context.keys().map(context)
const req = require.context('./svg', true, /\.svg$/)

requireAll(req)
