(function(){

    var states = [
        {
            name : "home",
            state : {
                url : "/",
                templateUrl : '../views/home.html',
                data : {
                    text : "Home Page",
                    visible: false
                }
            }
        },
        {
            name : "signup",
            state : {
                url : "/signup",
                templateUrl : "../views/signup.html",
                data : {
                    text : "SignUP Page",
                    visible : false
                }
            }
        },
        {
            name : "dashboard",
            state : {
                url : "/dashboard",
                templateUrl : "../views/dashboard.html",
                data : {
                    text : "Dashboard Page",
                    visible : false
                }
            }
        },
        {
            name : "query",
            state : {
                url : "/query",
                templateUrl : "../views/query.html",
                data : {
                    text : "Query Page",
                    visible : false
                }
            }
        }
    ];

    var app = angular.module("learn",[
        'ui.router',
        'ui.materialize'
    ])
        .config(function ($stateProvider,$urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            angular.forEach(states , function (state) {
                $stateProvider.state(state.name, state.state);
            });

        });

})();