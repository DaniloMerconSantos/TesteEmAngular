import { Route } from "@angular/router";
import { UsuariosComponent } from "./usuarios.component";
import { UsuarioFormComponent } from "./usuario-form/usuario-form.component";
import { IndexComponent } from "./index/index.component";

export const UsuariosRouter: Route[] = [
    {
        path: 'usuarios',
        component: IndexComponent,
        children: [
            {
                path: 'index',
                component: UsuariosComponent
            },
            {
                path: 'novo',
                component: UsuarioFormComponent
            }
        ]
    }
];