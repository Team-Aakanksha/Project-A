const slider2 = document.getElementById("glide2");

if (slider2)
    new Glide(slider2,{
      type: "slider",
      startAt: 0,
      bound: true,
      autoPlay: false,
      hoverpause: true,
      perView: 4,
      breakpoints: {
        1200: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
      },
      animationDuration: 200,
      animationTimingFunc: "linear",
  }).mount();