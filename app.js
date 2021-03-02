var tl = gsap.timeline();

tl.from("#h1", {x: -50 , opacity: 0, duration: 1})
.from("#hero-subtitle", {x: -70, opacity: 0, duration: 1}, "=-.8")
.from(".polygon1", {opacity: 0, x: 50, rotate: 0, duration: 1}, "=-.6")
.from(".girl_image", {x: -50, opacity: 0, duration: 1}, "=-.9")
.from("#cta-btn", {opacity: 0, y: -25, duration: .9 }, "=-.3")



var rotate = gsap.timeline({
  scrollTrigger: {
    trigger: '.navbar',
    scrub: 0.2,
    start: 'top top',
    end:'+=10000',
  
  }
}).to(".polygon1", {
  rotation: 300 * 1,
  duration: 1,
  ease: 'none'
});


gsap.to(".girl_image", {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
      trigger: ".girl_image",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,
      
    }, 
  });

  gsap.to(".partner-brands", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".partner-brands",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });
  
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".navbar",
      start: "top top"
    }

  });

  tl2.from(".section-title", {y: 30, opacity: 0, duration: 1})
  .from(".section-subtitle", {y: 30, opacity: 0, duration: 1}, "=-.8")
  .from(".cards-wrapper", {x: 80, y: 50, opacity: 0, duration : 1})

 var aboutApp = gsap.timeline({
   scrollTrigger: {
     trigger: ".card",
     start: "20% 20%",
     markers: true
   }
 });

 aboutApp.from(".about-title", {y: 30, opacity: 0, duration: 1})
 .from(".about-subtitle", {y: 30, opacity: 0, duration: 1}, "=-.8")
 .from(".computer_image", {y: 100, x : -50, opacity: 0, rotate: -20, duration: 1})
 .from("#cta-app", {opacity: 0, y: -25, duration: .9 }, "=-.3")



var registerSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-app-content",
    start: "20% top",
    
  },
  
})

registerSection.from(".register-title", {y: 50, opacity: 0, duration: 1})
.from(".register-subtitle", {y: 30, opacity: 0, duration: 1}, "=-.8")
.from("#register-btn", {y: -30, opacity: 0, duration: 1}, "=-.4")


var rotate2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.about-app',
    scrub: 0.2,
    start: 'bottom bottom',
    end:'+=10000',
  }
}).to(".polygon3", {
  rotation: 300 * 1,
  duration: 1,
  ease: 'none'
});

var footerSection = gsap.timeline({
  scrollTrigger: {
    trigger: "#registerSection",
    start: "20% center",
  
  },
});

footerSection.from(".form-title", {x: 0, y: -30, opacity: 0, duration: 1})
.from(".email-wrapper", {x: 0, y: -30, opacity: 0, duration: 1}, "=-.8")
.from(".form-check-input", {x: 0, y: -30, opacity: 0, duration: 1}, "=-.5")
.from(".form-check-label", {x: 0, y: -30, opacity: 0, duration: 1}, "=-.4")