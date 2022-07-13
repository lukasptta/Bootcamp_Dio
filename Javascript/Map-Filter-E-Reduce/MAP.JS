//--
var numeros = [0,4,5,6,7,5,10];


var multi = item => {return item *2}


var dobrar= numeros.map(multi);
console.log(dobrar)

//--


var climaEmFahrenheit = [0,23,30,60,90];

var weatherTemp = climaEmFahrenheit.map(item => {return Math.round((item-32)*5/9)});

//var temp = climaEmFahrenheit.map(weatherTemp);
console.log(weatherTemp);

//--//--
