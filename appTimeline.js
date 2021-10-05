gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".box", 
    //変えたい対象物をtriggerにする
    start: "top 80%",
    end: "top 50%",
    markers: true,
    toggleClass: "box-red"
    //変更内容をtoggleClassにおく
})


//Timeline
// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".box",
//         markers: true,
//         start: "top 80%",
//         end: "top 30%",
//         scrub: 1 
//     }
// });

// tl.to(".box", {x: 500, duration:5})
//   .to(".box", {y:200, duration:3})
//   .to(".box", {x:0, duration:2})
