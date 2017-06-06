;(function() {
  var style = 'color: rgb(255, 255, 255); font-size: 18px; border-radius: 10px; box-sizing: border-box; text-align: center; z-index: 99999; word-break: break-word; padding: 12px; position: fixed; left: 50%; bottom: 100px; text-shadow: none; width: 160px; margin-left: -80px; opacity: 0; transition: all 1s; background-color: #000; background-color: rgba(0, 0, 0, 0.8); display: none; line-height: 1.3em;';

  /* Polyfill Code: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign */
  if (typeof Object.assign != 'function') {
    Object.assign = function(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }

  /**
  * toast
  * @param  {[string, object]} options
  * @return {[function]}  [callback function]
  */
  window.toast = function(options, callback) {
    var holder = document.createElement('div');
    holder.style.cssText = style;
    document.body.appendChild(holder);

    options = typeof options === 'string'
      ? Object.assign({}, toast.defaults, { text: options })
      : Object.assign({}, toast.defaults, options);

    holder.innerHTML = options.text;

    // Show style
    holder.style.width = options.width + 'px';
    holder.style.marginLeft = '-' + (options.width / 2) + 'px'
    holder.style.display = 'block';
    setTimeout(function() {
      holder.style.bottom = '200px';
      holder.style.opacity = "1";
    }, 10);

    // After anmiation.
    setTimeout(function() {
      /* hide style*/
      holder.style.opacity = 0;
      setTimeout(function () {
        holder.remove();

        /* call callback if exist */
        if (callback) callback();
      }, 1000);
    }, options.time);
  };

  window.toast.defaults = {
    width: 160,
    text: "No Message!",
    time: 1200
  }
})();
