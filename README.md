# input-frame  ![GitHub package.json version](https://img.shields.io/github/package-json/v/xjh22222228/weapp-input-frame) ![GitHub](https://img.shields.io/github/license/xjh22222228/weapp-input-frame)


# Screenshots
<img src="src/assets/demo.jpg" width="300" alt="demo" />


## Install
```bash
npm install weapp-input-frame
```

## Usage
*.json
```json
"usingComponents": {
  "input-frame": "miniprogram_npm/weapp-input-frame/index"
}
```

*.wxml
```
<input-frame />
```


## API
- value 输入框默认值
- plaintext 是否明文显示, 默认 false
- focus 是否获取焦点, 默认 false
- bind:change 输入发生变化触发
- bind:finished 输入完成时触发

```html
<input-frame
  value=""

  plaintext

  focus

  bind:change

  bind:finished
/>
```

# Methods

- getValue 获取输入框值

wxml
```html
<input-frame id="input-frame />
```

js
```js
Page({
  onLoad() {
    const el = this.selectComponent('#input-frame');
    el.getValue();
  }
})
```




## License
[MIT](https://opensource.org/licenses/MIT)

