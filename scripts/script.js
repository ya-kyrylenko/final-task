function ViewModel() {

	this.numperDVT=ko.observable();
	this.numberPE=ko.observable();
	// var a = this.numperDVT() * 0.925;
	// var bc = 182 * (0.122 * a) + 2 * 8 * (a - 0.122 * a);
	// var e = (a - a * 0.122) * (9 + 5); 
	// var g = (2 * 8 * (a - 0.122 * a)) * 0.064;
	// var h = 3 * a * 0.52;
	// var a = this.numberPE() * 0.85;
	// var bc = 182 * (a * 0.176) + 2 * 8 * (a - 0.176 * a);
	// var i  = (a - a * 0.176) * (9 + 5);
	// var j = a * 0.896;


	this.numberPatients = ko.computed(function() {
		var a = this.numperDVT() * 0.925;
		if (this.numperDVT()===undefined || this.numperDVT()===""){
			return "[A]";
		}
		else return a.toFixed(2);
	},this);
	
	this.injections = ko.computed(function() {
		var a = this.numperDVT() * 0.925;
		if (this.numperDVT()===undefined || this.numperDVT()===""){
			return "[B+C]";
		}
		else return (182 * (0.122 * a) + 2 * 8 * (a - 0.122 * a)).toFixed();
	},this);

	this.visitsINR = ko.computed(function() {
		var a = this.numperDVT() * 0.925;
		if (this.numperDVT()===undefined || this.numperDVT()===""){
			return "[E]";
		}
		else return ((a - a * 0.122) * (9 + 5)).toFixed();
	},this);

	this.visitsNurse = ko.computed(function() {
		var a = this.numperDVT() * 0.925;
		if (this.numperDVT()===undefined || this.numperDVT()===""){
			return "[G]";
		}
		else return (2 * 8 * (a - 0.122 * a)*0.064).toFixed();
	},this);

	this.daysSaved = ko.computed(function() {
		var a = this.numperDVT() * 0.925;
		if (this.numperDVT()===undefined || this.numperDVT()===""){
			return "[H]";
		}
		else return (3*a * 0.52).toFixed();
		
	},this);

	this.numberPatients2 = ko.computed(function() {
		var a = this.numberPE() * 0.85;
		if (this.numberPE()===undefined || this.numberPE()===""){
			return "[A]";
		}
		else return a.toFixed(2);
	},this);

	this.injections2 = ko.computed(function() {
		var a = this.numberPE() * 0.85;
		if (this.numberPE()===undefined || this.numberPE()===""){
			return "[B+C]";
		}
		else return (182 * (0.176 * a) + 2 * 8 * (a - 0.176 * a)).toFixed();
	},this);

	this.visitsINR2 = ko.computed(function() {
		var a = this.numberPE() * 0.85;
		if (this.numberPE()===undefined || this.numberPE()===""){
			return "[I]";
		}
		else return ((a - a * 0.176) * (9 + 5)).toFixed();
	},this);

	this.daysSaved2 = ko.computed(function() {
		var a = this.numberPE() * 0.85;
		if (this.numberPE()===undefined || this.numberPE()===""){
			return "[J]";
		}
		else return (a * 0.896).toFixed();
		
	},this);

	this.injectons3 = ko.computed( function(){
		if (this.numberPE()===undefined || this.numberPE()==="" || this.numperDVT()===undefined || this.numperDVT()===""){
			return "[DVT+PE]"
		}
		else return +(this.injections()) + +(this.injections2());
	}, this);

	this.visitsINR3 = ko.computed(function(){
		if (this.numberPE()===undefined || this.numberPE()==="" || this.numperDVT()===undefined || this.numperDVT()===""){
			return "[DVT+PE]"
		}
		else return +(this.visitsINR()) + +(this.visitsINR2());
	}, this);

	this.visitsNurse3 = ko.computed(function(){
		if (this.numberPE()===undefined || this.numberPE()==="" || this.numperDVT()===undefined || this.numperDVT()===""){
			return "[DVT]"
		}
		else return +(this.visitsNurse());
	}, this);

	this.daysSaved3 = ko.computed(function(){
		if (this.numberPE()===undefined || this.numberPE()==="" || this.numperDVT()===undefined || this.numperDVT()===""){
			return "[DVT+PE]"
		}
		else return +(this.daysSaved()) + +(this.daysSaved2());
	}, this);

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
	}

	moveGraphic();
}

ko.applyBindings(new ViewModel());