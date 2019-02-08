var app = function () {

    function updateSlider(element) {
      if (element) {
        var parent = element.parentElement,
        lastValue = parent.getAttribute('data-slider-value');
  
        if (lastValue === element.value) {
          return; // No value change, no need to update then
        }
  
        parent.setAttribute('data-slider-value', element.value);
  
        var x = element.value / element.getAttribute('max') * 100;
        console.log(x);
        console.log(element.value);
  
  
        var $thumb = parent.querySelector('.range-slider__thumb'),
        $bar = parent.querySelector('.range-slider__bar'),
        pct = x * ((parent.clientHeight - $thumb.clientHeight) / parent.clientHeight);
  
  
        $thumb.style.bottom = pct + '%';
        $bar.style.height = 'calc(' + pct + '% + ' + $thumb.clientHeight / 2 + 'px)';
        $thumb.textContent = '' + element.value;
      }
    }
    return {
      updateSlider: updateSlider };
  
  
  }();
  
  (function initAndSetupTheSliders() {
    var inputs = [].slice.call(document.querySelectorAll('.range-slider input'));
    inputs.forEach(function (input) {return input.setAttribute('value', '50');});
    inputs.forEach(function (input) {return app.updateSlider(input);});
    // Cross-browser support where value changes instantly as you drag the handle, therefore two event types.
    inputs.forEach(function (input) {return input.addEventListener('input', function (element) {return app.updateSlider(input);});});
    inputs.forEach(function (input) {return input.addEventListener('change', function (element) {return app.updateSlider(input);});});
  })();