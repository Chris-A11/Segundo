import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UbicacionService } from '../ubicacion.service';

@Component({
  selector: 'app-lista-ubicacion',
  templateUrl: './lista-ubicacion.component.html',
  styleUrls: ['./lista-ubicacion.component.css']
})
export class ListaUbicacionComponent implements OnInit {

  ubicacion:any;
  Ubi:any;

  constructor(private ubicacionService:UbicacionService, private router:Router) { }
  ngOnInit(): void {
    this.getUbicacion();
  }
  //Metodo para obtener la lista de todos los registros
  getUbicacion(){
    this.ubicacionService.getAll().subscribe ( dato => {
      this.ubicacion = dato;
      this.Ubi = this.ubicacion.ubicacionResponse.ubicacion;
      console.log(this.Ubi);
    });
  }

  //Redireccionamiento
  actualizarUbicacion(id:number){
    this.router.navigate(['editarUbicacion',id]);
  }

  //Metodo para eliminar
  delete(id:number){
    this.ubicacionService.deleteUbicacion(id).subscribe(dato=>{
      console.log(dato);
      this.getUbicacion();
    });
  }
}
