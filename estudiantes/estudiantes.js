let estudiantes = ["Uriel", "Anie", "Lujan", "Luis", "Yerson", "Sergio"]

function saludarEstudiante( estudiante ) {
    return estudiante + " dice: Buen día, espero que te vaya bien" 
}

for( let i = 0; i < estudiantes.length; i++){
    console.log( saludarEstudiante( estudiantes[i] ) )
}

console.log(" ===============================  ")
console.log(" FOR OF ")
console.log(" ===============================  ")
for( let estudiante of estudiantes){
    console.log( saludarEstudiante(estudiante) )
}

console.log(" ===============================  ")
console.log(" WHILE ")
console.log(" ===============================  ")
let i = 0
while ( i < estudiantes.length ){
    console.log( saludarEstudiante( estudiantes[i]) )
    i++
}
console.log(" ===============================  ")
console.log(" DO WHILE ")
console.log(" ===============================  ")

i = 0
do{
    console.log( saludarEstudiante( estudiantes[i]) )
    i++
}while( i < estudiantes.length)

console.log(" ===============================  ")
console.log(" OTRA FORMA CON WHILE ")
console.log(" ===============================  ")

while( estudiantes.length > 0 ){
    console.log( estudiantes )
    let estudiante = estudiantes.shift()
    console.log(  saludarEstudiante(estudiante) )
}