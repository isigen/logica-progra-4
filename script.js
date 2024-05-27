
console.log("Bienvenido a mi programa")
let nume;

while (true) {  //comprobando que sea un numero
    nume = parseFloat(prompt("Ingresa tu numero: "))
    if (!isNaN(nume)){
        break;
    }else{
        alert("Porfavor ingresa un numero valido!");
    }  
}
function GenerateFibonacci(number) {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
      
    }
    return fibonacci;
  }
  
  let f = GenerateFibonacci(nume);
  console.log(f);
  document.getElementById("result").textContent = "Aquí tienes tu secuencia de fibonacci!: " + resultado;