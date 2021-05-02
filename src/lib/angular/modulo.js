//criando modulo
angular.module("listaTelefonica", []);
//definindo modulo
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
    $scope.title = "My phone list";
    //declarando array
    $scope.contatos = [
        {
            nome: "Leonardo",
            telefone: "(34)98413-8741"
        },

        {
            nome: "João",
            telefone: "(62)99185-7741"
        },

        {
            nome: "Fernanda",
            telefone: "(31)98412-9965"
        }
    ];

    //declarando adicionarContato do evento ng-click para ser invocada
    $scope.adiconarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    }

});