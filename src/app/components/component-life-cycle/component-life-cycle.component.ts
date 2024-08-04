import {
  AfterContentChecked, AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-component-life-cycle',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `

    Component life cycle hooks

    <input type="text" [(ngModel)]="data">

  `
})
export class ComponentLifeCycleComponent
  implements OnChanges, OnInit, DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    AfterContentChecked,
    OnDestroy {

  @Input() data?: string;

  constructor() {
    console.log("Step-1 -> constructor method run()")
  }

  ngOnChanges(changes: SimpleChanges): void {
    const simpleChange = changes['data'];
    console.log("Step-2 -> ngOnChanges() method run()" + simpleChange.currentValue);
  }

  ngOnInit(): void {
    console.log("Step-3 ->ngOnInit() method run()");
  }


  ngDoCheck(): void {
    //state değişimlerinde tetiklenir.
    // Component bir değişiklik olduğunda sürekli tetiklenir
    console.log("Step-4 -> ngDoCheck() method run()");

  }

  ngAfterContentInit() {
    // Component ilk içeriği oluşturulduğunda tetiklenir
    //<ng-content> ile içerik geçilmesi tamamlandıysa tetiklenir
    console.log("Step-5 ->ngAfterContentInit() method run()");

  }


  ngAfterContentChecked(): void {
    // Sayfa içeriğinde herhangi bir değişiklik soz konuus olduğundan
    // Component içeriğinde bir deiğişiklik olduğunda sürekli tetiklenir

    console.log("Step-6 ->ngAfterContentChecked() method run()");

  }


  ngAfterViewInit(): void {
    // view yüklendikten sonra tetiklenir.
    // Component ilk view (template) yüklendikten sonra tetiklenir
    console.log("Step-7 ->ngAfterViewInit() method run()");

  }

  ngAfterViewChecked(): void {
    // Component view güncellendiğinde tetiklenir .
    console.log("Step-8 ->ngAfterViewChecked() method run()");

  }

  ngOnDestroy(): void {
    // Component destroy olduğunda çağrılır. Domdan kaldırıldığında çağrılır.
    console.log("Step-9 ->ngOnDestroy() method run()..")
  }


}
