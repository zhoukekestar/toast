# toast
Toast, a simple, lightweight, no-dependencies toast.

# API

## `toast(message)`
toast a message with default params.

## `toast(options)`
  * `options` : `Object`
    * `text` : `String` Message to toast
    * `time` : `Number` The time to show toast message
    * `width` : `Number` Toast width

## `toast.defaults = options`
  * `options` : `Object`
    * `text` : `String` Message to toast
    * `time` : `Number` The time to show toast message
    * `width` : `Number` Toast width

# Online Demo
* [Toast with polyfill](https://zhoukekestar.github.io/toast/test/index.html)
* [Toast on latest Chrome. Try ES6/7!](https://zhoukekestar.github.io/toast/test/chrome.html)

  ```js
  async function () {
    await toast('wait for me!');
    alert('yeah!');
  }
  ```

# Browser Compatibility
| IE 7, 8 | IE 9 | IE 10+, Chrome, Firefox ...|
| -- | -- | -- |
| No animation! ![IE7](./assets/IE7.png) | No animation! ![IE7](./assets/IE9.png) | ![IE7](./assets/IE10.gif) |
