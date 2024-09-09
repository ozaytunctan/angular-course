import {
  Component,
  ElementRef, QueryList,
  Signal,
  ViewChild,
  viewChild,
  ViewChildren,
  viewChildren,
  ViewContainerRef
} from '@angular/core';
import {ParentComponent} from "./parent.component";

@Component({
  selector: 'app-child-decorator-example',
  standalone: true,
  imports: [
    ParentComponent
  ],
  template: `
    <app-parent #p1></app-parent>
    <app-parent #p1></app-parent>
  `,
})
export class ChildDecoratorExampleComponent {

  child = viewChild.required("p1");
  element = viewChild("p1", {read: ElementRef})
  parent = viewChild.required("p1", {read: ParentComponent});

  childrenParent = viewChildren("p1", {read: ParentComponent});
  elementsChildren = viewChildren("p1", {read: ElementRef});
  views = viewChildren("p1", {read: ViewContainerRef});

  // static:true component html içind een başta var olduğunu angular söylemiş oluyoruz
  // static:false component html dinamik oluşabilir onu en son aramaya calış ngAfterView olduktan sonra
  @ViewChild("p1", {static: false}) dChild: ParentComponent | unknown;
  @ViewChild("p1", {static: true, read: ParentComponent}) dChildStatic: ParentComponent | unknown;
  @ViewChild("p1", {static: true, read: ElementRef}) dChildStatic2: ElementRef | unknown;

  @ViewChildren("p1") dChildren: QueryList<ParentComponent> | undefined;
  @ViewChildren("p1", {read: ElementRef}) dChildren2: QueryList<ElementRef> | unknown;


  ngOnInit(): void {
    debugger
    this.parent().showAlert();

    this.childrenParent().at(0)?.showAlert();

    const _child = this.child();
    const element = this.element();
    // const multipleChild = this.children();
    const oneChild = this.child();
    const elements = this.elementsChildren();
    const views = this.views();

    console.log("Step-8 ->ngOnInit() method run() " + this.child());
    console.log("Step-9 ->ngOnInit() method run()" + this.parent());
  }

  ngAfterViewInit() {
    console.log("Step-9 ->ngAfterViewInit() method run() " + this.child());
  }

}
