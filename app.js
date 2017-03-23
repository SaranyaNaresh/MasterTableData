/**
 * Created by saranyas on 23-03-2017.
 */
'use strict';

(function () {
    var app = angular.module("masterTableApp", ['ngRoute', 'angular-loading-bar']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/sector", {
                templateUrl: 'app/views/sector.html',
                controller: "SectorCtrl"
            })
            .when("/status", {
                templateUrl: 'app/views/status.html',
                controller: "StatusCtrl"
            })
            .when("/task", {
                templateUrl: 'app/views/task.html',
                controller: "TaskCtrl"
            })
            .when("/type", {
                templateUrl: 'app/views/type.html',
                controller: "TypeCtrl"
            })

            .otherwise({ redirectTo: "/index" })
    });
}());
