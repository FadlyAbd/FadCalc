 document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => { 
      let observer;

      const handleIntersection = (entries) => {
        entries.forEach(entry => {
          const cards = entry.target.querySelectorAll('.animated-card');
          const texts = entry.target.querySelectorAll('.animated-text');
          if (entry.isIntersecting) {
            cards.forEach(card => {
              card.classList.add('slide-in');
              card.classList.remove('slide-out');
            });
            texts.forEach(text => {
              text.classList.add('slide-in-x');
              text.classList.remove('slide-out-x');
            });
          } else {
            cards.forEach(card => {
              card.classList.remove('slide-in');
              card.classList.add('slide-out');
            }); 
            texts.forEach(text => {
              text.classList.add('slude-out-x');
              text.classList.remove('slide-in-x');
            });
          }
        });
      };

      observer = new IntersectionObserver(handleIntersection, { 
        threshold: 0.5,
        root: null,
        rootMargin: "0px" 
      });
      observer.observe(section);
    });
  });
























