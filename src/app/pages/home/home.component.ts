import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {FlowControlComponent} from "../../components/flow-control/flow-control.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    FlowControlComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
