$(document).ready(function () {

    $('.default_button').vibox({
        src: 'http://arabesq.vitisch.de/online-menu',
        paddingColor: '#ffffff', // default color of content background ( hex or color )
        borderRadius: 0, // default border-radius of content (integer)
        padding: 0, // default padding (integer)
        margin: 35, // margin from top and bottom(if responsive, integer)
        responsive: true, // responsive
        width: 560, // max-width or fixed width( integer )
        height: 340, // fixed height or responsive( integer )
        preload: false // load on document load or on button click
    });

    // button 1,
    // preload:false, no src
    $('.button_1').vibox({
        src: ''
    });

    // button 2
    // Default options, src is set, preload: true
    $('.button_2').vibox({
        src: 'http://arabesq.vitisch.de/online-menu',
        preload: true
    });

    // button 3
    // Default options, responsive: false
    $('.button_3').vibox({
        src: 'http://arabesq.vitisch.de/online-menu',
        responsive: false
    });


    // button 4
    //     Default padding ( 0 ) and borderRadius is set
    $('.button_4').vibox({
        src: 'http://arabesq.vitisch.de/online-menu',
        borderRadius: 20,
        padding: 0
    });

    // button 5
    //     Padding and borderRadius is set
    $('.button_5').vibox({
        src: 'http://arabesq.vitisch.de/online-menu',
        borderRadius: 20,
        padding: 20
    });


    // button 6
    // Callback functions testing
    $('.button_6').vibox({
        src: 'http://arabesq.vitisch.de/online-menu',
        onClosed: function () {
            console.log('onClosed'); // custom function
        },
        beforeClosed: function () {
            console.log("beforeClosed"); // custom function
        },
        onOpened: function () {
            console.log('onOpened'); // custom function
        },
        beforeOpened: function () {
            console.log('beforeOpened'); // custom function
        }
    });


    // all possible custom values
    $('.custom_button').vibox({
        src: 'http://arabesq.vitisch.de/online-menu',
        paddingColor: 'gray', // custom color of content background
        padding: 30, // custom padding (integer)
        margin: 100, // margin from top and bottom(if responsive, integer)
        responsive: true, // responsive
        width: 980, // max-width or fixed width( integer )
        height: 500, // fixed height or responsive( integer )
        preload: true, // load on document load or on button click
        borderRadius: 10, // set custom border radius for content
        onClosed: function () {
            console.log('onClosed'); // custom function
        },
        beforeClosed: function () {
            console.log("beforeClosed"); // custom function
        },
        onOpened: function () {
            console.log('onOpened'); // custom function
        },
        beforeOpened: function () {
            console.log('beforeOpened'); // custom function
        }
    });

});
