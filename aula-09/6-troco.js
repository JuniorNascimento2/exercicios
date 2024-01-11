window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var precoUnitario = document.getElementById("txtPrecoUnitario").value;

        var quantidade = document.getElementById("txtQuantidade").value;

        var valorDadoPeloCliente = document.getElementById("txtValorDadoCliente").value;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44388/api/aula8/troco?preco=" + precoUnitario + "&quantidade=" + quantidade + "&valorDadoCliente=" + valorDadoPeloCliente);

        xhr.send();
    }
}