// check if jQuery linked and version is between 1.9.1 and 4
if (typeof jQuery === 'undefined') {
    throw new Error('Iframe-modal plugin requires jQuery')
}
+function ($) {
    'use strict';
    var version = $.fn.jquery.split(' ')[0].split('.');
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
        throw new Error('Iframe-modal plugin requires jQuery version 1.9.1 or higher, but lower than version 4')
    }
}(jQuery);

(function ($) {
    'use strict';

    // default values
    var defaults = {
        padding: 0,
        paddingColor: '#ffffff',
        borderRadius: 0,
        margin: 35,
        responsive: true,
        width: 560,
        height: 340,
        preload: false,
        src: '',
        onClosed: $.noop,
        beforeClosed: $.noop,
        onOpened: $.noop,
        beforeOpened: $.noop
    };

    // Vibox constructor
    function ViboxModal(element, options) {
        this.element = element;
        this.modal = {};
        this.options = $.extend({}, defaults, options);

        this.overlay = $('<div class="vibox-overlay">');
        this.content = $('<div class="vibox-content">');
        this.iframe = $('<iframe class="vibox-iframe" src="' + this.options.src + '"></iframe>');
        this.close = $('<span class="vibox-close">&times;</span>');

        this.content.css({
            'padding': this.options.padding,
            'margin-top': this.options.margin,
            'background-color': this.options.paddingColor,
            'borderRadius': this.options.padding == 0 ? 0 : this.options.borderRadius,
            'width': this.options.responsive ? '100%' : this.options.width,
            'max-width': this.options.responsive ? this.options.width : 'auto',
            'height': this.options.responsive ? $(window).height() - (this.options.margin * 2) : this.options.height,
            'max-height': this.options.responsive ? this.options.height : 'auto'
        });

        this.init();
    }

    // Initialise methods
    ViboxModal.prototype.init = function () {
        if (this.options.preload == true) {
            // if preload, load modal immediately
            attachEventListeners(this, insertModal(this));
        } else {
            // else set listener
            attachEventListeners(this);
        }
    };

    //method to insert necessary html markup
    var insertModal = function ($this) {
            $this.content.append($this.close, $this.iframe);
            $this.overlay.append($this.content);
            $this.modal = ($this.overlay);
            $('body').append($this.overlay);
        },
        // set click listener on button
        attachEventListeners = function ($this) {

            // set handler on show modal button
            $this.element.click(function () {
                if ($this.options.preload == false) {
                    // if iframe is not on the page
                    if($.isEmptyObject($this.modal)) {
                        insertModal($this);
                    }
                }
                $this.options.beforeOpened();
                openModal($this);
            });

            // prevent closing of modal on content.click
            $this.content.click(function (e) {
                e.stopPropagation();
            });

            // handler on close
            $this.close.click(function () {
                return closeModal($this);
            });
            // handler on overlay close
            $this.overlay.click(function () {
                return closeModal($this);
            });

            // function to resize modal box
            $(window).resize(function () {
                resizeModal($this);
            });
        },
        // open modal window
        openModal = function ($this) {
            $('html').addClass('vibox-fixed-body');
            $this.overlay.fadeIn($this.options.onOpened());
        },
        // hide modal window
        closeModal = function ($this) {
            $this.options.beforeClosed();
            $this.overlay.fadeOut($this.options.onClosed, function () {
                $('html').removeClass('vibox-fixed-body');
            });
        },
        // resize modal window
        resizeModal = function ($this) {
            var modalHeight = $(window).height() - ($this.options.margin * 2);
            var responsiveModalHeight = modalHeight > $this.options.height ? $this.options.height : modalHeight;
            $this.content.css({
                'height': $this.options.responsive ? responsiveModalHeight : $this.options.height
            });
        };

    $.fn.vibox = function (options) {
        return new ViboxModal(this, options);
    };
}(jQuery));