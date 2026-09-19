import { Component } from '@angular/core';
import { AuthenticationService } from '../../service/authentication-service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email:string='';
  password:string='';

  private authService = inject(AuthenticationService);
  private route = inject(Router);

  iniciarSecion(){
    this.authService.login(this.email, this.password).subscribe(success =>{
      if(success){
        alert('Bienvenido al sistema')
        this.route.navigate(['/home']);
      }else{
        alert('Email o Password incorrectos')
      }
    })
  }

    cerrarSecion(){
    this.authService.logout();
    this.route.navigate(['/login']);
  }
}
