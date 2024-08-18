import {Component, OnInit, TrackByFunction} from '@angular/core';
import {async, first, interval, of, timer} from "rxjs";
import {AsyncPipe, CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


export declare type UserType = 'admin' | 'staff' | 'moderator';

@Component({
  selector: 'app-flow-control',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './flow-control.component.html',
  styleUrl: './flow-control.component.scss'
})
export class FlowControlComponent implements OnInit {
  isAdmin = true;
  isAdmin$ = of(true);
  userType: UserType = 'admin';

  fruits = ['apple', 'banana', 'mango', 'lime'];

  fruitsTrackBy: TrackByFunction<string> = (_, fruit) => fruit;

  constructor() {
  }

  ngOnInit(): void {

  }


  protected readonly async = async;
}
