import {Component, Injector} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DirectiveExampleComponent} from "./components/directive-example/directive-example.component";
import {PipesExampleComponent} from "./components/pipes-example/pipes-example.component";
import {MatButtonModule} from "@angular/material/button";
import {DecoratorExampleComponent} from "./components/decorator-example/decorator-example.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DirectiveExampleComponent,
    MatButtonModule,
    PipesExampleComponent,
    DecoratorExampleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-learning';

  static INJECTOR: Injector;

  constructor(injector: Injector) {
    AppComponent.INJECTOR = injector;
  }

}
