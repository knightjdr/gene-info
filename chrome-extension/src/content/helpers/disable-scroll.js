function disableScroll(div) {
  div.addEventListener('mousewheel', function(event) {
    var delta = event.wheelDelta || -event.detail;
    div.scrollTop += (delta < 0 ? 1 : -1) * 65;
    event.preventDefault();
  });
}
