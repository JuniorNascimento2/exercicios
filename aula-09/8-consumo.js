window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var distancia = document.getElementById("txtDistancia").value;

        var litros = document.getElementById("txtLitros").value;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44388/api/aula8/consumo?distancia=" + distancia + "&litros=" + litros);

        xhr.send();
    }
}