import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  Resultado:number = 0.0;

  Operacion(Operatoria, Nro1, Nro2)
  {
    /*
    1.- Suma
    2.- Resta
    3.- Multiplicaión
    4.- División
    */
   var PrimerNumero = Number(Nro1.value);
   var SegundoNumero = Number(Nro2.value);
  
   console.log(Operatoria.value);
          console.log(PrimerNumero);
          console.log(SegundoNumero);
    switch (Operatoria.value) {
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
   return false;
  }
}
