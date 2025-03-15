//we run the code when content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  //
  //Preloader Animation

  // let loaderTrigger = document.querySelector("preloader_trigger");
  // let loaderWrapper = document.querySelector("preloader_wrapper");
  // window.addEventListener("load", () => {
  //   if ((sessionStorage.length = 0)) {
  //     loaderWrapper.style.display = "block";
  //     loaderTrigger.click();
  //     sessionStorage.setItem("Loaded", "true");
  //   } else {
  //   }
  // });

  // Split Type Parameters
  let splitText;
  function runSplit() {
    splitText = new SplitType("[text-split]", {
      types: "words",
      tagName: "span",
    });
    console.log("Text Split Run");
  }

  runSplit();

  //adding a <span> element to create a mask
  document
    .querySelectorAll("[text-animate] span.word")
    .forEach(function (item) {
      let c = item.getHTML();
      item.innerHTML =
        "<span style='display:block; margin-right:1px;'>" + c + "</span>";
    });

  // Animation for H2 Titles
  $("[text-animate] span.word span").each(function () {
    //timeline for H2
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

    //Scroll Trigger for In
    ScrollTrigger.create({
      trigger: $(this),
      //markers: true,
      //toggleActions — onEnter, onLeave, onEnterBack, and onLeaveBack
      //toggleActions: "play none none reverse",
      start: "top 84%",
      end: "top 32%",
      onEnter: () => {
        tm.play();
      },
    });

    //Scroll Trigger for Out
    ScrollTrigger.create({
      trigger: $(this),
      start: "top 101%",
      onLeaveBack: () => {
        tm.progress(0);
        tm.pause();
      },
    });
  });

  // Animation for Content
  $("[content-animation]").each(function () {
    
    let tc= gsap.timeline({paused:true});
    
    tc.fromTo(
      $(this),
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity:1,
        duration: 0.68,
        ease: "power3.out",
        //stagger: { /*amount: 0.64*/ each: 0.16 },
      }
    );

    ScrollTrigger.create({
      trigger: $(this),
      //markers: true,
      //toggleActions — onEnter, onLeave, onEnterBack, and onLeaveBack
      //toggleActions: "play none none reverse",
      start: "top 84%",
      end: "top 32%",
      onEnter: () => {
        tc.play();
      },
    });

    //Scroll Trigger for Out
    ScrollTrigger.create({
      trigger: $(this),
      start: "top 101%",
      onLeaveBack: () => {
        tc.progress(0);
        tc.pause();
      },
    });
    
  })


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

console.log("gsap works");
console.log("GitHub Dev + Pages");