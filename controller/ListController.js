app.controller('ListController',function($scope)
{
	$scope.data = {
		list :[{id:1 ,name:'Purchase Miles Integration'
	},
	{id:2 ,name:'Star Online Retro'}
	]
};

$scope.newList="";

$scope.add = function(){
	$scope.data.list.push({id:Math.random().toString(36).slice(2),name:$scope.newList});
	$scope.newList='';
}



$scope.delete = function(index)
{
	
	$scope.data.list.splice(index,1);
}

}

)