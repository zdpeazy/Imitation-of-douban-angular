/**
 * Created by Administrator on 2016/10/22.
 */

angular.module('HomeListComp', [])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('homelistnew', {
				url: '/homelistnew',
				templateUrl: 'components/homeList/homeList.html',
				controller: 'HomeListNewCtrl',
				css: 'components/homeList/homeList.css'
			})
			.state('homelisthot', {
				url: '/homelisthot',
				templateUrl: 'components/homeList/homeList.html',
				controller: 'HomeListHotCtrl',
				css: 'components/homeList/homeList.css'
			})
			.state('homelistpic', {
				url: '/homelistpic',
				templateUrl: 'components/homeList/homeList.html',
				controller: 'HomeListPicCtrl',
				css: 'components/homeList/homeList.css'
			})
			.state('homelistfree', {
				url: '/homelistfree',
				templateUrl: 'components/homeList/homeList.html',
				controller: 'HomeListFreeCtrl',
				css: 'components/homeList/homeList.css'
			})
			
			.state('columnlisthot', {
				url: '/columnlisthot',
				templateUrl: 'components/homeList/homeList.html',
				controller: 'ColListHotCtrl',
				css: 'components/homeList/homeList.css'
			})
			.state('columnlistupdata', {
				url: '/columnlistupdata',
				templateUrl: 'components/homeList/homeList.html',
				controller: 'ColListUpdataCtrl',
				css: 'components/homeList/homeList.css'
			})
			.state('serlisthot', {
				url: '/serlisthot',
				templateUrl: 'components/homeList/homeList.html',
				controller: 'SerListHotCtrl',
				css: 'components/homeList/homeList.css'
			})
			.state('serlistupdata', {
				url: '/serlistupdata',
				templateUrl: 'components/homeList/homeList.html',
				controller: 'SerListUpdataCtrl',
				css: 'components/homeList/homeList.css'
			})
	})

.filter('addHomeListStyle', function() {

	return function(element) {
		var num = [];
		element.split(' ').forEach(function(item) {
			if(parseInt(item) || parseInt(item) == 0) {
				num.push(item);
			}
		});
		if(num.length >= 1) {
			num.unshift('￥');
		}
		return num.join('');
	}

})

.service('HomeListService', ['$http', function($http) {

	this.getNewData = function() {
		return $http.get('./data/home.new.json');
	}
	this.getHotData = function() {
		return $http.get('./data/home.hot.json');
	}
	this.getPicData = function() {
		return $http.get('./data/home.pic.json');
	}
	this.getFreeData = function() {
		return $http.get('./data/home.free.json');
	}

	this.getcolumnHotData = function() {
		return $http.get('data/columns.hot.json');
	}

	this.getcolumnUpdataData = function() {
		return $http.get('data/columns.update.json');
	}

	this.getSerHotData = function() {
		return $http.get('data/serial.hot.json');
	}

	this.getSerUpdataData = function() {
		return $http.get('data/serial.update.json');
	}
	
}])

.controller('HomeListNewCtrl', ['$scope', 'HomeListService','$state', function($scope, HomeListService,$state) {

	$scope.letterLimit = 10;
	$scope.More = true;

	HomeListService.getNewData().success(function(data) {

		$scope.homelistData = data.books;
		$scope.len = data.books.length;

	})

	$scope.reloadMore = function() {

		$scope.letterLimit = $scope.letterLimit + 5;

		if($scope.letterLimit > $scope.len) {
			$scope.More = false;
		}
	}

	$scope.goEbook = function(Id){

		window.localStorage.setItem('ebookNeedKey',Id);
		$state.go('ebook');
	}

}])

.controller('HomeListHotCtrl', ['$scope', 'HomeListService','$state', function($scope, HomeListService,$state) {

	$scope.letterLimit = 10;
	$scope.More = true;

	HomeListService.getHotData().success(function(data) {

		$scope.homelistData = data.books;
		$scope.len = data.books.length;

	})

	$scope.reloadMore = function() {

		$scope.letterLimit = $scope.letterLimit + 5;

		if($scope.letterLimit > $scope.len) {
			$scope.More = false;
		}
	}
	$scope.goEbook = function(Id){

		window.localStorage.setItem('ebookNeedKey',Id);
		$state.go('ebook');
	}

}])

