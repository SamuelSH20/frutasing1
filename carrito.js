function agregarAlCarrito() {
    const precio = 2.99; // Precio por libra de fresas
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const total = precio * cantidad;
    document.getElementById('total').innerHTML = `Total: $${total.toFixed(2)}`;
}

function realizarCompra() {
    alert('Compra realizada. ¡Gracias por tu compra!');
}
