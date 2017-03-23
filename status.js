'use strict';

(function () {
    var app = angular.module("accountStatusApp", ['ngRoute', 'angular-loading-bar']);
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/status", {
            templateUrl: 'app/views/status.html',
            controller: "StatusCtrl"
        })
        .when("/status/:statusId", {
            templateUrl: 'app/views/statusdetail.html',
            controller: "statusAddressCtrl"
        })

        .otherwise({ redirectTo: "/status" })
    });
}());
