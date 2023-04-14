import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrupCitaComponent } from './crup-cita/crup-cita.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CrupCitaComponent,
    PagesComponent
  ],
  exports: [
    CrupCitaComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],

})
export class PagesModule { }
