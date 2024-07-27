import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DirectiveExampleComponent} from "./components/directive-example/directive-example.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DirectiveExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-learning';
}
