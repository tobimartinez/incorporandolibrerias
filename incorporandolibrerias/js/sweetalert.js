function alertaFinalizar(){
    swal("Muchas Gracias!", "Has finalizado tu compra", "success");
}
document.getElementById("botonCompra").addEventListener("click",alertaFinalizar);