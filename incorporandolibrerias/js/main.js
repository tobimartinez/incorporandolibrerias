function renderProductos(){
    let productos= obtenerProductosLS();
    
    for(let producto of productos) {
        
        let columna = document.createElement("div");
        columna.className = "col-md-4"
        let card = document.createElement("div");
        card.className = "card border-0"
        let imagen = document.createElement("img");
        imagen.src= `images/${producto.imagen}`;
        imagen.className= "card-img-top"
        imagen.alt=`${producto.nombre}`;
        let card_body= document.createElement("div");
        card_body.className="card-body";
        let titulo= document.createElement("h5");
        titulo.className = "card-title text-center";
        titulo.innerText = producto.nombre;
        let precio= document.createElement("p")
        precio.className= "card-title text-center";
        precio.innerText = "$" + producto.precio;
        let parrafo_boton= document.createElement("p")
        parrafo_boton.className="card-title text-center";
        parrafo_boton.innerHTML = `<a href="#" onclick="agregarCarrito(${producto.id})"class= "btn btn-primary">Agregar <a/>`;
        
        card_body.appendChild(titulo);
        card_body.appendChild(precio);
        card_body.appendChild(parrafo_boton);
        card.appendChild(imagen);
        card.appendChild(card_body);
        columna.appendChild(card);
        document.getElementById("productos").appendChild(columna);
    }
}

function agregarCarrito(id){
    let producto= buscarProducto(id);
    let productos_carrito= obtenerProductosCarrito();
    producto.cantidad=1;
    productos_carrito.push(producto);
    guardarProductosCarrito(productos_carrito);
    actualizarBotonCarrito();
}
function obtenerProductosCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || []
}

function guardarProductosCarrito(productos){
    localStorage.setItem("carrito", JSON.stringify(productos));
}


function actualizarBotonCarrito(){
    let productos= obtenerProductosCarrito();
    let contenido=`<button type="button" class="btn btn-primary position-relative">
    <img src:"images/iconobadge.png" width="24" > 
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      0
    </span>
  </button>`;
    let total = 0;
    if(productos.lenght > 0){
        for(let producto of productos){
            total += producto.cantidad;
        }

        contenido=`<button type="button" class="btn btn-primary position-relative">
        <img src:"images/iconobadge.png" width="24" > 
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          ${total}
        </span>
      </button>`;
    }
    document.getElementById("boton_carrito").innerHTML = contenido;
} 
guardarProductosLS(productos);
renderProductos();
actualizarBotonCarrito();

