import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import  { Routes, RouterModule } from '@angular/router';
import { UsuariosRouter } from '../usuarios/usuarios.router';

const routes: Routes = [
  ...UsuariosRouter,
  {path: '', redirectTo: 'usuarios/index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
})
export class RoutingModule { }
