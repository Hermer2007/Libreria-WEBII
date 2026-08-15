import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Specialities } from "../../shared/specialities/specialities";

@Component({
  selector: 'app-home',
  imports: [Hero, Specialities],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
