const disableScroll = (div) => {
  const x = window.scrollX;
  const y = window.scrollY;
  div.addEventListener('mousewheel', function(event) {
    window.onscroll = function(){
      window.scrollTo(x, y);
    };
  });
};
