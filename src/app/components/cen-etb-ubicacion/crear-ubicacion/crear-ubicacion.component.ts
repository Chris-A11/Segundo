import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ubicacion } from '../ubicacion';
import { UbicacionService } from '../ubicacion.service';

@Component({
  selector: 'app-crear-ubicacion',
  templateUrl: './crear-ubicacion.component.html',
  styleUrls: ['./crear-ubicacion.component.css']
})
export class CrearUbicacionComponent implements OnInit {

  titulo:string="Nueva Ubicación";
  UbiC:Ubicacion = new Ubicacion();

  constructor(private ubicacionService:UbicacionService, private router:Router) { }

  ngOnInit(): void {
  }
  //Metodo para crear alguna ubicación
  create(): void {
    this.UbiC.deleted=false;
    this.ubicacionService.createUbicacion(this.UbiC).subscribe(dato=>{
      console.log(dato);
      alert("Ubicación creada exitosamente");
      this.router.navigate(['/listaUbicacion'])
    });
  }

  volver(): void {
    this.router.navigate(['listaUbicacion']);
  }

}
