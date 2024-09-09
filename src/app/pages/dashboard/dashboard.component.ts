import {Component, ElementRef, inject, viewChild} from '@angular/core';
import {WidgetComponent} from "../../components/widget/widget.component";
import {DashboardService} from "../../services/dashboard.service";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {wrapGrid} from 'animate-css-grid';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WidgetComponent,
    MatButton,
    MatIcon,
    MatMenuModule
  ],
  template: `
    <div class="header">
      <h2>Widgets Dashboard</h2>
      <button mat-raised-button [matMenuTriggerFor]="widgetMenu">
        <mat-icon>add_circle</mat-icon>
        Add Widgets
      </button>

      <mat-menu #widgetMenu="matMenu">
        @for (w of dashboardStore.widgetsToAdd(); track w.id) {
          <button mat-menu-item
                  (click)="dashboardStore.addWidget(w)">{{ w.title }}
          </button>
        } @empty {
          <button mat-menu-item>No widgets to add</button>
        }
      </mat-menu>
    </div>
    <div class="dashboard-widgets" #dashboard>
      @for (w of dashboardStore.addedWidgets(); track w.id) {
        <app-widget [data]="w"></app-widget>
      }
    </div>
  `,
  styles: `
    .dashboard-widgets {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-auto-rows: 150px;
      gap: 16px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `,
  providers: [DashboardService]
})
export class DashboardComponent {

  readonly dashboardStore = inject(DashboardService);
  dashboard = viewChild.required<ElementRef>("dashboard");

  ngOnInit() {
    wrapGrid(this.dashboard().nativeElement, {duration: 300});
  }
}
