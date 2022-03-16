let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 3000},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Libro", costo: 320},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
]

// filter
let articulosCaros = articulos.filter( ( articulo ) => {
    return articulo.costo > 3000
})

articulosCaros