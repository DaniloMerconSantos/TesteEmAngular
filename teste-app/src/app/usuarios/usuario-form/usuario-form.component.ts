import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {
  @ViewChild('usuarios') usuarios;
  formulario: FormGroup;
  
  constructor() { }

  ngOnInit() {
    console.log(this.usuarios)
  }

}
