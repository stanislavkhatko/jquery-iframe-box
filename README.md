<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://github.com/stanislavkhatko/jquery-iframe-box">
    <img src="logo.jpeg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">jQuery iframe popup</h3>

  <p align="center">
    jQuery popup plugin for an iframe. Configure url and open website in a popup.
    <br />
    <br />
    <a href="https://github.com/stanislavkhatko/jquery-iframe-box/issues">Report Bug</a>
    ·
    <a href="https://github.com/stanislavkhatko/jquery-iframe-box/issues">Request Feature</a>
  </p>
</div>





## About The Project

[![iframe box Screen Shot][product-screenshot]](https://example.com)



### Built With
[![JQuery][JQuery.com]][JQuery-url]

### Usage
Check index.html with example to use

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/stanislavkhatko/jquery-iframe-box.svg?style=for-the-badge
[contributors-url]: https://github.com/stanislavkhatko/jquery-iframe-box/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/stanislavkhatko/jquery-iframe-box.svg?style=for-the-badge
[forks-url]: https://github.com/stanislavkhatko/jquery-iframe-box/network/members
[stars-shield]: https://img.shields.io/github/stars/stanislavkhatko/jquery-iframe-box.svg?style=for-the-badge
[stars-url]: https://github.com/stanislavkhatko/jquery-iframe-box/stargazers
[issues-shield]: https://img.shields.io/github/issues/stanislavkhatko/jquery-iframe-box.svg?style=for-the-badge
[issues-url]: https://github.com/stanislavkhatko/jquery-iframe-box/issues
[license-shield]: https://img.shields.io/github/license/stanislavkhatko/jquery-iframe-box.svg?style=for-the-badge
[license-url]: https://github.com/stanislavkhatko/jquery-iframe-box/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/stanislavkhatko
[product-screenshot]: screenshot.jpeg

[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
