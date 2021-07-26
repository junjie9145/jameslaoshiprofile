import _ from "lodash";
import slider from "./pictureSlider";
import navSlide from "./navslide";
import "../node_modules/video.js/dist/video.min";
import "../node_modules/videojs-youtube/dist/Youtube.min"

const init = (() => {
    navSlide();
    slider()
})();

