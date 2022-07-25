const productos=[
    {id:1,nombre:"Pizza Muzzarella",precio:1500,imagen:"../img/pizza1nuevo.jpg"},
    {id:2,nombre:"Pizza Fugazzeta",precio:1700,imagen:"../img/pizza2.jpg"},
    {id:3,nombre:"Pizza Jamon Y Morron",precio:1700,imagen:"../img/pizza3.jpg"},
    {id:4,nombre:"Pizza Palmito",precio:1600,imagen:"../img/pizza1nuevo.jpg"},
    {id:5,nombre:"Pizza Americana",precio:2000,imagen:"../img/pizza2.jpg"},
    {id:6,nombre:"Pizza Anana",precio:1600,imagen:"../img/pizza3.jpg"},
    {id:7,nombre:"Pizza Macarenna",precio:2100,imagen:"../img/pizza1nuevo.jpg"},
    {id:8,nombre:"Pizza Napolitana",precio:1900,imagen:"../img/pizza2.jpg"},
    {id:9,nombre:"Pizza A la crema",precio:1700,imagen:"../img/pizza3.jpg"},
    {id:10,nombre:"Pizza Imperial",precio:2200,imagen:"../img/pizza1nuevo.jpg"}
];

function obtenerProductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || []
}
function guardarProductosLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
}
function buscarProducto(id){
    let productos= obtenerProductosLS();
    return productos.find(x => x.id == id);
}