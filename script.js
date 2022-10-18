const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".texto2")


function btn-encriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    texto2.value = textoEncriptado;
    inputTexto.value = " "
    document.getElementById("texto2").style.position = "flexbox";
    document.getElementById("texto2").style.marginTop = "2%";
    document.getElementById("texto2").style.width = "336px";
    document.getElementById("texto2").style.height = "400px";
    document.getElementById("texto2").style.fontFamily = "Inter";
    document.getElementById("texto2").style.fontStyle = "normal";
    document.getElementById("texto2").style.fontWeight = "300";
    document.getElementById("texto2").style.fontSize = "24px";
    document.getElementById("texto2").style.lineHeight = "150%";
    document.getElementById("texto2").style.color = "#495057";
    document.getElementById("giphy2").style.display = "none";
    document.getElementById("tit").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    
}


function btn-desencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value);
    texto2.value = textoEncriptado;
    inputTexto.value = " "
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function copiar() {
    texto2.select()
    navigator.clipboard.writeText(texto2.value)
    inputTexto.value = texto2.value;
   

}
