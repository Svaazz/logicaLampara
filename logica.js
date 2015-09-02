var i = 0;
function logi(n) {
    var rstrt = document.getElementById("rstrt");
    var si = document.getElementById("si");
    var no = document.getElementById("no");
    var res = document.getElementById("resp");
    if (n == 0 && i == 0) {
        res.innerHTML = "Est&aacute; enchufada?";
        i++;
    }else if(n == 0 && i == 1) {
        res.innerHTML = "Enchufa la l&aacute;mpara.";
        i = 0;
        si.hidden = true;
        no.hidden = true;
        rstrt.hidden = false;
    } else if (n == 1 && i == 1) {
        res.innerHTML = "La bombilla funciona?";
        i++;
    } else if (n == 2) {
        res.innerHTML = "Funciona la l&aacute;mpara?";
        si.hidden = false;
        no.hidden = false;
        rstrt.hidden = true;
        i = 0;
    } else if (n == 1 && i == 2) {
        res.innerHTML = "Compra una l&aacute;mpara nueva.";
        i = 0;
        si.hidden = true;
        no.hidden = true;
        rstrt.hidden = false;
    } else if (n == 0 && i == 2) {
        res.innerHTML = "Cambia la bombilla.";
        i = 0;
        si.hidden = true;
        no.hidden = true;
        rstrt.hidden = false;
    } else {
        si.hidden = true;
        no.hidden = true;
        rstrt.hidden = false;
        res.innerHTML = "Fin del problema.";
        i = 0;
    }
}