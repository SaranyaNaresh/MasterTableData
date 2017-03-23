

(function () {
    var accountStatusApp = angular.module("accountStatusApp");

    var StatusCtrl = function ($scope, $http)
    {
    	$scope.working = 'Angular is Working';
        //common error function
    	var onError = function (error) {
            $scope.error = error.data;
        };
        //end error function

        //get all persone
    	var onStatusGetCompleted = function(response){
    		$scope.status = response.data;
            console.log($scope.status);
    	}


        var refresh = function(){
        	$http.get('/status')
        		.then(onStatusGetCompleted, onError);
        	console.log('Response received...');
        }

        refresh();
    	//end get all persons

        //get persons by Id
        var onGetByIdCompleted = function(response){
            $scope.status = response.data;
            console.log(response.data);
        };

        $scope.searchStatus = function(id){
            $http.get('/status/' + id)
                    .then(onGetByIdCompleted, onError);
            console.log(id);
        };
        //end get person by Id

        //add new person
        var onAddStatusCompleted = function(response){
            $scope.status = response.data;
            console.log(response.data);
            refresh();
        };
        $scope.addStatus = function(status){
            $http.post('/addStatus', status)
                    .then(onAddStatusCompleted, onError);
            console.log(person);
        };
        //end add new person

        //delete person
        $scope.deleteStatus = function(id){
            $http.delete('/deleteStatus/' + id)
                .then(onStatusDeleteCompleted,  onError);
            console.log(id);
        };

        var onStatusDeleteCompleted = function(response){
            $scope.status = response.data;
            console.log(response.data);
            refresh();
        };
        //end delete person

        //update person
        $scope.updateStatus = function(status){
            $http.put("/updateStatus", status)
                .then(onUpdateStatusCompleted, onError);
                    console.log(status);
        };

        var onUpdateStatusCompleted = function(response){
            $scope.status = null;//response.data;
            console.log(response.data);
            refresh();
        };

    };
    accountStatusApp.controller('StatusCtrl', StatusCtrl);
    }())


