function calcularArea() {
    var forma = document.getElementById("forma").value;
    var resultado = document.getElementById("resultado");
    var area;
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    if (forma === "cuadrado") {
        area = lado1 * lado1;
    } else if (forma === "rectangulo") {
        area = lado1 * lado2;
    } else if (forma === "triangulo") {
        area = (lado1 * lado2) / 2;
    }
    
    resultado.innerHTML = "El área es: " + area;

    document.getElementById("lado1").value = "";
    document.getElementById("lado2").value = "";
}

function reset() {
    document.getElementById('lado1').reset();
}
