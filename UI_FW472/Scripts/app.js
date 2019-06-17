"use strict";
/// <reference path="typings/angularjs/angular-route.d.ts" />
/// <reference path="typings/angularjs/angular.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var app = angular.module("techVidsApp", ['ngRoute']);
var Config = /** @class */ (function () {
    function Config($routeProvider) {
        $routeProvider.when("/list", {
            templateUrl: "App/Templates/VideoList.html",
            controller: "TechVidsListCtrl"
        })
            .when("/list/:id", {
            templateUrl: "App/Templates/VideoList.html",
            controller: "TechVidsListCtrl"
        })
            .when("/add", {
            templateUrl: "App/Templates/AddVideo.html",
            controller: "AddTechVideoCtrl"
        })
            .when("/edit/:id", {
            templateUrl: "App/Templates/EditVideo.html",
            controller: "EditTechVideoCtrl"
        })
            .otherwise({
            redirectTo: '/list'
        });
    }
    return Config;
}());
exports.Config = Config;
Config.$inject = ['$routeProvider'];
app.config(Config);
//# sourceMappingURL=app.js.map