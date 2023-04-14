
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';
import { CrupCitaComponent } from './crup-cita/crup-cita.component';

const routes: Routes = [
  {
    path: 'sistema-vacunacion',
    component: PagesComponent,
    children: [
      { path: '', component: CrupCitaComponent, data: { titulo: 'Cita Vacunacion'} },
    ]
  },
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class PagesRouingModule {}
