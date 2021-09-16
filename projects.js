import lightGallery from './node_modules/lightgallery/lightgallery.es5.js';

// Plugins
import lgThumbnail from './node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.es5.js'
import lgZoom from './node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js'



lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgZoom, lgThumbnail],
  licenseKey: 'your_license_key',
  speed: 500,
  
});


const $gallery1 = document.getElementById("gallery-1");
const gallery1 = window.lightGallery($gallery1, {
  dynamic: true,
  plugins: [lgZoom, lgThumbnail],
  dynamicEl: [
    {
      src:
        "./mcm_console/mcm_console_1.png",
      thumb:
        "./mcm_console/mcm_console_1.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
    },
    {
      src:
        "./mcm_console/mcm_console_2.png",
      thumb:
        "./mcm_console/mcm_console_2.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
                    <p>Published on September 14, 2016</p>
                </div>`
    },
    {
      src:
        "./mcm_console/mcm_console_3.png",
      thumb:
        "./mcm_console/mcm_console_3.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`
    },
    {
      src:
        "./mcm_console/mcm_console_4.png",
      thumb:
        "./mcm_console/mcm_console_4.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`
    }
  ]
});
$gallery1.addEventListener("click", () => {
  gallery1.openGallery(0);
});

const $gallery2 = document.getElementById("gallery-2");
const gallery2 = window.lightGallery($gallery2, {
  dynamic: true,
  plugins: [lgZoom, lgThumbnail],
  dynamicEl: [
    {
      src:
        "./lilySideboard/lilySideboard1.png",
      thumb:
        "./lilySideboard/lilySideboard1.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
    },
    {
      src:
        "./lilySideboard/lilySideboard2.png",
      thumb:
        "./lilySideboard/lilySideboard2.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
                    <p>Published on September 14, 2016</p>
                </div>`
    },
    {
      src:
        "./lilySideboard/lilySideboard3.png",
      thumb:
        "./lilySideboard/lilySideboard3.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`
    },
    {
      src:
        "./lilySideboard/lilySideboard4.png",
      thumb:
        "./lilySideboard/lilySideboard4.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`
    }
  ]
});
$gallery2.addEventListener("click", () => {
  gallery2.openGallery(0);
});

const $gallery3 = document.getElementById("gallery-3");
const gallery3 = window.lightGallery($gallery3, {
  dynamic: true,
  plugins: [lgZoom, lgThumbnail],
  dynamicEl: [
    {
      src:
        "./zhoaDining/zhoaDining1.png",
      thumb:
        "./zhoaDining/zhoaDining1.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`
    },
    {
      src:
        "./zhoaDining/zhoaDining2.png",
      thumb:
        "./zhoaDining/zhoaDining2.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
                    <p>Published on September 14, 2016</p>
                </div>`
    },
    {
      src:
        "./zhoaDining/zhoaDining3.png",
      thumb:
        "./zhoaDining/zhoaDining3.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`
    },
    {
      src:
        "./zhoaDining/zhoaDining4.png",
      thumb:
        "./zhoaDining/zhoaDining4.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`
    }
  ]
});
$gallery3.addEventListener("click", () => {
  gallery3.openGallery(0);
});