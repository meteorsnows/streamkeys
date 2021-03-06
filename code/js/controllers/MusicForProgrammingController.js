;(function() {
  "use strict";

  var BaseController = require("BaseController");

  var controller = new BaseController({
    siteName: "Music for Programming",
    play: "#player_playpause",
    pause: "#player_playpause",
    playNext: "#player_ffw.active",
    playPrev: "#player_rew.active",
    song: "#episodes .selected"
  });

  controller.isPlaying = function() {
    return document.querySelector(this.selectors.playState).innerText === "[PAUSE]";
  };
})();
