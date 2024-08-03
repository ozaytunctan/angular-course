import { Component } from '@angular/core';
import {LpadPipe} from "../../pipes/lpad.pipe";

@Component({
  selector: 'app-pipes-example',
  standalone: true,
  imports: [
    LpadPipe
  ],
  templateUrl: './pipes-example.component.html',
  styleUrl: './pipes-example.component.scss'
})
export class PipesExampleComponent {

}
