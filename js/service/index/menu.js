webApp.controller('menuController', function ($scope) {
    $scope.menu = [{
        name: '订单管理',
        url: '',
        id: 'menu1',
        nodes: [{
            name: '修改订单',
            url: '#/test'
        }, {
            name: '删除订单',
            url: '#/test'
        }]
    },
        {
            id: 'menu2',
            name: '商城管理',
            url: '',
            nodes: [{
                name: '上传商品',
                url: '#/test'
            }, {
                name: '下架商品',
                url: '#/test'
            }]
        },
        {
            id: 'menu3',
            name: '客户关系描述',
            url: '',
            nodes: [{
                name: '客户管理',
                url: '#/test'
            }, {
                name: '关系修改',
                url: '#/test'
            }]
        }];
    
    $scope.styleScopdeName = '';
    
    $scope.changeStyle = function (name,url) {
        $scope.styleScopdeName = name;
        window.location.href = url;
    }
    
    $scope.DoCtrlPagingAct = function (text, page, pageSize, total) {
        $scope.currentPage = page;
        $scope.offset = pageSize;
        $scope.fetchData();
    };
    
});