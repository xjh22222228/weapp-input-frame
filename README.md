# input-frame  ![GitHub package.json version](https://img.shields.io/github/package-json/v/xjh22222228/weapp-input-frame) ![GitHub](https://img.shields.io/github/license/xjh22222228/weapp-input-frame)

小程序输入框组件，适用于支付密码、登录密码 等。


<center>
  <img src="https://raw.githubusercontent.com/xjh22222228/weapp-input-frame/master/src/assets/poster.jpg" width="200" />
</center>


## Screenshots
<img src="https://raw.githubusercontent.com/xjh22222228/weapp-input-frame/master/src/assets/demo1.jpg" width="300" />
<img src="https://raw.githubusercontent.com/xjh22222228/weapp-input-frame/master/src/assets/demo2.jpg" width="300" />


## 安装
安装完成在开发者工具执行 `npm build`
```bash
npm install weapp-input-frame -S
```

## 使用
*.json
```json
"usingComponents": {
  "input-frame": "miniprogram_npm/weapp-input-frame/index"
}
```

*.wxml
```html
<input-frame />
```


## API
- value 输入框默认值
- plaintext 是否明文显示, 默认 false
- focus 是否获取焦点, 默认 false
- bind:change 输入发生变化触发
- bind:finished 输入完成时触发
- space 输入框的格子数量，一般 4 - 6， 默认 6
- frameStyle 输入框的风格， `divider` / '' , 默认 ''
- custom-class 自定义组件class

```html
<input-frame
  value="123456"
  plaintext
  focus="{{ true }}"
  bind:change="onChange"
  bind:finished="onFinished"
/>
```

## 暴露方法
- getValue 获取输入框值
- setValue 动态设置输入框值

wxml
```html
<input-frame id="input-frame />
```

js
```js
// Demo
Page({
  onLoad() {
    const el = this.selectComponent('#input-frame');
    el.getValue();
  },
  setVal() {
    const el = this.selectComponent('#input-frame');
    el.setValue(282828);
  }
})
```




## License
[MIT](https://opensource.org/licenses/MIT)

