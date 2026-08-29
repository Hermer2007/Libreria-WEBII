import { Component, inject, signal } from '@angular/core';
import { LibroService } from '../../services/libro-service';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  private LibroService = inject(LibroService);

  libros = signal<Libro[]>([]);

  ngOnInit(): void {
    this.LibroService.obtenerLibros().subscribe(datos =>{
      this.libros.set(datos.results);
    })
  }
}
