import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book, Category } from '../interfaces/book';
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

  constructor(private addBookService: AddbookService) {}

  //testing
  bookTestArray: Book[] = [
    {
      "reference": "IMPF01",
      "name": "Imperio final",
      "price": 15.99,
      "autor": "Brandon Sanderson",
      "description": "Una emocionante novela de fantasía épica que comienza una saga imprescindible.",
      "category": Category.Fantasia,
      "image": "https://m.media-amazon.com/images/I/911Ug7hsR4L._AC_UL320_.jpg",
      "sale": true
    },
    {
      "reference": "ELAN01",
      "name": "Elantris",
      "price": 14.50,
      "autor": "Brandon Sanderson",
      "description": "Una historia de magia y misterio en una ciudad llena de secretos y corrupción.",
      "category": Category.Fantasia,
      "image": "https://m.media-amazon.com/images/I/81Rxjtap8PL._AC_UL320_.jpg",
      "sale": false
    },
    {
      "reference": "ARCA01",
      "name": "Arcanum Ilimitado",
      "price": 17.99,
      "autor": "Brandon Sanderson",
      "description": "Una colección de historias llenas de magia y aventura que te atraparán desde la primera página.",
      "category": Category.Fantasia,
      "image": "https://m.media-amazon.com/images/I/91ZgOyqg5SL._SY466_.jpg",
      "sale": false
    },
    {
      "reference": "BRAZ01",
      "name": "Brazales de Duelo",
      "price": 12.99,
      "autor": "Brandon Sanderson",
      "description": "Una novela llena de acción y suspense que te mantendrá pegado a sus páginas hasta el final.",
      "category": Category.Fantasia,
      "image": "https://m.media-amazon.com/images/I/81xWBJRCIaL._SY466_.jpg",
      "sale": true
    },
    {
      "reference": "YUMI01",
      "name": "Yumi y el pintor de pesadillas",
      "price": 9.99,
      "autor": "Gloria Fortún",
      "description": "Una historia de aventuras y fantasía que te transportará a un mundo lleno de magia y peligros.",
      "category": Category.Infantil,
      "image": "https://m.media-amazon.com/images/I/81uXgt4c0NL._SY466_.jpg",
      "sale": true
    }
  ];

  ngOnInit(): void {
    this.books = this.addBookService.librosSignal();
    
    //testing COMMENT
    this.bookTestArray.forEach(testBook => {
      if (!this.books.find(book => book.reference === testBook.reference)) {
        this.books.push(testBook);
      }
    });

    this.filteredBooks = this.books;
  }

  filterBooks(): void {
    this.filteredBooks = this.books.filter(book =>
      (book.name.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
      (book.autor.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  }  
}