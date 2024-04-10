import { Injectable, signal } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class AddbookService {

  librosSignal = signal<Book[]>([]);
}