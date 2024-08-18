import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {Book} from '../books.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  standalone: true,
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  imports: [NgIf, AsyncPipe, MatButtonModule, MatIconModule],
})
export default class BookDetailsComponent {

  // private readonly id$: Observable<string> = inject(ActivatedRoute).params.pipe(
  //   map((params) => params['id']),
  // );
  // private readonly booksService = inject(BooksService);
  // readonly book$ = this.id$.pipe(switchMap((id) => this.booksService.getById(id)));
  private readonly router = inject(Router);
  book: Book | any = this.router.getCurrentNavigation()?.extras?.state;


}
