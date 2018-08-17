import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {
  formulario: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.iniciarFormulario();
  }

  onSubmit() {
    window.scrollTo(0, 0);
    const usuarios = JSON.parse(localStorage.getItem('Usuarios'));
    const newUsuario = {
      'name': this.formulario.value.nome,
      'cpf': this.formulario.value.cpf,
      'phone': this.formulario.value.telefone,
      'email': this.formulario.value.email
    };

    usuarios.push(newUsuario);

    localStorage.removeItem('Usuarios');
    localStorage.setItem('Usuarios', JSON.stringify(usuarios));

    this.resetarFormulario();
    window.location.href='#/usuarios/index';
  }

  private resetarFormulario() {
    this.formulario.setValue({
      nome: null,
      cpf: null,
      telefone: null,
      email: null,
    });
  }

  private iniciarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null, Validators.required],
    });
  }

}
