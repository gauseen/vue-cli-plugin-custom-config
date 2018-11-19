## vue-cli-plugin-custom-config 自定义配置项

---------------------------------------------------------

### 一、svg-icon 组件，开箱即用
#### 安装插件
```sh
vue add custom-config # 安装插件
```

#### 引入
```js
// src/main.js

import './icons'

注：在 src/mian.js 引入！！！
```

#### 使用
```html
<template>
  <div class="svg-icon">
    <svg-icon name="good"></svg-icon>
  </div>
</template>
```
### svg-icon 组件属性说明 Attributes:
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填项？ |
|------|-------|---------|-------|--------|--------|
| `name` | `icon`文件名 | `String` | | `''` | 是 |
