# jquery-iframe-box
jQuery popup plugin for an iframe

### Initialisation
```javascript
 $('.#button_id').vibox({
        src: 'http://arabesq.vitisch.de/online-menu',
        paddingColor: '#ffffff', // default color of content background ( hex or color )
        borderRadius: 0, // default border-radius of content (integer)
        padding: 0, // default padding (integer)
        margin: 35, // margin from top and bottom(if responsive, integer)
        responsive: true, // responsive
        width: 560, // max-width or fixed width( integer )
        height: 340, // fixed height or responsive( integer )
        preload: false, // load on document load or on button click
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
```

see index.html for more examples
