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


//filter function

//declaring the buttons of the filter
var btns = document.querySelectorAll('.main .portofolio .btns button');
//declaring the tiles of the filter
var tiles = document.querySelectorAll('.main .tiles .tile');
//adding functions to the different buutons
btns[0].addEventListener('click',function(){
	for(var j = 0; j < tiles.length; j++){
			tiles[j].style.display = 'block'
		}
		this.style.backgroundColor = '#FF7E71';
		for(var i = 1; i < btns.length; i++){
			btns[i].style.backgroundColor = 'transparent'
		}
	document.querySelector('.main .tiles').style.gridTemplateColumns = 'auto auto auto'
})
for(var i = 1; i < btns.length; i++){
	btns[i].addEventListener('click',function(){
		for(var j = 0; j < btns.length; j++){
			btns[j].style.backgroundColor = 'transparent'
		}
		this.style.backgroundColor = '#FF7E71'
		for(var j = 0; j < tiles.length; j++){
			tiles[j].style.display = 'none'
			console.log('none')
		}
		for(var j = 0; j < tiles.length; j++){
			if( this.getAttribute('data-filter') == tiles[j].getAttribute('data-filter')){
				tiles[j].style.display = 'block'
				console.log('block')
			}
		}
		document.querySelector('.main .tiles').style.gridTemplateColumns = 'auto auto'
	})
}

//slide show


var showBtns = document.querySelectorAll('.fa-eye');
var owlItems = document.querySelectorAll('.owl-carousel .owl-item');
var overlay = document.querySelector('.overlay');
var colsebtns = document.querySelectorAll('.close');

for(var i = 0; i < showBtns.length; i++){
	showBtns[i].addEventListener('click',function(){
		var order = this.parentElement.parentElement.getAttribute('data-order');
		overlay.style.display = 'flex';
		$('.overlay .owl-carousel').owlCarousel({
			items: 1,
			autoplay : true,
			loop : true,
			nav: true,
			dots : false,
			dotsEach : 1,
			startPosition: order    
		})	
		

	})
}
for(var i = 0; i < colsebtns.length; i++){
	colsebtns[i].addEventListener('click',function(){
		overlay.style.display = 'none';
	})

}



//review carousel

$('.review .owl-carousel').owlCarousel({
			items: 1,
			autoplay : true,
			loop : true,
			dots : true,
			dotsEach : 1, 
		})	






