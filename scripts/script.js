function ViewModel() {

	this.firstSlide = ko.observable(true);
	this.secondSlide = ko.observable(false);
	this.thirdSlide = ko.observable(false);
	this.turnOnSlide2 = function(){
		this.firstSlide(false);
		this.secondSlide(true);

		// document.querySelector('.button2').addEventListener('click', function(){
		// 	document.querySelector('.secondBlock').style.height = '0px';
		// 	document.querySelector('.firstBlock').style.height = '0px';
		// 	for( var i = 0; i< document.getElementsByClassName('graphic-data').length; i++){
		// 		document.getElementsByClassName('graphic-data')[i].style.visibility = "hidden";
		// 	}
		// }, false)

		document.querySelector('.secondBlock').style.height = '0px';
		document.querySelector('.firstBlock').style.height = '0px';
		Array.prototype.forEach.call(document.getElementsByClassName('graphic-data'), function(el) {
			el.style.visibility = 'hidden';
		});
	}
	this.turnOnSlide1 = function(){
		this.firstSlide(true);
		this.secondSlide(false);
		// document.querySelector('.secondBlock').style.height = '0px';
		// document.querySelector('.firstBlock').style.height = '0px';
		// Array.prototype.forEach.call(document.getElementsByClassName('graphic-data'), function(el) {
		// 	el.style.visibility = 'hidden';
		// });
		moveGraphic();
	}



	var moveGraphic = function()
	{
		setTimeout(function(){
			document.getElementsByClassName('firstBlock')[0].style.height = '242px';
			document.querySelector('.secondBlock').style.height = '172px';
		}, 500);
		setTimeout(function(){
			// function bla(element, index, array) {
   //  			// element.style.visibility = 'visible';
   //  			element.style.visibility = 'visible';
			// };
			// var learn = ;

			Array.prototype.forEach.call(document.getElementsByClassName('graphic-data'), function(el) {
			    el.style.visibility = 'visible';
			});


			// for( var i = 0; i< document.getElementsByClassName('graphic-data').length; i++){
			// 	document.getElementsByClassName('text')[i].style.visibility = "visible";
			// }


			// for( var i= 0; i< document.querySelectorAll('.graphic-data').length; i++){
			// 	document.querySelectorAll('.graphic-data')[i].style.visibility = 'visible';
			// }
		}, 3500);
/*
.*/
	}
	moveGraphic();
}

ko.applyBindings(new ViewModel());