app.controller('DetailController',function($scope, $state, $stateParams){

	$scope.data={
		list:[
			{listId:1,id:1,completed:false,name:'Aggrement on BRD'},
			{listId:1,id:2,completed:true,name:'Preparing Scoping Document'},
			{listId:1,id:3,completed:false,name:'Approval for SD'},
			{listId:1,id:4,completed:false,name:'Analysys for Development'},
			{listId:1,id:5,completed:false,name:'Design for Development'},
			{listId:1,id:6,completed:false,name:'Implementation'},
			{listId:1,id:7,completed:false,name:'Development Unit Test'},
			{listId:1,id:8,completed:false,name:'Internal Testing'},
			{listId:1,id:9,completed:false,name:'User Acceptance Test'},
			{listId:2,id:10,completed:false,name:'Deployment to Production'}
		]
	};
	$scope.itemName = '';
	$scope.listId=$stateParams.id;
	$scope.showAll=false;
	$scope.newtodo=""

	$scope.currentItems=function(){
		return $scope.data.list.filter((listItem) => listItem.listId == $scope.listId);
	};

	$scope.add = function(){
		var newItem = {
			listId:$scope.listId,
			id:Math.random().toString(36).slice(2),
			completed:false,
			name: $scope.itemName};
		$scope.data.list.push(newItem);
		$scope.itemName = '';	
	}

	$scope.filter2 = function(actual,val){
		if(actual.completed == $scope.showAll && actual.listId == $scope.listId)
			return true;
		return false;
	}

	$scope.returnFilter=function(){
		if($scope.showAll)
			return {name};
		else
			return {completed: false}
	}

});