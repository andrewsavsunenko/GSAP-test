class App {
  constructor() {
    this._runSplit();
    this._createMask();

    this.animatedText = [...document.querySelectorAll("[text-animate]")];

    this.aboutYearNumbers = [
      ...document.querySelectorAll("[timelineNumber-animate]"),
    ];

    this.heroTitleWrapper = document.querySelector(".hero__title--wrapper");
    this.heroTitleLines = [
      ...this.heroTitleWrapper.querySelectorAll(
        ".hero-title-item span.line span"
      ),
    ];
    this.heroButtonWrapper = document.querySelector(".btn__wrapper");

    this.visionPath = $(".vision__line--svg").drawsvg();

    this.footerLogoText = $(".footerLogoText");
    this.footerLogoWrapper = $(".footerLogoWrapper");

    this._textAnimate();
    this._dividersAnimate();
    this._timelineNumbersAnimate();
    this._heroTitleAnimate();
    this._footerLogoAnimate();

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

    const splitAboutTimeline = new SplitType("[timelineNumber-animate]", {
      types: "chars",
      tagName: "span",
    });

    const footerLogoSplit = new SplitType(".footerLogoText", {
      types: "chars",
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
          "<span style='display:block; padding-right:0.078rem;'>" +
          c +
          "</span>";
      });
  }

  _textAnimate() {
    this.animatedText.forEach((textNode) => {
      let tm = gsap.timeline({ paused: true });

      tm.fromTo(
        textNode.querySelectorAll("span.word span"),
        {
          yPercent: 95,
        },
        {
          yPercent: 0,
          duration: 1,
          ease: "power3.out",
          stagger: { each: 0.02 },
        }
      );

      ScrollTrigger.create({
        trigger: textNode,
        start: "top 80%",
        end: "top 28%",
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

  _timelineNumbersAnimate() {
    this.aboutYearNumbers.forEach((item) => {
      let tm = gsap.timeline({ paused: true });

      tm.fromTo(
        item.querySelectorAll("span.char"),
        {
          yPercent: 0,
        },
        {
          yPercent: -140,
          duration: 1.2,
          ease: "power2.out",
          stagger: { each: 0.12 },
        }
      );

      ScrollTrigger.create({
        trigger: item,
        start: "top 67%",
        end: "top 28%",
        onEnter: () => {
          tm.play();
        },
      });

      ScrollTrigger.create({
        trigger: item,
        start: "top 101%",
        onLeaveBack: () => {
          tm.progress(0);
          tm.pause();
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

  _footerLogoAnimate() {
    let tml = gsap.timeline({ paused: true });

    tml.fromTo(
      this.footerLogoText.querySelectorAll("span.char"),
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: { amount: 0.2 },
      }
    );

    ScrollTrigger.create({
      trigger: this.footerLogoWrapper,
      start: "top 67%",
      end: "top 28%",
      onEnter: () => {
        tm.play();
      },
    });

    ScrollTrigger.create({
      trigger: this.footerLogoWrapper,
      start: "top 80%",
      onLeaveBack: () => {
        tm.progress(0);
        tm.pause();
      },
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
      start: "top 48%",
      end: "bottom 12%",
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
