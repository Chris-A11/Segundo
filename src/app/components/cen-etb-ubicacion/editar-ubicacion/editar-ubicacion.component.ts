import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ubicacion } from '../ubicacion';
import { UbicacionService } from '../ubicacion.service';

@Component({
  selector: 'app-editar-ubicacion',
  templateUrl: './editar-ubicacion.component.html',
  styleUrls: ['./editar-ubicacion.component.css']
})
export class EditarUbicacionComponent implements OnInit {
 
  titulo:string="Editar Ubicación";
  UbiE:Ubicacion = new Ubicacion();
  id:number;

  constructor(private ubicacionService:UbicacionService, private router:Router, private activatedRoute:ActivatedRoute) { }
  //Metodo para el Id
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.ubicacionService.getUbicacionById(this.id).subscribe(dato => {
      console.log(dato);
    });
  }
  //Metodo de modificar
  update(): void {
    this.UbiE.deleted=false;
    this.ubicacionService.updateUbicacion(this.id,this.UbiE).subscribe(dato=>{
      console.log(dato);
      alert("Ubicación modificada exitosamente");
      this.volver();
    });
  }

  onSubmit(): void {
    this.update();
  }

  volver(): void {
    this.router.navigate(['listaUbicacion']);
  }

}
