import {Component, inject, Injector} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DirectiveExampleComponent} from "./components/directive-example/directive-example.component";
import {PipesExampleComponent} from "./components/pipes-example/pipes-example.component";
import {MatButtonModule} from "@angular/material/button";
import {DecoratorExampleComponent} from "./components/decorator-example/decorator-example.component";
import {ComponentLifeCycleComponent} from "./components/component-life-cycle/component-life-cycle.component";
import {LOGGER_TOKEN, LoggerService} from "./services/logger.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DirectiveExampleComponent,
    MatButtonModule,
    PipesExampleComponent,
    DecoratorExampleComponent,
    ComponentLifeCycleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-learning';

  static INJECTOR: Injector;

  private readonly logger: LoggerService = inject(LOGGER_TOKEN);

  constructor(injector: Injector) {
    AppComponent.INJECTOR = injector;
    this.logger.log("Test log message..");
  }

}



