let userApp		= angular.module("userApp", []);

userApp.service('Api',function($http){
	return function(){
		return $http.get('api.json');
	}
});

userApp.controller('registerUserController', ($scope,$http,Api)=>{
	$scope.data = {
		first_name : $scope.first_name,
		last_name : $scope.last_name,
		username : $scope.username,
		password : $scope.password,
		phone_number : $scope.phone_number,
		role_id : $scope.role_id
	}
	
	$scope.registerUser = ()=>{
		Api()
		.then(function(api){
			$http({
				url : api.data.userLocal,
				method : 'POST',
				data : $scope.data
			})
			.then(result=>{
				console.log(result);
			})
			.catch(err=>{
				console.log(err);
			})
		})
	} 
});