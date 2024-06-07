window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('scrollPos', window.scrollY);
});
   
  window.addEventListener('load', function () {
    const scrollPos = sessionStorage.getItem('scrollPos');
    if (scrollPos) {
        window.scrollTo(0, parseInt(scrollPos));
    }
});