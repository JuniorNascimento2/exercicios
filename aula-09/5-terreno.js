window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var largura = document.getElementById("txtLargura").value;

        var comprimento = document.getElementById("txtComprimento").value;

        var valorM2 = document.getElementById("txtValorM2").value;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44388/api/aula8/terreno?largura=" + largura + "&comprimento=" + comprimento + "&valorM2=" + valorM2);

        xhr.send();
    }
}