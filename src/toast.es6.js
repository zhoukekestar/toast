;(function() {
  let holder = null;
  const style = `
    color: rgb(255, 255, 255);
    font-size: 18px;
    border-radius: 10px;
    box-sizing: border-box;
    text-align: center;
    z-index: 99999;
    word-break: break-word;
    padding: 12px;
    position: fixed;
    left: 50%;
    bottom: 100px;
    text-shadow: none;
    width: 160px;
    margin-left: -80px;
    opacity: 0;
    transition: all 1s;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    line-height: 1.3em;
  `;

  /**
  * toast
  * @param  {[string, object]} options
  * @return {[Promise]}
  */
  window.toast = (options) => {

    options = typeof options === 'string'
      ? Object.assign({}, toast.defaults, { text: options })
      : Object.assign({}, toast.defaults, options);

    if (!holder) {
      holder = document.createElement('div');
      holder.style.cssText = style;
      document.body.appendChild(holder);
    }

    holder.innerHTML = options.text;

    // Show style
    holder.style.width = options.width + 'px';
    holder.style.marginLeft = '-' + (options.width / 2) + 'px'
    holder.style.display = 'block';
    setTimeout(() => {
      holder.style.bottom = '200px';
      holder.style.opacity = "1";
    }, 10)

    return new Promise(resolve => {
      // After anmiation.
      setTimeout(() => {
        /* hide style*/
        holder.style.opacity = 0;
        setTimeout(() => {
          holder.style.bottom = '100px';
          holder.style.display = 'none';

          resolve();
        }, 1000);
      }, options.time);
    })
  };

  window.toast.defaults = {
    width: 160,
    text: "No Message!",
    time: 1200
  }
})();
