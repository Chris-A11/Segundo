import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true, //Si es falso solo muestra las imagenes, no las repite
    mouseDrag: true, //Deja mover las imagenes deslizando el mouse
    touchDrag: false,
    pullDrag: true,
    dots: false, //Los puntos de abajo
    navSpeed: 700,
    navText: [' ', ' '],//Para cambiar de imagen
    responsive: { //El numero de imagenes a mostrar según el tamaño
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}