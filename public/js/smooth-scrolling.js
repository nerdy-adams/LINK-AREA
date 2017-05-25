(function() {
  var corp = document.getElementById('corporation'),
      body = document.getElementsByTagName('body')[0];
  function animate(options) {
    var start = new Date(),
        id = setInterval(function() {
          var timePassed = new Date() - start,
              progress = timePassed / options.duration,
              delta = options.delta(progress);
          if(progress > 0.5) clearInterval(id);
          window.addEventListener('click', function() {
            clearInterval(id);
          });
          options.step(delta);
        }, 1);
  }
  function quad(progress) {
    return Math.pow(progress, 2);
  }
  function move(timing, elTop) {
    animate({
      duration: timing,
      delta: quad,
      step: function(quad) {
        body.scrollTop = body.scrollTop + (elTop - body.scrollTop) * quad;
      }
    });
  }
  function smoothScroll(event) {
    var thehref = this.getAttribute('href').slice(1),
        elOnThisHref = document.getElementById(thehref),
        elTop = elOnThisHref.offsetTop + document.getElementById('home').offsetHeight,
        length = Math.abs(elTop - body.scrollTop),
        timing = 500;
    if(Math.abs(length) < 500) timing = 600;
    if(Math.abs(length) < 2500) timing = 1000;
    else timing = length;

    if(thehref === 'home') elTop = document.getElementById(thehref).offsetTop;
   
    move(timing, elTop);
    event.preventDefault();
  };
  // init
  var elements = document.querySelectorAll('a');
  for(var element of elements) {
    var href = element.getAttribute('href');
    if(href.indexOf('#') === 0) {
      console.log(element);
      element.addEventListener('click', smoothScroll);
    }
  }
})();