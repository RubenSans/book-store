import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book, Category } from '../../interfaces/book';
import { AddbookService } from '../../servicios/addbook.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  books: Book[] = [];

  filteredBooks: Book[] = [];
  searchTerm: string = '';

  constructor(private addBookService: AddbookService) { 
    effect(() => {     
      this.books = this.addBookService.librosSignal();

      this.filteredBooks = this.books;
    });
  }

  ngOnInit(): void {
    this.books = this.addBookService.librosSignal();

    this.filteredBooks = this.books;
  }

  deleteBook(reference: string): void {
    this.addBookService.deleteBook(reference);
  }

  formatPrice(price: number): string {
    if (typeof price !== 'number') {
      return '';
    }
    return price.toFixed(2);
  }

  filterBooks(): void {
    this.filteredBooks = this.books.filter(book =>
      (book.name.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
      (book.autor.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  }
}