let numeros = [1, 4, 2, 3];

alert(numeros.reduce((pv, cv) => pv + cv));

//Primera llamada pv=0 cv=1

//Segunda llamada pv=1 cv=4

//Tercera llamada pv=4 cv=2

//Cuarta llamada pv=2 cv=3
