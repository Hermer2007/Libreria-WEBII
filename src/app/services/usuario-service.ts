import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private API_USUARIOS ='https://crud-angular-intensivo-default-rtdb.firebaseio.com/usuarios'

  private http = inject(HttpClient);

   //GET
  getUsuarios():Observable<Usuario[]>{
    
    
    return this.http.get<{[key:string]:Usuario}>( `${this.API_USUARIOS}/users.json` ).pipe(
      map(respuesta => {
        if(!respuesta){
          return [];
        }
        return Object.keys(respuesta).map(id=>{
          const usuarioConId = {...respuesta[id], id:id};

          return usuarioConId;
        });
      })
    );
  }

  //Buscar por id:
  getUsuarioById(id:string):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.API_USUARIOS}/users/${id}.json`);
  }

  //Post
  postUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.API_USUARIOS}/users.json`, usuario);
  }

  //Put
  putUsuario(id:string, usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.API_USUARIOS}/users/${id}.json`, usuario);
  }

  //Delete
  deleteUsuario(id:string):Observable<void>{
    return this.http.delete<void>(`${this.API_USUARIOS}/users/${id}.json`);
  }
}