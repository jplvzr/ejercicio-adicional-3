var number = prompt("Ingresa un número de 1 a 100");
number = parseInt(number);
   
if (numero > 100) {
	
else {
   	if (numero % 2 != 0)
   		document.write("Odd!");
   	else {
   		if (numero >= 2 && numero < 5) 
   			document.write("Good!");
   		else {
   			if (numero >= 6 && numero <= 20) 
   				document.write("Great!");		
   			else {
   				if (numero > 20)
   					document.write("Perfect!");
   			}
   		}
	}
}