import { Component } from '@angular/core';
import {RouterModule, RouterOutlet } from '@angular/router';
import { CadastroComponent } from "./pages/cadastro/cadastro.component";
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, LoginComponent, CadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-teste';
}
