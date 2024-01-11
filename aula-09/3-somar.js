window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var primeiroNumero = document.getElementById("txtPrimeiroNumero").value;

        var segundoNumero = document.getElementById("txtSegundoNumero").value;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44388/api/aula8/somar?numero1=" + primeiroNumero + "&numero2=" + segundoNumero);

        xhr.send();
    }
}
 