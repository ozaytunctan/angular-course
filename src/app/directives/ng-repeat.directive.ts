import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngRepeat]',
  standalone: true
})
export class NgRepeatDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) {
  }


  @Input() set ngRepeat(values: any[]) {
    if (values == null) {
      return;
    }

    for (let i = 0; i < values.length; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef,
        {
          $implicit: values[i],//
          // name:values[i]
          index: i,
          first: i == 0,
          last: i == values.length - 1
        }
      )
    }
  }

}
