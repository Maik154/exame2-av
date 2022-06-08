const arquivoJSON = "productos.json";


async function cargarJSON() {
    try {
        const resul = await fetch(arquivoJSON);
        const productos = await resul.json();
        console.log(productos);
        console.log(productos.productos);
        mostrarProductos(productos);
    } catch (error) {
        console.log(error);
    }
}

function mostrarProductos(productos) {
    for (let i in Object.values(productos)[0]) {
        //JSON printeado tal cual
        document.getElementById("productos").innerHTML +=
            `Nombre: ${Object.values(Object.values(productos)[0][i])[0]} -------
         Precio: ${Object.values(Object.values(productos)[0][i])[1]}` + "<br>";

        //
        let div = document.getElementById("menuCompra");
        let nombre = document.createElement("h1");
        let precio = document.createElement("p");
        let separador = document.createElement("hr");
        let txtCantidad = document.createElement("label");
        let inputCantidad = document.createElement("input");
        let btn = document.createElement("input");
        nombre.append(Object.values(Object.values(productos)[0][i])[0]);
        div.appendChild(nombre);
        precio.append(Object.values(Object.values(productos)[0][i])[1]);
        div.appendChild(precio);
        div.appendChild(separador);
        txtCantidad.append("Cantidad: ");
        div.appendChild(txtCantidad);
        div.appendChild(inputCantidad);
        inputCantidad.setAttribute("type", "number");
        inputCantidad.setAttribute("min", "0");
        inputCantidad.setAttribute("id", 
        "inputCantidad" + Object.values(Object.values(productos)[0][i])[0]);
        btn.setAttribute("type", "submit");
        btn.setAttribute("value", "Comprar");
        //btn.addEventListener("click", comprar(Object.values(Object.values(productos)[0][i])[0], i));
        btn.addEventListener("click", comprar("manzanas", 1));
        div.appendChild(btn);
    };
}
cargarJSON();


function comprar(nombre, pos){
    console.log(nombre, pos);
}