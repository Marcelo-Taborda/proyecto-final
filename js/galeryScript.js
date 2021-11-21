var heightImage = document.querySelector(".galery").clientHeight;
console.log(heightImage);
var columnas = getComputedStyle(document.documentElement).getPropertyValue("--columnas");
var imagenes = document.getElementsByClassName("images");
var contenedor = document.getElementById("galery");

function ordenarImagenes(columnas, contenedor, imagenes) {
    for (let a = 0; a < columnas; a++) {
        const newColumna = document.createElement("div");
        newColumna.id = `columna${a}`;
        newColumna.className = "columna";
        contenedor.appendChild(newColumna);
    }
    for (let a = 0; a < imagenes.length; a++) {
        document.getElementById(`columna${alturaMinima(columnas)}`).appendChild(imagenes[0]);
    }
}

function alturaMinima(columnas) {
    // SE RESETEAN LAS ALTURAS PARA QUE NO SE SUMEN CON LAS ANTERIORES //
    var alturaColumnas = [];
    // ASIGNAMOS VALORES PARA QUE PREDETERMINADAMENTE LA PRIMERA IMAGEN ESTE EN LA PRIMERA COLUMNA//
    for (let a = 0; a < columnas; a++) {
        alturaColumnas[a] = a;
    }
    // RECORREMOS LAS COLUMNAS Y VAMOS SUMANDO LAS ALTURAS DE LAS IMAGENES //
    for (let a = 0; a < columnas; a++) {
        var columnaImages = document.getElementById(`columna${a}`).querySelectorAll("img");
        /* console.log(columnaImages); */
        for (let b = 0; b < columnaImages.length; b++) {
            alturaColumnas[a] += columnaImages[b].offsetHeight + 10;
            /* console.log(columnaImages[b], columnaImages[b].clientHeight); */
        }
    }

    return indiceDelMinimo = alturaColumnas.indexOf(Math.min(...alturaColumnas));
} 

window.onresize = () => {
    if (getComputedStyle(document.documentElement).getPropertyValue("--columnas") !== columnas) {
        var newColumnas = getComputedStyle(document.documentElement).getPropertyValue("--columnas");
        Array.from(imagenes).forEach(imagen => contenedor.appendChild(imagen));
        var newImagenes = document.getElementsByClassName("images");
        document.querySelectorAll("div.columna").forEach(div => div.remove());
        ordenarImagenes(newColumnas, contenedor, newImagenes);
        columnas = getComputedStyle(document.documentElement).getPropertyValue("--columnas");
    }
}

ordenarImagenes(columnas, contenedor, imagenes);
setTimeout(() => {
    var newColumnas = getComputedStyle(document.documentElement).getPropertyValue("--columnas");
    Array.from(imagenes).forEach(imagen => contenedor.appendChild(imagen));
    var newImagenes = document.getElementsByClassName("images");
    document.querySelectorAll("div.columna").forEach(div => div.remove());
    ordenarImagenes(newColumnas, contenedor, newImagenes);
    columnas = getComputedStyle(document.documentElement).getPropertyValue("--columnas");
}, 50);

// VER IMAGEN //
const images = document.querySelectorAll("img");

images.forEach(image => {
    image.addEventListener("click", () => {
        localStorage.setItem('pressIMG', image.src);
        localStorage.setItem('name', image.alt);
        window.location.href = "image.html";
    });
});

heightImage = document.querySelector(".galery").clientHeight;
console.log(heightImage);