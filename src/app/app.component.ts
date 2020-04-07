import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Calculadora';
  Resultado:number = 0.0;
  Nro1: number = 0.0;
  Nro2: number = 0.0;
  Operatoria: number  = 0;

  Operacion(Operatoria, Nro1, Nro2);
  
  Operacion(Operatoria, Nro1, Nro2)
  {
    /*
    1.- Suma
    2.- Resta
    3.- Multiplicaión
    4.- División
    */
   
    var PrimerNumero = Number(Nro1);
    var SegundoNumero = Number(Nro2);
    
    if(isNaN(PrimerNumero) || isNaN(SegundoNumero)) // Validar que solo se ingrsen daton numéricos.
    {
        alert("Asigne solo números por favor");
    }
    else
    {
      switch (Operatoria.value) 
      {
        case "1":         
            this.Resultado = (PrimerNumero + SegundoNumero);
          break;
        case "2":
            this.Resultado = (PrimerNumero - SegundoNumero);
          break;
        case "3":
            this.Resultado = (PrimerNumero * SegundoNumero);
          break;
        case "4":
            this.Resultado = (PrimerNumero / SegundoNumero);
          break;
        default:
            alert("Escoja una operación válida");
          break;
      }
    }
      console.log(Operatoria.value);
      console.log(PrimerNumero);
      console.log(SegundoNumero);
      return false;
  }
}
