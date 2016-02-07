'use strict';
var app = angular.module("trackerApp");

//Setup our app's main controller (also takes care of our home view) -------------------------

//MAIN CONTROLLER
app.controller( 'trackerApp', ['$scope', '$routeParams', 'WellAPIService', trackerApp]);
function trackerApp($scope, $routeParams, WellAPIService){

	//vm for view model -------------
	var vm = this;

	//Define variables
	
};//End Controller


//controller for user's main dashboard
app.controller( 'Main', ['$scope', '$routeParams', 'WellAPIService', Main]);
function Main($scope, $routeParams, WellAPIService){

	//vm for view model -------------
	var vm = this;

	//define variables
	vm.wellList;
	vm.wellProduction;
	vm.curWellName = '';

	//functions
	
	//get allWells
	WellAPIService.callAPI('allWells').then(function(response){
		if(response){
			vm.wellList = response.data;
		} else {
			console.error("Did not recieve any data.");
		}
	});

	//get all production
	WellAPIService.callAPI('allProduction').then(function(response){
		if(response){
			vm.productionList = response.data;
		} else {
			console.error("Did not recieve any data.");
		}
	});


	//Delete well by ID -- id is passed by user click on view
	vm.deleteWell = deleteWell;
	function deleteWell(type, id){
		WellAPIService.callAPI('allWells', id).then(function(response){
			if(response){
				response = "Delected Successfully";
			} else {
				console.error("Did not recieve any data.");
			}
		});
	}

	//Get a well's production for the last 35 days
	vm.getWellProduction = getWellProduction;
	function getWellProduction(type, id, wellName){
		if(wellName){
			vm.curWellName = wellName;
		}
		
		WellAPIService.callAPI('wellProduction', id).then(function(response){
			if(response){
				vm.wellProduction = response.data;
			} else {
				console.error("Did not recieve any data.");
			}
		});
	}


};//End Controller



//Controller for a single well page
app.controller( 'aWell', ['$scope', '$routeParams', 'WellAPIService', aWell]);
function aWell($scope, $routeParams, Books){

	//vm for view model -------------
	var vm = this;

	//define variables and functions
	vm.aWell; //container for the current book's information
	vm.wellProduction;

	var type = 'aWell';
	WellAPIService.callAPI(type, $routeParams.id).then(function(response){
		if(response){
			vm.aWell = response.data;
		} else {
			console.error("Did not recieve any data.");
		}
	});

	// var type = 'wellProduction'
	// WellAPIService.callAPI(type, $routeParams.id).then(function(response){
	// 	if(repsone){
	// 		vm.wellProduction = response.data;
	// 	}
	// })
};//End Controller


//Controller to add a new well
app.controller( 'NewWell', ['$scope', 'WellAPIService', NewWell]);
function NewWell($scope, WellAPIService){

	//vm for view model -------------
	var vm = this;

	

	//define variables and functions



	// Books.callAPI(type, id, data).then(function(response){
	// 	if(response){
	// 		vm.ourNewBook = response.data;
	// 	} else {
	// 		console.error("Did not recieve any data.");
	// 	}
	// });

};//End Controller




/*END OF FILE*/