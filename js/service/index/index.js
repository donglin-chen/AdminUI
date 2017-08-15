webApp.controller('testController',function (cfpLoadingBar,$scope) {
    $scope.pageSizes = [{name: '20', value: 20}, {name: '100', value: 100}, {name: '1000', value: 1000}];
    cfpLoadingBar.start();
    $scope.pageSize = 10;
    $scope.page = 1;
    $scope.total = 1000;
    $scope.search = {
        offset: $scope.pageSizes[0]
    };
    
    $scope.DoCtrlPagingAct = function (text, page, pageSize, total) {
        $scope.currentPage = page;
        $scope.offset = pageSize;
        $scope.fetchData();
    };
    //cfpLoadingBar.complete();
})