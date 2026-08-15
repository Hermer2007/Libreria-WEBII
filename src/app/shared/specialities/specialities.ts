import { Component } from '@angular/core';

@Component({
  selector: 'app-specialities',
  imports: [],
  templateUrl: './specialities.html',
  styleUrl: './specialities.css',
})
export class Specialities {
  subtitulo: string='La mejor variedad de contenido para ti';

  especialidadseleccionada: string='ninguno';

  especialidades =[
    {id:1, 
    nombre: "Novela", 
    descripcion:"Historias que te cautivan",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtumMjiLZu9IG2ONuaInNBgyFT_0uvvwAijjwQa5zMaYIJJ699O8KEuWJ&s=10",
  activo: true},

  {id:2, 
    nombre: "Cuentos", 
    descripcion:"Los mejores cuentos para sus pequeños",
  imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/ce/a2/cea237373c776fc0626f45fa381ec66e.jpg",
  activo: true},

  {id:3, 
    nombre: "Terror", 
    descripcion:"Historias que te helaran la sangre",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXVArWTJcrSV9hAdbZItZHB0ge9wfuB1teO8YySyRXQEISPeTIR6fo5oA&s=10",
  activo: false},

  {id:4, 
    nombre: "Aventuras", 
    descripcion:"Adentrate a una nueva aventura",
  imagen: "https://ellibrero.com/wp-content/uploads/2026/04/9786072128729-1.png",
  activo: false},

  {id:5, 
    nombre: "Leyendas", 
    descripcion:"Conoce sobre relatos de tu ciudad",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQZMUA_kkH9MfhkED5H2mVSykaOrT6C-4bCN2R6jGZX-LnDE7uD0zekd8&s=10",
  activo: true},

  {id:6, 
    nombre: "Ciencias", 
    descripcion:"Aprende nuevos temas sobre la vida",
  imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/ef/6f/ef6f96bb31b468957ee853629059a6ea.jpg",
  activo: true},

  {id:7, 
    nombre: "Anecdotas", 
    descripcion:"Descubre las historias de nuestros antepasados",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3RFLzgehXnJ0U8ny0_MYQ_rd9X_WbpHxXRw12R10yyNqsI45ek4CzJo&s=10",
  activo: true},

  {id:8, 
    nombre: "Programacion", 
    descripcion:"Expande tus conocimientos para el futuro",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYt0nQ4iIvhyFWN_jiCf77Ojsp6ZDpKoZbPvHAepJbR7x2Ti8G2wqMUw&s=10",
  activo: false},

  {id:9, 
    nombre: "Cultura", 
    descripcion:"Descubre sobre la forma de vivir de cada pais",
  imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/ef/42/ef4264d95a548f1eef58a309c4d43847.jpg",
  activo: true}
  ];

  especialidadesFiltradas = this.especialidades;
//FUNCION PARA SELECCIONAR LA ESPECIALIDAD
  seleccionar(nombre:string){
    this.especialidadseleccionada=nombre;
  }

  //FUNCION PARA BUSCAR EL LIBRO
  buscar(event:Event){
    const libroBuscar=(event.target as HTMLInputElement).value;

    this.subtitulo= `Resultados para: ${libroBuscar}`;

    this.especialidadesFiltradas= this.especialidades.filter(e => e.nombre.toLowerCase().includes(libroBuscar.toLowerCase()));
  }
}
