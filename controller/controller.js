angular
    .module("PrimeiroApp", [])
    .controller("PrimeiroController", function ($scope) {
        $scope.nome = "Luis Felipe"
        

        $scope.click = function () {
            alert("Enviado!")
        }

    })