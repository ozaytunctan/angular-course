import {Component} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {HasRoleDirective} from "../../directives/has-role.directive";
import {HighLightDirective} from "../../directives/high-light.directive";
import {HasAuthorityDirective} from "../../directives/has-authority.directive";
import {NgShowDirective} from "../../directives/ng-show.directive";
import {NgRepeatDirective} from "../../directives/ng-repeat.directive";

@Component({
  selector: 'app-directive-example',
  standalone: true,
  imports: [
    JsonPipe,
    HasRoleDirective,
    HighLightDirective,
    HasAuthorityDirective,
    NgShowDirective,
    NgRepeatDirective
  ],
  templateUrl: './directive-example.component.html',
  styleUrl: './directive-example.component.scss'
})
export class DirectiveExampleComponent {

  isShow: boolean = false;
  names = ['Özay', 'Yağmur', 'Eylül Ada']

  onToggleVisible() {
    this.isShow = !this.isShow;
  }

}
