//we run the code when content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  
  // Split Type Parameters
  let splitText;
  function runSplit() {
    splitText = new SplitType("[text-split]", {
      types: "lines",
      tagName: "span",
    });
    console.log("Text Split Run");
  } 

  runSplit();

  //adding a <span> element to create a mask
  document
    .querySelectorAll("[text-split] span.word")
    .forEach(function (item) {
      let c = item.getHTML();
      item.innerHTML =
        "<span style='display:block; margin-right:1px;'>" + c + "</span>";
    });

  // Animation for H2 Titles
  $("[text-animate] span.word span").each(function () {
    
    let tm = gsap.timeline({ paused: true });
    
    tm.fromTo(
      $(this),
      {
        yPercent: 95,
      },
      {
        yPercent: 0,
        duration: 0.68,
        ease: "power3.out",
        //stagger: { /*amount: 0.64*/ each: 0.16 },
      }
    );

    //Scroll Trigger / In-View
    ScrollTrigger.create({
      trigger: $(this),
      //markers: true,
      //toggleActions — onEnter, onLeave, onEnterBack, and onLeaveBack
      //toggleActions: "play none none reverse",
      start: "top 84%",
      end: "top 32%",
      //scrub: true,
      onEnter: () => {
        tm.play();
      },
    });

    //Scroll Trigger / Out-of-View
    ScrollTrigger.create({
      trigger: $(this),
      start: "top 101%",
      onLeaveBack: () => {
        tm.progress(0);
        tm.pause();
      },
    });
  });



  // Animation for projectsList
  $("[projectsList-animation]").each(function () {
    
    let tc= gsap.timeline({paused:true});
    
    tc.fromTo(
      $(this),
      {
        yPercent: 48,
      },
      {
        yPercent: 0,
        duration: 0.68,
        ease: "power2.out",
      }
    );

    ScrollTrigger.create({
      trigger: $(this),
      start: "top 96%",
      end: "top 72%",
      onEnter: () => {
        tc.play();
      },
    })

    ScrollTrigger.create({
      trigger: $(this),
      start: "top 120%",
      onLeaveBack: () => {
        tc.progress(0);
        tc.pause();
      },
    });
  });



   // Animation for Dividers
  $("[divider-animation]").each(function () {
    
    let td= gsap.timeline({paused:true});
    
    td.from(
      $(this),
      {
        width: "0%",
        duration: 1.2,
        ease: "power1.out",
      }
    );

    ScrollTrigger.create({
      trigger: $(this),
      start: "top 84%",
      end: "top 32%",
      onEnter: () => {
        td.play();
      },
    });
    ScrollTrigger.create({
      trigger: $(this),
      start: "top 101%",
      onLeaveBack: () => {
        td.progress(0);
        td.pause();
      },
    });
    
  });

  //Partners Logos Animation
  $("[partners-logo-wrapper]").each(function () {
    
    let tc= gsap.timeline({paused:true});
    
    tc.fromTo(
      $(this).find(".logo__img__b"),
      {
        yPercent: 32,
      },
      {
        yPercent: 0,
        duration: 0.68,
        ease: "power2.out",
        stagger: {
          amount: 0.68,
        },
      }
    );

    ScrollTrigger.create({
      trigger: $(this).find(".logo__img__b"),
      start: "top 96%",
      end: "top 72%",
      onEnter: () => {
        tc.play();
      },
    })

    ScrollTrigger.create({
      trigger: $(this).find(".logo__img__b"),
      start: "top 120%",
      onLeaveBack: () => {
        tc.progress(0);
        tc.pause();
      },
    });
  });


  //Reloading Page on Window Resize with Timer
  let w = window.innerWidth;
  console.log("innerWidth= " + window.innerWidth);
  console.log("w= " + w);

  function reloadSplit() {
    console.log("reloadSplit() worked");
    if (w !== window.innerWidth && window.innerWidth > 991) {
      w = window.innerWidth;
      // splitText.revert();
      // runSplit();
      console.log("resize worked");
      window.location.reload();
    }
  }

  // Setting timer when Window Width is changed
  function debounce(func, time) {
    var timer;
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(func, time);
    };
  }

  window.addEventListener("resize", debounce(reloadSplit, 300));
});

//Preloader H1 Title Animation
window.addEventListener("load", () => {
  $(".hero__title--wrapper")
  .each(function (){
    gsap.fromTo(
      $(this).find("h1[hero-title-animate] span.word span"),{
        yPercent: 100,
      },{
        yPercent: 0,
        duration: 0.68,
        delay: 2.6,
        ease: "power3.out", 
        stagger: {
          amount: 0.32,
        },
      }
    )
  })
});

console.log("gsap works");
console.log("GitHub Dev + Pages");