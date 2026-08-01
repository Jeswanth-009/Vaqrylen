(function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero-video', { opacity: 0, scale: 1.05, duration: 1.2, ease: 'power2.out' });
  gsap.from('.hero-story .logo', { opacity: 0, y: 40, duration: 1, delay: 0.3, ease: 'power2.out' });
  gsap.from('.hero-story .tagline', { opacity: 0, y: 30, duration: 0.8, delay: 0.6, ease: 'power2.out' });
  gsap.from('.hero-story .description p', { opacity: 0, y: 20, duration: 0.6, stagger: 0.15, delay: 0.8, ease: 'power2.out' });

  gsap.utils.toArray('.product-card').forEach(function (card, i) {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, y: 30, duration: 0.6, delay: i * 0.08, ease: 'power2.out'
    });
  });

  gsap.utils.toArray('.feature-block').forEach(function (block, i) {
    gsap.from(block, {
      scrollTrigger: { trigger: block, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, x: i % 2 === 0 ? -40 : 40, duration: 0.8, ease: 'power2.out'
    });
  });

  gsap.utils.toArray('.community-block').forEach(function (block, i) {
    gsap.from(block, {
      scrollTrigger: { trigger: block, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, x: i % 2 === 0 ? 40 : -40, duration: 0.8, ease: 'power2.out'
    });
  });

  gsap.from('.testimonials-section', {
    scrollTrigger: { trigger: '.testimonials-section', start: 'top 85%' },
    opacity: 0, y: 30, duration: 0.8, ease: 'power2.out'
  });

  gsap.utils.toArray('.social-tile').forEach(function (tile, i) {
    gsap.from(tile, {
      scrollTrigger: { trigger: tile, start: 'top 90%' },
      opacity: 0, scale: 0.9, duration: 0.4, delay: i * 0.06, ease: 'power2.out'
    });
  });

  gsap.from('.site-footer', {
    scrollTrigger: { trigger: '.site-footer', start: 'top 90%' },
    opacity: 0, y: 20, duration: 0.8, ease: 'power2.out'
  });

  var productCarousel = document.querySelector('.carousel-track');
  var productPrev = document.querySelector('.carousel-arrow.prev');
  var productNext = document.querySelector('.carousel-arrow.next');

  if (productCarousel && productPrev && productNext) {
    productPrev.addEventListener('click', function () {
      productCarousel.scrollBy({ left: -280, behavior: 'smooth' });
    });
    productNext.addEventListener('click', function () {
      productCarousel.scrollBy({ left: 280, behavior: 'smooth' });
    });
  }

  var feedTrack = document.querySelector('.social-feed-track');
  var feedLeft = document.querySelector('.social-feed-arrow.left');
  var feedRight = document.querySelector('.social-feed-arrow.right');

  if (feedTrack && feedLeft && feedRight) {
    feedLeft.addEventListener('click', function () {
      feedTrack.scrollBy({ left: -220, behavior: 'smooth' });
    });
    feedRight.addEventListener('click', function () {
      feedTrack.scrollBy({ left: 220, behavior: 'smooth' });
    });
  }

  var testimonialTrack = document.querySelector('.testimonial-track');
  var testPrev = document.querySelector('.testimonial-arrow.prev');
  var testNext = document.querySelector('.testimonial-arrow.next');

  if (testimonialTrack && testPrev && testNext) {
    testPrev.addEventListener('click', function () {
      testimonialTrack.scrollBy({ left: -640, behavior: 'smooth' });
    });
    testNext.addEventListener('click', function () {
      testimonialTrack.scrollBy({ left: 640, behavior: 'smooth' });
    });
  }
})();