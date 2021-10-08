const slider1 = document.getElementById("glide1");
const slider2 = document.getElementById("glide2");
const slider3 = document.getElementById("glide3");
const slider4 = document.getElementById("glide4");
const slider5 = document.getElementById("glide5");
const slider6 = document.getElementById("glide6");
const slider7 = document.getElementById("glide7");


if(slider1)
    new Glide(slider1,{
        type: "carousel",
        startAt: 0,
        autoPlay: true,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: "linear",
    }).mount();

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


if (slider3)
  new Glide(slider3,{
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

if (slider4)
  new Glide(slider4,{
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

if (slider5)
  new Glide(slider5,{
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

if (slider6)
  new Glide(slider6,{
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

if (slider7)
  new Glide(slider7,{
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

