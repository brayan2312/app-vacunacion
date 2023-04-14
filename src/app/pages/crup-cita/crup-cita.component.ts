import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { CrupService } from 'src/app/services/crup.service';
import { Crup } from '../../models/crup';

@Component({
  selector: 'app-crup-cita',
  templateUrl: './crup-cita.component.html',
  styleUrls: ['./crup-cita.component.css']
})
export class CrupCitaComponent implements OnInit {

  private arrayCrups:Crup[] = [];

  // public crup?: Crup;
  crup?: any;

  constructor(private crupService:CrupService) {
    this.crup = new Crup();
    this.listar();
   }

  ngOnInit(): void {
  }


  listar() {
    this.crupService.listar().subscribe(crups => {
      this.arrayCrups = crups;
      console.log(crups);

    });
  }
  agregar(){


    let texto = this.crup.crup;

    if(typeof(texto) == "undefined" ){
      Swal.fire(
        'Error ',
        'El campo no puede ir vacio',
        'error');

        return ;
    }

    if(texto.trim().length != 18){
      Swal.fire(
        'Error ',
        'La CRUP debe ser de 18 caracteres',
        'error');

        return;
    }


    let fecha = new Date();
    this.crup.create_at = this.formatoFecha(fecha);
    this.crup.crup = this.crup.crup.toUpperCase();

    this.crupService.crear(this.crup).subscribe(crupNueva => {
      console.log(crupNueva);
      this.crup.create_at = '';
       this.crup.crup = '';

      Swal.fire(
        'Exito ',
        `La CRUP ${crupNueva.crup} ha sido registrada con exito...`,
        'success');

    }, err => {
      if(err.status === 400){

        console.log(err.error.errors[0].msg);
        console.log(err);
        Swal.fire(
          'Error ',
          err.error.errors[0].msg,
          'error');

      }
    });


  }

  validarCaracteres(texto: string): void{

    let btnCrup = document.getElementById("text-crup");
    if(texto.length == 18 ) {
      document.getElementById("btn-continuar")!.removeAttribute("disabled");
    }else {
      document.getElementById("btn-continuar")!.setAttribute("disabled","disabled");
    }

  }

  formatoFecha(fecha: Date):string {
    return `${fecha.getFullYear()}-0${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
  }
}
