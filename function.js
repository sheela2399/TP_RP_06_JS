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


//3. Temperature converter celcius to ferenheit
function celciusConverter(celcTemp){
     let TemperatureInFeren = (celcTemp * 9/5) + 32 ;
     console.log(TemperatureInFeren)
}
celciusConverter(40)

//4. Temperature converter ferenheit to celcius 
function ferenheitConverter(ferenTemp){
     let TemperatureInCel=(ferenTemp - 32) * 5/9 ;
     console.log(TemperatureInCel)
}
ferenheitConverter(108)




