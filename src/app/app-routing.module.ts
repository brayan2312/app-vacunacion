import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesRouingModule } from './pages/pages.routing';

const routes: Routes = [
  { path: '', redirectTo: '/sistema-vacunacion', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRouingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
