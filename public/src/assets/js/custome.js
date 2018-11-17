/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
Author:         HTMLMATE Team

-------------------------------------------------------------------------------- */
(function () {

    "use strict";

    var vidco = {
        init: function () {
            this.Basic.init();
        },

        Basic: {
            init: function () {
                this.videoPopup();
            },


            /* Start of Video popup
            ================================================*/
            videoPopup: function () {
                jQuery('.popup-with-zoom-anim').magnificPopup({
                	disableOn: 200,
                	type: 'iframe',
                	mainClass: 'mfp-fade',
                	removalDelay: 160,
                	preloader: false,
                	fixedContentPos: false
                });

            },

            /* - End Of Video popup
            ================================================*/

        }
    }
    jQuery(document).ready(function () {
        //vidco.init();
        jQuery('.dropdown-toggle').dropdown();
    });

})();