import { Injectable, signal } from '@angular/core';
import { Book } from '../interfaces/book';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddbookService {

  libros: Book[] = [];

  librosSignal = signal<Book[]>([]);

  apiUrl: string = 'http://localhost:3000/api/books';

  constructor(private http: HttpClient) { this.getAllBooks(); }

  getAllBooks() {
    this.http.get<Book[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error when obtaining the books:', error);
          return of([]);
        })
      )
      .subscribe((libros) => {
        libros.forEach(libro => libro.price = parseFloat(libro.price as unknown as string));
        this.librosSignal.set(libros);
      });
  }

  getBookByReference(reference: string) {
    return this.http.get<Book>(`${this.apiUrl}/${reference}`)
      .pipe(
        catchError(error => {
          console.error('Error when obtaining the book:', error);
          return of(null);
        })
      );
  }

  createBook(libro: Book) {
    this.http.post<Book>(this.apiUrl, libro)
      .pipe(
        catchError(error => {
          console.error('Error when creating the book:', error);
          return of(null);
        })
      )
      .subscribe(response => {
        if (response) {
          this.getAllBooks();
        }
      });
  }

  updateBook(libro: Book) {
    this.http.put<Book>(`${this.apiUrl}/${libro.reference}`, libro)
      .pipe(
        catchError(error => {
          console.error('Error when updating the book:', error);
          return of(null);
        })
      )
      .subscribe(response => {
        if (response) {
          this.getAllBooks();
        }
      });
  }

  deleteBook(reference: string) {
    this.http.delete<Book>(`${this.apiUrl}/${reference}`)
      .pipe(
        catchError(error => {
          console.error('Error when deleting the book:', error);
          return of(null);
        })
      )
      .subscribe(response => {
        if (response) {
          this.getAllBooks();
        }
      });
  }
}