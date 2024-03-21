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
    },
    {
      "reference": "TIEM01",
      "name": "El tiempo que tuvimos",
      "price": 9.99,
      "autor": "Cherry Chic",
      "description": "Una historia de aventuras y fantasía que te transportará a un mundo lleno de magia y peligros.",
      "category": Category.Infantil,
      "image": "https://m.media-amazon.com/images/I/41QOytwcDiL.jpg",
      "sale": true
    },
    {
      "reference": "AMOR01",
      "name": "El amor en los tiempos del cólera",
      "price": 9.99,
      "autor": "Gabriel García Márquez",
      "description": "Una historia de aventuras y fantasía que te transportará a un mundo lleno de magia y peligros.",
      "category": Category.Infantil,
      "image": "https://imagessl7.casadellibro.com/a/l/s5/97/9788466347297.webp",
      "sale": false
    },
    {
      "reference": "VINC01",
      "name": "El código Da Vinci",
      "price": 18.95,
      "autor": "Dan Brown",
      "description": "Una novela llena de acción y suspense que te mantendrá pegado a sus páginas hasta el final.",
      "category": Category.Fantasia,
      "image": "https://www.planetadelibros.com/usuaris/libros/thumbs/d0a7d172-4365-4625-99a5-4868259c35e5/d_295_510/portada_el-codigo-da-vinci_dan-brown_201706061655.webp",
      "sale": true
    },
    {
      "reference": "ALCH01",
      "name": "El alquimista",
      "price": 17.10,
      "autor": "Paulo Coelho",
      "description": "Una novela llena de acción y suspense que te mantendrá pegado a sus páginas hasta el final.",
      "category": Category.Fantasia,
      "image": "https://www.planetadelibros.com/usuaris/libros/thumbs/54e8361f-d68d-4462-84c6-d06ef130f5ae/d_295_510/portada_el-alquimista_paulo-coelho_201612191218.webp",
      "sale": true
    },
    {
      "reference": "PRIN01",
      "name": "El principito",
      "price": 6.60,
      "autor": "Antoine de Saint-Exupéry",
      "description": "Una novela llena de acción y suspense que te mantendrá pegado a sus páginas hasta el final.",
      "category": Category.Infantil,
      "image": "https://m.media-amazon.com/images/I/714Hvb52n-L._SY466_.jpg",
      "sale": false
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