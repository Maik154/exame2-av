const arquivoJSON = "productos.json";


async function cargarJSON() {
    try {
        const resul = await fetch(arquivoJSON);
        const productos = await resul.json();
        console.log(productos);
        console.log(productos.productos);
        mostrarProductos(productos.productos);
    } catch (error) {
        console.log(error);
    }
}

function mostrarProductos(productos) {
    for (let i in Object.values(productos)) {
        //JSON printeado tal cual
        document.getElementById("productos").innerHTML +=
            `Nombre: ${Object.values(productos)[i].nombre} -------
         Precio: ${Object.values(productos)[i].precio}` + "<br>";

        //
        let div = document.getElementById("menuCompra");
        let nombre = document.createElement("h1");
        let precio = document.createElement("p");
        let separador = document.createElement("hr");
        let txtCantidad = document.createElement("label");
        let inputCantidad = document.createElement("input");
        let btn = document.createElement("input");
        nombre.append(Object.values(productos)[i].nombre);
        div.appendChild(nombre);
        precio.append(Object.values(productos)[i].precio);
        div.appendChild(precio);
        div.appendChild(separador);
        txtCantidad.append("Cantidad: ");
        div.appendChild(txtCantidad);
        div.appendChild(inputCantidad);
        inputCantidad.setAttribute("type", "number");
        inputCantidad.setAttribute("min", "0");
        inputCantidad.setAttribute("id",
            "inputCantidad" + Object.values(productos)[i].nombre);
        btn.setAttribute("type", "submit");
        btn.setAttribute("value", "Comprar");
        btn.addEventListener("click", comprar);
        //btn.addEventListener("click", comprar("manzanas", 1));
        let idBtnManzana = "btn" + Object.values(productos)[i].nombre;
        btn.setAttribute("id", idBtnManzana);
        div.appendChild(btn);
    };
}
cargarJSON();
//document.getElementById("btnManzana").addEventListener("click", comprar);


function comprar(nombre, pos) {
    console.log(nombre, pos);
}