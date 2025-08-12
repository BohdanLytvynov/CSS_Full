import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleLayout } from './simple-layout/simple-layout';
import { GridArea } from "./grid-area/grid-area";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SimpleLayout, GridArea],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'css-grid';
}
