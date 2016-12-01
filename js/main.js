// JavaScript Document

(function() {
	"use strict";
	console.log(" SEAF fired");
	
	//variables
	var hovers = document.querySelectorAll(".hover");
	
	//functions
	function showOverlay(e){
		var thisImg = e.currentTarget;
		console.log(thisImg);
	}
	
	//listeners
	for(var i=0; i<hovers.length; i++){
	hovers[i].addEventListener("mouseover", showOverlay, false);
		}
	})();