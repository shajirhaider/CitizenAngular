"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mainControllers = /** @class */ (function () {
    function mainControllers() {
        var app = angular.module("mainControllers", []);
        app.controller('MainController', function ($scope, $location) {
            $scope.name = "John";
            $scope.lastName = "Doe";
        });
    }
    return mainControllers;
}());
exports.mainControllers = mainControllers;
//# sourceMappingURL=mainControllers.js.map