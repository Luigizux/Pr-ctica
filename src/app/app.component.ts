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
    switch (Operatoria.Value) {
      case 1:         
          this.Resultado = (Nro1.Value + Nro2.Value);
        break;
      case 2:
          this.Resultado = (Nro1.Value - Nro2.Value);
        break;
      case 3:
          this.Resultado = (Nro1.Value * Nro2.Value);
        break;
      case 4:
          this.Resultado = (Nro1.Value / Nro2.Value);
        break;
      default:
          console.log(Operatoria.Value);
          console.log(Nro1.Value);
          console.log(Nro2.Value);
          alert("Escoja una operación válida");
        break;
    }
   return false;
  }
}
