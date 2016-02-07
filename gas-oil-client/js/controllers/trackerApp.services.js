var app = angular.module("trackerApp");

app.service( 'WellAPIService', ['$http', WellAPIService]);

function WellAPIService($http){
	return {
			rootUrl : 'http://localhost:3000/api/',

			callinfo : {
				method: 'GET',
				url: '/',
				data: {}
			},

			//Setup switch to take care of all the routes to the serverside
			//this will update our call info 
			setCall : function(type, id){
				switch(type)
				{
					case 'allWells' :
						this.callinfo.method = 'GET';
						this.callinfo.url = this.rootUrl + "wells/";
					break;

					case 'aWell' :
						this.callinfo.method = 'GET';
						this.callinfo.url = this.rootUrl + "wells/" + id;
					break;

					case 'delete' :
						this.callinfo.method = 'DELETE';
						this.callinfo.url = this.rootUrl + "wells/" + id;
					break;

					case 'update' :
						this.callinfo.method = 'PUT';
						this.callinfo.url = this.rootUrl + "wells/" + id;
					break;

					case 'add' :
						this.callinfo.method = 'POST';
						this.callinfo.url = this.rootUrl + "wells/";
					break;
					case 'allProduction' :
						this.callinfo.method = 'GET';
						this.callinfo.url = this.rootUrl + "production/";
					break;
					case 'wellProduction' :
						this.callinfo.method = 'GET';
						this.callinfo.url = this.rootUrl + "production/" + id;
					break;
					default: //if there is no matching type return false
						return false;
				}
				//if we do match a type, we will return true;
				return true;
			},


			callAPI : function(type, id, data){
				//setup our api call and return true if successful
				var goAhead = this.setCall(type, id);

				if( goAhead )//if api successful then...
				{
					if(data == {} || data == null || data == undefined)
					{//if we have no data, then we make the api call like so		
						return $http(this.callinfo);
					} else { //if we have data, then we pass our data
						return $http(this.callinfo, data);
					}
				}
			}

	}
}; //END BOOKS