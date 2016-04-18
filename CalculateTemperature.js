 
 var temperature = 
      prompt("Please enter the Input Temperature: ", "0");
 var temperatureType = 
      prompt("Please enter the Temperature Type: ", "C")
 var convertedTemperature = convertTemp (temperature, temperatureType);

   
   function convertTemp (temperature, temperatureType)
      {
   /* temperaturetype is equal to what we are converting 
   temperature to */
   if (temperatureType === "F") 
      { 
   		convertedTemperature = temperature * 9/5 + 32; 
      }
   else { 
   		convertedTemperature = (temperature - 32) * 5/9; 
      }
  
   console.log ("Temperature =", temperature);
   console.log ("Temperature Type =", temperatureType);
   console.log ("Converted Temperature is", convertedTemperature); 
      }  