.controller('HomeListPicCtrl', ['$scope', 'HomeListService', '$state',function($scope, HomeListService,$state) {

	$scope.letterLimit = 10;
	$scope.More = true;

	HomeListService.getPicData().success(function(data) {
		$scope.homelistData = data.books;
		$scope.len = data.books.length;
	})

	$scope.reloadMore = function() {

		$scope.letterLimit = $scope.letterLimit + 5;

		if($scope.letterLimit > $scope.len) {
			$scope.More = false;
		}
	}
	$scope.goEbook = function(Id){
		window.localStorage.setItem('ebookNeedKey',Id);
		$state.go('ebook');
	}
}])

.controller('HomeListFreeCtrl', ['$scope', 'HomeListService','$state', function($scope, HomeListService,$state) {

	$scope.letterLimit = 10;
	$scope.More = true;

	HomeListService.getFreeData().success(function(data) {

		$scope.homelistData = data.books;
		$scope.len = data.books.length;

	})

	$scope.reloadMore = function() {

		$scope.letterLimit = $scope.letterLimit + 5;

		if($scope.letterLimit > $scope.len) {
			$scope.More = false;
		}
	}
	$scope.goEbook = function(Id){

		window.localStorage.setItem('ebookNeedKey',Id);
		$state.go('ebook');
	}

}])

.controller('ColListHotCtrl', ['$scope', 'HomeListService', '$state',function($scope, HomeListService,$state) {

	$scope.letterLimit = 10;
	$scope.More = true;

	HomeListService.getcolumnHotData().success(function(data) {

		$scope.homelistData = data.books;
		$scope.len = data.books.length;

	})

	$scope.reloadMore = function() {

		$scope.letterLimit = $scope.letterLimit + 5;

		if($scope.letterLimit > $scope.len) {
			$scope.More = false;
		}
	}
	$scope.goEbook = function(Id){

		window.localStorage.setItem('ebookNeedKey',Id);
		$state.go('ebook');
	}

}])

.controller('ColListUpdataCtrl', ['$scope', 'HomeListService','$state', function($scope, HomeListService,$state) {

	$scope.letterLimit = 10;
	$scope.More = true;

	HomeListService.getcolumnUpdataData().success(function(data) {

		$scope.homelistData = data.books;
		$scope.len = data.books.length;

	})

	$scope.reloadMore = function() {

		$scope.letterLimit = $scope.letterLimit + 5;

		if($scope.letterLimit > $scope.len) {
			$scope.More = false;
		}
	}
	$scope.goEbook = function(Id){

		window.localStorage.setItem('ebookNeedKey',Id);
		$state.go('ebook');
	}

}])

.controller('SerListHotCtrl', ['$scope', 'HomeListService','$state', function($scope, HomeListService,$state) {

	$scope.letterLimit = 10;
	$scope.More = true;

	HomeListService.getSerHotData().success(function(data) {

		$scope.homelistData = data.books;
		$scope.len = data.books.length;

	})

	$scope.reloadMore = function() {

		$scope.letterLimit = $scope.letterLimit + 5;

		if($scope.letterLimit > $scope.len) {
			$scope.More = false;
		}
	}
	$scope.goEbook = function(Id){

		window.localStorage.setItem('ebookNeedKey',Id);
		$state.go('ebook');
	}

}])

.controller('SerListUpdataCtrl', ['$scope', 'HomeListService','$state', function($scope, HomeListService,$state) {

	$scope.letterLimit = 10;
	$scope.More = true;

	HomeListService.getSerUpdataData().success(function(data) {

		$scope.homelistData = data.books;
		$scope.len = data.books.length;

	})

	$scope.reloadMore = function() {

		$scope.letterLimit = $scope.letterLimit + 5;

		if($scope.letterLimit > $scope.len) {
			$scope.More = false;
		}
	}
	$scope.goEbook = function(Id){

		window.localStorage.setItem('ebookNeedKey',Id);
		$state.go('ebook');
	}

}]) 