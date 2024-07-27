import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {hasRole} from "../services/auth.service";

@Directive({
  selector: '[hasRole]',
  standalone: true
})
export class HasRoleDirective {

  //yapısal directive
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef
  ) {
  }

  @Input() set hasRole(roles: string[] | any[]) {
    let authorized = hasRole(roles);
    if (authorized) {
      const context = {
        $implicit: authorized
      };
      this.viewContainer.createEmbeddedView(this.templateRef, context);
    } else {
      this.viewContainer.clear();
    }
  }

}
