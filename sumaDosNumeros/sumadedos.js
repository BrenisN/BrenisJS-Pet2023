function myFunction() {  
      let x,y,suma,text;  
      x = document.getElementById("num1").value;  
      y = document.getElementById("num2").value;  
      if (isNaN(x) || isNaN(y)) {  
        text = "Ponga dos números válidos";  
      } else {  
        suma=parseFloat(x)+parseFloat(y);  
        text= suma;  
      }  
      document.getElementById("sumando").innerHTML = text;  
    }  
