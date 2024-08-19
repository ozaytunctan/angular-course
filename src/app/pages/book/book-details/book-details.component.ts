import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Book, BooksService} from '../books.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {map, Observable, switchMap} from "rxjs";

@Component({
  standalone: true,
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  imports: [NgIf, AsyncPipe, MatButtonModule, MatIconModule],
})
export default class BookDetailsComponent {

  private readonly id$: Observable<string> = inject(ActivatedRoute).params.pipe(
    map((params) => params['id']),
  );
  private readonly booksService = inject(BooksService);
  readonly book$ = this.id$.pipe(switchMap((id) => this.booksService.getById(id)));


}
