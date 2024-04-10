import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Book, Category } from '../../interfaces/book';
import { AddbookService } from '../../servicios/addbook.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PopupComponent],
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.css'
})
export class AdminpanelComponent {

  bookForm: FormGroup;

  isEdit: boolean = false;
  editBookIndex: number = -1;

  showPopup: boolean = false;
  popupMessage: string = '';

  constructor(private addBookService: AddbookService) {
    this.bookForm = new FormGroup({
      reference: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      autor: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      category: new FormControl('', Validators.required),
      sale: new FormControl(false),
      image: new FormControl('', [Validators.required, this.httpValidator])
    });
  }

  httpValidator(campo: FormControl): { [key: string]: any } | null {
    if (campo.value && (campo.value.startsWith('http') || campo.value.startsWith('https'))) {
      return null;
    } else {
      return { 'invalidUrl': { value: campo.value } };
    }
  }

  book: Book = {
    reference: '',
    name: '',
    price: 0,
    autor: '',
    description: '',
    category: Category.Romance,
    sale: false,
    image: ''
  };

  categories = Object.values(Category);

  books: Book[] = [];

  ngOnInit(): void {
    this.books = this.addBookService.librosSignal();
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.popupMessage = this.isEdit ? 'Book updated succesfully' : 'Book added succesfully';

      if (this.isEdit) {
        console.log('Updating book');
        this.updateBook();
      } else {
        this.addNewBook();
      }
    }

    this.showPopup = true;

    setTimeout(() => {
      this.showPopup = false;
    }, 3000);
  }

  addNewBook() {
    const newBook: Book = this.createBookFromForm();

    this.books.push(newBook);

    this.bookForm.reset();

    this.addBookService.librosSignal.set(this.books);
  }

  updateBook() {
    const updatedBook: Book = this.createBookFromForm();
    this.books[this.editBookIndex] = updatedBook;
    this.addBookService.librosSignal.set(this.books);
    this.isEdit = false;
    this.editBookIndex = -1;
    this.bookForm.reset();
  }

  createBookFromForm(): Book {
    return {
      reference: this.bookForm.value.reference ? this.bookForm.value.reference : '',
      name: this.bookForm.value.name ? this.bookForm.value.name : '',
      price: this.bookForm.value.price ? this.bookForm.value.price : 0,
      autor: this.bookForm.value.autor ? this.bookForm.value.autor : '',
      description: this.bookForm.value.description ? this.bookForm.value.description : '',
      category: this.bookForm.value.category ? this.bookForm.value.category : '',
      sale: this.bookForm.value.sale ? this.bookForm.value.sale : false,
      image: this.bookForm.value.image ? this.bookForm.value.image : ''
    };
  }

  searchReference() {
    const reference = this.bookForm.value.reference;
    const index = this.books.findIndex(book => book.reference === reference);
    if (index !== -1) {
      this.isEdit = true;
      this.editBookIndex = index;
      const bookToEdit = this.books[index];
      this.fillFormWithBook(bookToEdit);
    }
  }

  fillFormWithBook(book: Book) {
    this.bookForm.patchValue({
      reference: book.reference,
      name: book.name,
      price: book.price,
      autor: book.autor,
      description: book.description,
      category: book.category,
      sale: book.sale,
      image: book.image
    });
  }
}