import {Injectable, Signal} from '@angular/core';
import {map, Observable, of} from 'rxjs';
import {toSignal} from "@angular/core/rxjs-interop";

export interface Book {
  id: string;
  title: string;
  img: string;
  author: string;
  viewTransitionName: string;
}

export const MOCK: Book[] = [
  {
    id: 'clean-code',
    title: 'Clean Code: A handbook of Agile Software Craftsmanship',
    img: '/images/clean-code.png',
    author: 'Robert C. Martin',
  },
  {
    id: 'introducing-git',
    title: 'Introducing Github: A Non-Technical Guide',
    img: '/images/introducing-github.png',
    author: 'Miguel Angel Durán',
  },
  {
    id: 'the-clean-coder',
    title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    img: '/images/the-clean-coder.png',
    author: 'Robert C. Martin',
  },
  {
    id: 'javascript-the-good-parts',
    title: 'JavaScript: The Good Parts',
    img: '/images/javascript-the-good-parts.png',
    author: 'Douglas Crockford',
  },
].map((b) => {
  return {
    ...b,
    viewTransitionName: `view-transition-name: book-${b.id}`,
  };
});

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  getBooks(): Signal<Book[]> {
    return toSignal(of(MOCK), {initialValue: []});
  }

  getById(id: string): Observable<Book> {
    return of(MOCK).pipe(map((books) => books.find((book) => book.id === id)!));
  }
}
