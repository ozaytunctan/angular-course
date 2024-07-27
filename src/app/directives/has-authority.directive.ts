import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {hasAuthority} from "../services/auth.service";

@Directive({
  selector: '[hasAuthority]',
  standalone: true
})
export class HasAuthorityDirective {


  //yapısal directive
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef
  ) {
  }

  @Input() set hasAuthority(roles: string[] | any[]) {
    let authorized = hasAuthority(roles);
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
