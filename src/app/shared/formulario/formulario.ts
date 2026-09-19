import { Component, inject, signal } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication-service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  private usuarioService = inject(UsuarioService);
  public authService = inject(AuthenticationService)

  //Variable para controlar si es put o post
  editando = false;

  listaUsuarios = signal<Usuario[]>([]);

  nuevoUsuario: Usuario={
    nombre:'',
    email:'',
    password:'',
    rol: 'EMPLEADO'
  }

  ngOnInit(){
    this.obtenerUsuarios();
  }

  //Metodo para traer los usuarios a la tabla
  obtenerUsuarios(){
    this.usuarioService.getUsuarios().subscribe(datos =>{
      this.listaUsuarios.set(datos)
    });
  }

  //Eliminar
  eliminarUsuario(id:string){
    if(confirm('Estas seguro que deseas eliminar el registro?')){
      this.usuarioService.deleteUsuario(id).subscribe(()=>{
        this.listaUsuarios.set(this.listaUsuarios().filter(u=> u.id !== id));
      })
    }
  }

  //Editar usuario
  editarUsuario(usuario: Usuario){
    this.editando=true;
    this.nuevoUsuario={ ...usuario};
  }

  //Metodo registrar usuario
  registrarUsuario(){
  if(this.editando && this.nuevoUsuario.id){
    this.usuarioService.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario)
    .subscribe(()=>{
      this.obtenerUsuarios();
      this.limpiarFormulario();
    });
  }else{
    this.usuarioService.postUsuario(this.nuevoUsuario).subscribe(()=>{
      this.obtenerUsuarios();
      this.limpiarFormulario();
    });
  }
}

  //limpiar
  limpiarFormulario(){
    this.editando=false;
    this.nuevoUsuario={nombre:'', email:'',password:'', rol:'EMPLEADO'}
  }
  
}
