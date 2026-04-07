import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  // Para usar el router-outlet, y Navbar es necesario importarlos
  //  en el componente que lo va a usar, en este caso el 
  // app.component.ts
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Lalito Ice');
}
