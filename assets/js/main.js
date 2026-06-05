
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));


  // Fade-up
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
  }, {threshold:0.1});
  document.querySelectorAll('.fu').forEach(el => io.observe(el));

  // Counter
  function animCount(el, to, dur=1400){
    let start=null;
    function step(ts){ if(!start)start=ts; const p=Math.min((ts-start)/dur,1); el.textContent=Math.floor(p*to); if(p<1)requestAnimationFrame(step); else el.textContent=to; }
    requestAnimationFrame(step);
  }
  const statsIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.querySelectorAll('.ctr[data-target]').forEach(c => animCount(c, parseInt(c.dataset.target)));
        statsIO.unobserve(e.target);
      }
    });
  }, {threshold:0.5});
  const sb = document.querySelector('.stats-bar');
  if(sb) statsIO.observe(sb);


  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('v'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fu').forEach(el => obs.observe(el));


  $(document).ready(function(){

    $('.product-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

});


Fancybox.bind("[data-fancybox='dashboards']", {});

  Fancybox.bind('[data-fancybox="solution"]', {
    animated: true,
    Toolbar: {
      display: {
        left: ["infobar"],
        middle: [],
        right: ["zoom", "fullscreen", "download", "close"]
      }
    },
    Images: { zoom: true },
    Carousel: { transition: "slide" }
  });