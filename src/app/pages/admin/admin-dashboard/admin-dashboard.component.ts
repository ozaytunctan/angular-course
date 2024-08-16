import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {

  statisticData: any;

  constructor(private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.statisticData = this.activateRoute.snapshot.data['statisticData'];
  }

}
