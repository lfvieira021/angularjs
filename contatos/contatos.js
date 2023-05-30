angular
    .module("app", [])
    .controller("telefoneController", function ($scope) {
        $scope.contatos = [
            {
                nome: 'João Leal',
                telefone: '01234567890'
            },
            {
                nome: 'Mariane Souza',
                telefone: '09876543210'
            },

            {
                nome: 'Rafael Lopes',
                telefone: '02176463510'
            }

        ];

        $scope.operadoras = [
            { nome: "Oi", codigo: 14, categoria: "Celular" },
            { nome: "Vivo", codigo: 15, categoria: "Celular" },
            { nome: "Tim", codigo: 41, categoria: "Celular" },
            { nome: "GVT", codigo: 41, categoria: "Fixo" },
            { nome: "Embratel", codigo: 41, categoria: "Fixo" }
        ]

        $scope.adicionarContato = function (contato) {
            $scope.contatos.push(angular.copy(contato))
        }

        $scope.apagarContato = function (contatos) {
            $scope.contatos = contatos.filter(function (contato) {
                if (!contato.selecionado) return contato
                console.log("Contatos apagados")
            })
        }

        $scope.isContatoSelecionado = function (contatos) {
            return contatos.some(function (contato) {
                return contato.selecionado
            })
        }
    })
