import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UsuariosComponent } from "./usuarios.component";
import { UsuariosService } from "./usuarios.service";
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { IndexComponent } from './index/index.component';

@NgModule({
    imports:[
        CommonModule,
        RouterModule,
    ],
    declarations:[
        UsuariosComponent,
        UsuarioFormComponent,
        IndexComponent,
    ],
    providers: [
        UsuariosService,
    ]
})

export class DashboardModule { }