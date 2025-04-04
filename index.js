class App {
  constructor() {
    this._runSplit();
    this._createMask();

    this.animatedText = [
      ...document.querySelectorAll("[text-animate] span.word span"),
    ];

    this.heroTitleWrapper = document.querySelector(".hero__title--wrapper");
    this.heroTitleLines = [
      ...this.heroTitleWrapper.querySelectorAll(
        ".hero-title-item span.line span"
      ),
    ];
    this.heroButtonWrapper = document.querySelector(".btn__wrapper");

    this.visionPath = $(".vision__line--svg").drawsvg();

    this.imgParallax = document.querySelectorAll("[parallax]");

    this._textAnimate();
    this._dividersAnimate();
    this._heroTitleAnimate();

    this._projectsListAnimate();
    this._visionLineDraw();
    this._partnersLogosAnimate();

    this._onResize();
  }

  _runSplit() {
    const splitText = new SplitType("[text-split]", {
      types: "words",
      tagName: "span",
    });

    const splitHeroTitle = new SplitType("[hero-title-animate]", {
      types: "lines",
      tagName: "span",
    });

    console.log("Text Split Run");
  }

  _createMask() {
    document
      .querySelectorAll(
        "[text-split] span.word, [hero-title-animate] span.line "
      )
      .forEach(function (item) {
        let c = item.innerHTML;
        item.innerHTML =
          "<span style='display:block; padding-right:1px;'>" + c + "</span>";
      });
  }

  _textAnimate() {
    this.animatedText.forEach((textNode) => {
      let tm = gsap.timeline({ paused: true });

      tm.fromTo(
        textNode,
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

      ScrollTrigger.create({
        trigger: textNode,
        start: "top 84%",
        end: "top 32%",
        onEnter: () => {
          tm.play();
        },
      });

      ScrollTrigger.create({
        trigger: textNode,
        start: "top 101%",
        onLeaveBack: () => {
          tm.progress(0);
          tm.pause();
        },
      });
    });
  }

  _dividersAnimate() {
    $("[divider-animation]").each(function () {
      let td = gsap.timeline({ paused: true });

      td.from($(this), {
        width: "0%",
        duration: 1.2,
        ease: "power1.out",
      });

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
  }

  _heroTitleAnimate() {
    window.addEventListener("load", () => {
      gsap.fromTo(
        [
          this.heroTitleLines,
          this.heroButtonWrapper.querySelector(".btn__link"),
        ],
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 1.2,
          delay: 2.4,
          ease: "power3.out",
          stagger: { amount: 0.2 },
        }
      );
    });
  }

  // section-based animations

  _projectsListAnimate() {
    $("[projectsList-animation]").each(function () {
      let tc = gsap.timeline({ paused: true });

      if (window.innerWidth > 991) {
        tc.fromTo(
          $(this),
          { yPercent: 42 }, //Desktop
          {
            yPercent: 0,
            duration: 0.68,
            ease: "power2.out",
          }
        );
      } else if (window.innerWidth < 479) {
        tc.fromTo(
          $(this),
          { yPercent: 10 }, //Mobile
          {
            yPercent: 0,
            duration: 0.68,
            ease: "power2.out",
          }
        );
      }

      ScrollTrigger.create({
        trigger: $(this),
        start: "top 96%",
        end: "top 72%",
        onEnter: () => {
          tc.play();
        },
      });

      ScrollTrigger.create({
        trigger: $(this),
        start: "top 120%",
        onLeaveBack: () => {
          tc.progress(0);
          tc.pause();
        },
      });
    });
  }

  _partnersLogosAnimate() {
    $("[partners-logo-wrapper]").each(function () {
      let tc = gsap.timeline({ paused: true });

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
      });

      ScrollTrigger.create({
        trigger: $(this).find(".logo__img__b"),
        start: "top 120%",
        onLeaveBack: () => {
          tc.progress(0);
          tc.pause();
        },
      });
    });
  }

  _visionLineDraw() {
    ScrollTrigger.create({
      trigger: this.visionPath,
      start: "top 28%",
      end: "bottom 48%",
      onUpdate: (self) => this.visionPath.drawsvg("progress", self.progress),
    });
  }

  _onResize() {
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
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new App();
});

console.log("gsap works");
console.log("GitHubPages Worked");
