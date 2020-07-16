//type writing animation
var h4 = document.querySelector('.main .home .txt h4');

var typewriter = new Typewriter(h4, {
    loop: true
});

typewriter.typeString('Front End Developer!')
    .pauseFor(100)
    .deleteAll()
    .typeString('Front End Designer')
    .pauseFor(100)
    .deleteAll()
    .typeString('Web Designer')
    .pauseFor(100)
    .start();

AOS.init({
 duration: 1200
});

