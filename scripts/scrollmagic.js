$(function () { // wait for document ready
      // init controller
      var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                  triggerHook: 'onLeave',
                  duration: "100%"
            }
      });

      // get all slides
      var slides = document.querySelectorAll("section");

      // create scene for every slide
      for (var i=0; i<slides.length; i++) {
            new ScrollMagic.Scene({
                        triggerElement: slides[i]
                  })
                  .setPin(slides[i], {pushFollowers: false})
                  .addTo(controller);
      }
});




    