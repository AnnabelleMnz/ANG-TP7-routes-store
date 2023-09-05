import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <div fxLayout="column" fxLayoutAlign="center center">
    <span class="mat-display-2">Welcom to the store ! </span>
    <!-- <br> -->
    <button mat-raised-button color="primary">Login</button>
   </div>
  `,
  styles: [`
    div[fxLayout] {margin-top:32px}
    `]
})
export class HomeComponent {

}
