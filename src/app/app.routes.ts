import { Routes } from '@angular/router';
import { Nosotros } from './features/nosotros/nosotros';
import { Home } from './features/home/home';
import { Gallery } from './features/gallery/gallery';
import { Usuarios } from './features/usuarios/usuarios';

export const routes: Routes = [
    {path:"home", component: Home},
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"nosotros", component:Nosotros},
    {path:"galeria", component:Gallery},
    {path:"usuarios", component:Usuarios}
];
