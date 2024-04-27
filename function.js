//1. greeting function
function greetings (name){
     console.log(`Hello,${name}`); 
}
greetings ("sheela")


//2. Area of Reactangle
function Area(length,width){
     let A= length*width;
     console.log(A)
}
Area(5,6)


//3. Temperature converter celcius to fahrenheit
function celciusToFahrenheit(celcTemp){
     let fahrenheitTemperature = (celcTemp * 9/5) + 32 ;
     console.log(`${celcTemp}°C = ${fahrenheitTemperature}°F`)
}
celciusToFahrenheit(42)

//4. Temperature converter fahrenheit to celcius 
function fahrenheitToCelcius (fahrenTemp){
     let celciusTemperature = (fahrenTemp - 32) * 5/9 ;
     console.log(`${fahrenTemp}°F  = ${celciusTemperature}°C`)
}
fahrenheitToCelcius(108)




