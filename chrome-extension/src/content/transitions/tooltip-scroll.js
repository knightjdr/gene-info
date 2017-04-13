const tooltipScroll = {
  init: function() {
    tooltipScroll.position.x = window.pageXOffset;
    tooltipScroll.position.y = window.pageYOffset;
    window.addEventListener('scroll', tooltipScroll.scroll);
  },
  position: {
    x: 0,
    y: 0
  },
  scroll: function() {
    const deltaX = window.pageXOffset - tooltipScroll.position.x;
    const deltaY = window.pageYOffset - tooltipScroll.position.y;
    const element = 'cExtension_gene_info_tooltip';
    document.getElementById(element).style.left = document.getElementById(element).offsetLeft - deltaX + 'px';
    document.getElementById(element).style.top = document.getElementById(element).offsetTop - deltaY + 'px';
    tooltipScroll.position.x = window.pageXOffset;
    tooltipScroll.position.y = window.pageYOffset;
  }
};
