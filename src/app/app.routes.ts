import { Routes } from '@angular/router';
import { Nosotros } from './features/nosotros/nosotros';
import { Home } from './features/home/home';
import { Gallery } from './features/gallery/gallery';
import { Usuarios } from './features/usuarios/usuarios';
import { Login } from './shared/login/login';
import { canactivateguardGuard } from './guards/canactivateguard-guard';

export const routes: Routes = [

  {path:"home", component:Home, canActivate:[canactivateguardGuard]},

  {path:"nosotros", component:Nosotros, canActivate:[canactivateguardGuard]},

  {path:"galeria", component:Gallery, canActivate:[canactivateguardGuard]},

  {path:"usuarios", component:Usuarios, canActivate:[canactivateguardGuard]},

  {path:"login", component:Login},

  {path:"", redirectTo:"login", pathMatch:"full"},

];