import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectPage(numero: number) {
    // Utiliza el método navigate del Router para redirigir a la ruta deseada
    switch (numero) {
      case 1:
        this.router.navigate(['ingreso', 'registro']);
        break;
      case 2:
        this.router.navigate(['salida', 'salida']);
        break;
      default:
        this.router.navigate(['login']);
    }
  }
}
