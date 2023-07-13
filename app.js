function calcularValorFinal() {
  var valorFinalTotal = 0;
  var agregarProducto = true;

  while (agregarProducto) {
    var nombreProducto = prompt("Ingrese el nombre del producto:");
    var precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

    var impuesto = 0.18;
    var descuento = 0;

    if (precioProducto > 100) {
      descuento = 0.1;
    } else {
      descuento = 0;
    }

    var valorImpuesto = precioProducto * impuesto;
    var valorDescuento = precioProducto * descuento;
    var valorFinal = precioProducto + valorImpuesto - valorDescuento;

    valorFinalTotal += valorFinal;

    console.log("Producto: " + nombreProducto);
    console.log("Valor final del producto: $" + valorFinal.toFixed(2));
    console.log("-----------------------------");

    var respuesta = prompt("¿Desea agregar otro producto? (s/n)");
    agregarProducto = (respuesta.toLowerCase() === "s");
  }

  alert("Valor final total de los productos: $" + valorFinalTotal.toFixed(2));
}

calcularValorFinal();

