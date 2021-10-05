gsap.registerPlugin(ScrollTrigger);

gsap.to(".square",{
    // x: 1000,
    duration: 8,
    scrollTrigger: {
        trigger: ".square2",
        start: "top 80%",
        end: "top 30%",
        // end: () => `+=${document.querySelector(".square").offsetHeight}`,
        // //involkeした要素と同じheightになる:offsetHeight
        scrub: 4,
        //scrub: スクロールの停止に合わせて動きが変わる、boolian valuのtrueもしくは4など秒数を入れれることもできる
        pin: ".square",
        //pin: trueでhorizontalに進み、スクロールによって高さは変わらない。endの位置に来ると停止する
        pinSpacing: true,
        //pinSpacing:対象物へのpadding
        toggleActions: "restart none none none",
        // toggleActions: "restart pause resume complete",
        // play pause resume reverse restart reset complete none
        //              onEnter/onLeave/onEnterBack/onLeaveBack
        // onEnter:animationが終わってからも動かしたいときにはrestart
        // onLeave :reverseにするanimationが終わってからreverseするアニメがある(元に戻る)
        //          pauseにするとendの位置に達したらそこでanimationが止まる
        // onEnterBack:resumeにするとpauseで途中までで止めておいている場合、またstart位置になると再生する
        // onLeaveback: resetにすると、start位置になれば元の場所に戻る
        //              completeにするとstart位置にくるとcompleteのところまでjumpする
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "3rem",
        },
        // toggleClass: "red"
    }
})