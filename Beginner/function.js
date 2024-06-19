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



// Calculator operation functions
// 1.Addition
function addition(a,b){
     let add = a+b;
     console.log(add)
     }
     addition (4,5)
 
     // 2.substraction
     function substraction(a,b){
     let subs = a-b;
     console.log(subs)
     }
     addition (10,2)

     // 3.multiplication
     function multiplication(a,b){
         let multiply = a*b;
         console.log(multiply)
     }
     multiplication (3,2)

     // 4.Division
     function division(a,b){
         let divide = a/b;
         console.log(divide)
     }
     division(8,2)
 



