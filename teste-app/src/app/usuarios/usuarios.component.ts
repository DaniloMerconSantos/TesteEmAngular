import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Array<any> = [];
  constructor(private usuarioService: UsuariosService) {   }

  ngOnInit() {
    this.carregarLista();
  }

  carregarLista(): void {
    if(!localStorage.getItem('Usuarios')) {
      this.usuarioService.list().subscribe(data => {
        localStorage.setItem('Usuarios', JSON.stringify(data));
        this.usuarios =  data;
      },
      err=> {
        console.log("Error occured.")
      });
    } else {
      this.usuarios = JSON.parse(localStorage.getItem('Usuarios'));     
    }
  }

}
